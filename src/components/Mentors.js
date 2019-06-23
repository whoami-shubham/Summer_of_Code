import React, { Component } from 'react'
import './faq.css'
import Navbar from './Navbar';
import Footer from './Footer';
export default class Mentors extends Component {
  render() {
    return (
      <div>
         <Navbar />
          <div className="container high">
            <h1 className="text-center my-3">Mentors FAQ</h1>
            <center>
            <div className="col-10 col-md-8 my-3">
                    <div className=" card accordion" id="accordionExample">
                            <div className="card">
                                    <div className="card-header" id="headingThree">
                                      <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Why Should I Apply ?
                                        </button>
                                      </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                      <div className="card-body justify">
                                           Do you have a project which you had started months ago and now you don’t find time to add new features to it or fix small issues ?  Do you have an idea in your mind about a small or big utility and want to make it real in ? then you should apply.
                                      </div>
                                    </div>
                                  </div>
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Eligibility
                                  </button>
                                </h2>
                              </div>
                          
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body justify">
                                        <ul className="list-group p-2 list-group-flush ">
                                            <li className="list-group-item">&#9679; You must have one or more projects on GitHub.</li>
                                            <li className="list-group-item">&#9679; Your projects should have two or more easy-to-fix issues or good-first issues and at least one moderate level issues. </li>
                                        </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       How to submit project ?
                                  </button>
                                </h2>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body justify">
                                        You don't have to upload your code here. You just have to share your Github project link and some project related data like which technology you have used to build this project or which programming languages are used so that contributers can easily choose their projects.
                                        Submit your project in following JSON format as explained <a href="https://github.com/whoami-shubham/Summer_of_Code/blob/master/Mentor.md">here.</a><br/>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                                            <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                       More
                                                </button>
                                            </h2>
                                            </div>
                                            <div id="collapseSeven" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body justify">
                                                    For more information go to <a className="inline" href="https://github.com/summerofcodeatuit/2019/blob/master/Mentor.md">here</a>
                                            </div>
                                            </div>
                                        </div>
                          </div>
                  </div>
        </center> 
        </div>
        <Footer />
      </div>
    )
  }
}
