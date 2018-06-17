import React, { Component } from 'react'

import './style.scss'
class Footer extends Component {
  render () {
    const links = [{'title': 'section','links':['Subsection','Subsection','Subsection','Subsection']}]
    let renderLinks = []
    for(var i=1;i<=5;i++) {
       renderLinks.push(links.map(({title,links},index) => {
        const heading = title
        const footerLinks = links.map((link,index) => (
          <li><a href="#" key={index}>link</a></li>
        ))
        return (
          <ul>
            <li>{`heading ${i}`}</li>
            {footerLinks}
          </ul>
        )
      }))
    }
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer--links">
            {renderLinks}
            <p>
              2017. Company. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="footer--logos">
            <h2>This is the <strong>logo</strong></h2>

            <img src={require("../../assets/images/social.png")}/>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
