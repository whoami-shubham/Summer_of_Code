import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Working extends Component {
  render() {
    return (
      <div>
         <Navbar />
         <div className="high">
              <div className="container">
                  <div className="card material-card m-5">
                      <p className="text-center p-3 blue t">How it works ?</p>
                      <p className="text-justify p-10 black c">Participants can apply for the program either as a student or as a mentor. Mentors are selected through a selection process. The selected mentors propose projects, the best of which are chosen to be included in the program. Students work on these projects in their summer vacations. The mentors review the pull requests and the overall work on their project by various contributors throughout the coding period of the program. At the end of the coding period, the students are compared on the basis of most contributions.</p>
                  </div>
              </div>
         </div>
         <Footer />
      </div>
    )
  }
}
