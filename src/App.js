import React, { Component } from 'react'

import Banner from './components/Banner'
import Community from './components/Community'
import CollaborateWithUs from './components/CollaborateWithUs'
import Footer from './components/Footer'
import Location from './components/Location'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import PopularRecipes from './components/PopularRecipes'
import ProgressTracker from './components/ProgressTracker'

import { ParallaxProvider } from 'react-scroll-parallax'
import './assets/stylesheets/main.scss'

class App extends Component {
  render() {
    const sections = ['banner','community','location','menu','popular-recipes','collaborate-with-us']
    return (
      <ParallaxProvider>
        <main className="wrapper">
          <Navbar />
          <ProgressTracker sections={sections} />
          <Banner />
          <Community />
          <Menu />
          <PopularRecipes />
          <Location />
          <CollaborateWithUs />
          <Footer />
        </main>
      </ParallaxProvider>  
    )
  }
}

export default App;
