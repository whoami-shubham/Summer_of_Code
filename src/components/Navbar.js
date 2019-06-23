import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
        
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm ">
                    <Link to="/home" className="nav-link brand code nav-item"><img src={logo} alt="logo" className="logo"/> Summer of Code</Link>  
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav font ml-auto">
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" >about  </Link> <span className="sr-only">(current)</span> 
                                </li>
                                <li className="nav-item">
                                     <Link to="/projects" className="nav-link" >projects</Link>                                                 
                                </li>
                                <li className="nav-item">
                                        <Link to="/how-it-works" className="nav-link" >how it works </Link>                
                                </li>
                                <li className="nav-item">
                                        <Link to="/leaderboard" className="nav-link" >leaderboard</Link>                
                                </li>
                            </ul>
                        </div>
                </nav>
                
            
    )
  }
}
