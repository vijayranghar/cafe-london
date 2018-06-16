import React, { Component } from 'react'

import Banner from './components/Banner'
import Community from './components/Community'
import Footer from './components/Footer'
import Location from './components/Location'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import PopularRecipes from './components/PopularRecipes'
import ProgressTracker from './components/ProgressTracker'

import './assets/stylesheets/main.scss'

class App extends Component {
  render() {
    const sections = ['banner','community','location','menu','popular-recipes','collaborate-with-us']
    return (
      <main className="wrapper">
        <Navbar />
        <ProgressTracker sections={sections} />
        <Banner />
        <Community />
        <Menu />
        <PopularRecipes />
        <Location />
        <Footer />
      </main>
    )
  }
}

export default App;
