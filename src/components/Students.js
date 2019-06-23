import React, { Component } from 'react'
import './faq.css'
import Navbar from './Navbar';
import Footer from './Footer';
export default class Students extends Component {
  render() {
    return (
      <div>
         <Navbar />
          <div className="container high">
            <h1 className="text-center my-3">Students FAQ</h1>
            <center>
                    <div className="col-10 col-md-8">
                            <div className=" card accordion  my-5" id="accordionExample">
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
                                                    While you’ll be adding your piece of code to the existing codebase, you will get to learn the structure of the project and more about the process of creating it from scratch. That, in future will help you in creating your own projects.
                                                    If You don’t know how to code it's fine contributing is not all about coding you can still contribute in documentation of project or improving existing documentation by fixing typos or broken links etc .
                                            </div>
                                            </div>
                                        </div>
                                    <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Requirements
                                        </button>
                                        </h2>
                                    </div>
                                
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body justify">
                                            <ul className="list-group p-2 list-group-flush ">
                                                <li className="list-group-item">&#9679; A Working Laptop / PC With Internet Connection.</li>
                                                <li className="list-group-item">&#9679; A github account if you dont have sign up <a href="https://github.com/join">here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Leaderboard
                                        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body justify">
                                                    The leaderboard which displays all the activities by registered students would be live at   <a className="inline" href="https://summerofcodeatuit.github.io/2019/#/leaderboard">here</a> Basically it represents the activity of each and every student registered
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              Choosing A Project
                                        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body justify">
                                                 First of all, you can choose as many projects as you want. It’s not about doing everything on just one project, but solving as many issues as you can, contributing as much as you can.                    
                                            </div>
                                    </div>
                                    </div>
                                    <div className="card">
                                            <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                     Adding Your Own Project
                                                </button>
                                            </h2>
                                            </div>
                                        
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body justify">
                                                         Summer of Code is about working on Open Source . In case you did not like any of the projects listed. Tell us about the project you’re working on, add your project as mentor.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Resources
                                                </button>
                                            </h2>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body justify">
                                            <ul className="list-group p-2 list-group-flush ">
                                                <li className="list-group-item">&#9679; The simplest Guide <a href="http://rogerdudler.github.io/git-guide/">git-guide</a></li>
                                                <li className="list-group-item">&#9679; A Medium <a href="https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940">Article</a></li>
                                                <li className="list-group-item">&#9679; A Youtube <a href="https://youtu.be/MJUJ4wbFm_A">video</a>. Don’t be afraid if you don’t have a Linux or Mac you can use git commands in windows using <a href="https://git-scm.com/download/win">git bash</a></li>
                                                <li className="list-group-item">&#9679; Overview of first contribution. follow given steps for your <a href="https://github.com/firstcontributions/first-contributions">first contribution</a></li>
                                            </ul>
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
                                                    For more information go to <a className="inline" href="https://github.com/summerofcodeatuit/2019/blob/master/Student.md">here</a>
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
