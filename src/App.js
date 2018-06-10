import React, { Component } from 'react'

import Banner from './components/Banner'
import Navbar from './components/Navbar'

import './assets/stylesheets/main.scss'

class App extends Component {
  componentDidMount () {
    window.scroll(function() {
      console.log("S")
    })
  }
  render() {
    return (
      <main className="wrapper">
        <Navbar />
        <Banner />
      </main>
    )
  }
}

export default App;
