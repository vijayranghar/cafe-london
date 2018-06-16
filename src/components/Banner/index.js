import React, { Component } from 'react'
import './style.scss'

class Banner extends Component {
  render () {
    return (
      <section className="banner">
        <h2>The best foodie <strong>experience</strong><small>now in London</small></h2>
        <div className="banner__info">
          request info
        </div>
      </section>
    )
  }
}

export default Banner
