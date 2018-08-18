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
          <li key={index}><a href="#" key={index}>{link}</a></li>
        ))
        return (
          <ul key={index}>
            <li>{`heading ${i}`}</li>
            {footerLinks}
          </ul>
        )
      }))
    }
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__links">
            {renderLinks}
            <p>
              2017. Company. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="footer__logos">
            <h2>This is the <strong>logo</strong></h2>
            <img src={require("../../assets/images/social.png")} alt="social links" />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
