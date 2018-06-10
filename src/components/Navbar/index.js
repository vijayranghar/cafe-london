import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div>
        <div className="logo">
          Logo
        </div>
        <nav className="navigation-left">
          <li><a href="#">About</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Our menu</a></li>
          <li><a href="#"></a>Recipes</li>
        </nav>
        <nav className="naivigation-right">
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </nav>
      </div>
    )
  }
}

export default Navbar
