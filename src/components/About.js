import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class About extends Component {
  render() {
    return (
      <div>
         <Navbar />
         <div className="high container">
               <div className="material-card m-5 card">
                  <p className="text-center p-3 blue t">About</p>
                  <p className="text-justify p-10 black c">Summer Of code  is an initiative by Students of IT Department of UIT RGPV Bhopal for the students, who have never participated in Free or Open Source Software development before,to get them involved during the summer vacations and break the ice of Open Source contributions.</p>
               </div>
           </div>
         <Footer />
      </div>
    )
  }
}
