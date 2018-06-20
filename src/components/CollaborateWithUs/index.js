import React, { Component } from 'react'

import './style.scss'

class CollaborateWithUs extends Component {
  render () {
    return (
      <section className="collaborate-with-us">
        <div className="container">
          <div className="collaborate-with-us--info">
            <h2>Collaborate</h2>
            <h3>with us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            </p>
          </div>
          <form className="collaborate-with-us--form">
            <div className="collaborate-with-us--form--group">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="collaborate-with-us--form--group">
              <label>Surname</label>
              <input type="text" placeholder="Surname" />
            </div>
            <div className="collaborate-with-us--form--group">
              <label>Phone</label>
              <input type="tel" placeholder="Phone" />
            </div>
            <div className="collaborate-with-us--form--group">
              <label>Email address</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="collaborate-with-us--form--group">
              <label>Experience</label>
              <select placeholder="Select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div className="collaborate-with-us--form--group">
              <label>Where did you hear about us?</label>
              <select placeholder="Select">
                <option value="Magazine">Magazine</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Friends">Friends</option>
                <option value="Website">Website</option>
              </select>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    )
  }
}

export default CollaborateWithUs
