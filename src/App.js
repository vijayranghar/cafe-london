import React, { Component } from 'react'

import Banner from './components/Banner'
import ProgressTracker from './components/ProgressTracker'
import Navbar from './components/Navbar'

import './assets/stylesheets/main.scss'

class App extends Component {
  render() {
    return (
      <main className="wrapper">
        <Navbar />
        <ProgressTracker />
        <Banner />
      </main>
    )
  }
}

export default App;
