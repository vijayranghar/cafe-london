import React, { Component } from 'react'

import './style.scss'

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          Logo
        </div>
        <div className="navbar__navigation">
          <ul className="navbar__navigation__navigation-left">
            <li><a href="javascript:void(0)">About</a></li>
            <li><a href="javascript:void(0)">Community</a></li>
            <li><a href="javascript:void(0)">Location</a></li>
            <li><a href="javascript:void(0)">Our menu</a></li>
            <li><a href="javascript:void(0)">Recipes</a></li>
          </ul>
          <ul className="navbar__navigation__navigation-right">
            <li><a href="javascript:void(0)">Contact</a></li>
            <li><a href="javascript:void(0)">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
