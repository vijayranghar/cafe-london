import React, { Component } from 'react'

import './style.scss'
class ProgressTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection:"section1",
    }
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    let sections = document.querySelectorAll('section')
    let progressIndicators = document.querySelectorAll('.progress-tracker li')
    sections.forEach(item => {
      //TODO check this
      if(item.getBoundingClientRect().top <=0) { //get section which is nearer to top of window
        this.setState({
          activeSection: item.className
        })
      }
    })
    progressIndicators.forEach(item => {
      item.className= ""
      if(item.dataset.src === this.state.activeSection)
      item.className="active"
    })
  }
  handleClick = (e) => {
    if(e.target.tagName==="LI") {
      let elementSrc = e.target.dataset.src
      let xPosition = document.querySelector(`section.${elementSrc}`).offsetTop
      window.scrollTo({
        top: xPosition,
        behavior: 'smooth',
      })
    }
  }
  render () {
    const { sections } = this.props
    const renderSections = sections.map((section, index) => <li key={index} data-src={`${section}`}>{index+1}</li>)
    return (
      <div className="progress-tracker">
        <ul onClick={this.handleClick}>
          {renderSections}
        </ul>
      </div>
    )
  }
}

export default ProgressTracker
