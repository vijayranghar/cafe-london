import React, { Component } from 'react'

class Location extends Component {
  render () {
    return (
      <section className="location">
        <div className="container">
          <h2>Location</h2>
          <img src={require("../../assets/images/map.png")} style={{'width':'100%'}}/>
        </div>
      </section>
    )
  }
}

export default Location
