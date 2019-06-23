import React, { Component } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import image from '../images/home3.jpg'

export default class Home extends Component {
  render() {
    console.log("%c Welcome To Summer Of Code !", "background: black; color: green; font-size: xx-large");

    return (
        <div>
            <Navbar />
            <div className="row high" style={bg}>
                    <div className="col-12">
                         <h3 className="text-center m-5  title">Hello World </h3>
                    </div>
            </div>
              <div className="container">
              <div className="row black m-3">
                <p className="text-center t m-3">Major Goals of  Program</p>
                    <div className="title m-2 card black p-10">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">&#9679; Inspire young developers to get involved in Open Source software 
                          development.</li>
                          <li className="list-group-item">&#9679; Help 1st and 2nd year students to master the development workflow of
                          Git and GitHub.</li>
                          <li className="list-group-item">&#9679; Connect with the mentors in the campus, help them  in projects even
                          after the program ends.</li>
                          <li className="list-group-item">&#9679; Prepare for other Open Source programs</li>
                        </ul>
                      </div>
                  </div>
                  <div className="row m_3 mx_4">
                    <button className="btn btn-primary m-2"><a href="https://github.com/summerofcodeatuit/2019/blob/master/Student.md" className="link_white">Student Guide</a></button> <button className="btn btn-primary m-2"><a href="https://github.com/summerofcodeatuit/2019/blob/master/Mentor.md" className="link_white">Mentor Guide</a></button>
                  </div>	
            </div>
            
            <Footer />
        </div>
     
    )

  }
}

const bg = {
  backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
}
