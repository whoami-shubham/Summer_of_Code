import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class GetStarted extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="App-header high">
                <h1 className="text-center m-3">Get Started</h1>
           </div>
          <Footer />
      </div>
    )
  }
}
