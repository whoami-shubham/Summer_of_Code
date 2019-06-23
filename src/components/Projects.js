import React, { Component } from 'react'
import Project from './Project'
// import projects_data from '../data'
import Navbar from './Navbar'
import Footer from './Footer'


export default class Projects extends Component {
    constructor(){
      super();
      this.state = {
        projects:{},
        isloading:true
      }
    }
  componentDidMount(){
    fetch("https://raw.githubusercontent.com/summerofcodeatuit/2019/master/data.json")
    .then((res)=>res.json())
    .then((data)=> {
      this.setState(
        {projects:data,
        isloading:false })
  
  })
  .catch(err => console.log(err))
  }

  render() {
         let  projects=null;
          if(!this.state.isloading){
           // console.log(this.state.projects.data)
             projects = Object.values(this.state.projects.data).map((project,i)=>{
              //console.log(typeof project)
              return <Project key={i} data={project}/>;
         })
          }
     
    return (
    <div>
      <Navbar />
        <div className="container high">
            <div className="row">
                      {this.state.isloading?<h1 className="text-center high my-5 loading">Loading...</h1>:projects}
            </div>
        </div>

      <Footer />

    </div>
    )
  }
}
