import React, { Component } from 'react'

import './style.scss'

class CollaborateWithUs extends Component {
  render () {
    return (
      <section className="collaborate-with-us">
        <div className="container">
          <h2>Collaborate with us</h2>
          <form className="collaborate-with-us--form">
            <div>
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label>Surname</label>
              <input type="text" placeholder="Surname" />
            </div>
            <div>
              <label>Phone</label>
              <input type="tel" placeholder="Phone" />
            </div>
            <div>
              <label>Email address</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Experience</label>
              <select placeholder="Select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div>
              <label>Where did you hear about us?</label>
              <select placeholder="Select">
                <option value="Magazine">Magazine</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Friends">Friends</option>
                <option value="Website">Website</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default CollaborateWithUs
