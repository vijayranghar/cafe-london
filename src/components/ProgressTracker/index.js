import React, { Component } from 'react'

import './style.scss'
class ProgressTracker extends Component {
  componentDidMount() {
    let sections = document.querySelectorAll("section")
    window.onscroll = function () {
      sections.forEach((item) => {
       if(item.getBoundingClientRect().top <= 0 && item.getBoundingClientRect().bottom >= 0) {
         document.querySelectorAll(".progress-tracker li").forEach(item => {
           item.classList=""
         })
         document.querySelector(`.progress-tracker li[data-src=${item.className}]`).classList="active"
       }
      })
    }
  }
  render () {
    return (
      <div className="progress-tracker">
        <ul>
          <li data-src="section1">1</li>
          <li data-src="section2">2</li>
          <li data-src="section3">3</li>
          <li data-src="section4">4</li>
          <li data-src="section5">5</li>
          <li data-src="section6">6</li>
        </ul>
      </div>
    )
  }
}

export default ProgressTracker
