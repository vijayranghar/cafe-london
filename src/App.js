import React, { Component } from 'react'

import Banner from './components/Banner'
import Navbar from './components/Navbar'

class App extends Component {
  componentDidMount () {
    window.scroll(function() {
      console.log("S")
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    )
  }
}

export default App;
