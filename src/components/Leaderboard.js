import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import User from './User'
// import leaderboard from '../users'

export default class Leaderboard extends Component {
    direction = {
        "name":0,
         "git_id":0,
         "commits":0,
         "added":0
    }
     Url ="https://raw.githubusercontent.com/summerofcodeatuit/2019/master/leaderboard.json";
    constructor(){
        super()
        this.state = {
            users:[],
            isLoading:true
        }
        this.sort_by = this.sort_by.bind(this);
        this.fun = this.fun.bind(this);    
    }
    componentDidMount(){
          fetch(this.Url)
          .then(res=>res.json())
          .then(data =>this.setState({users:data["leaderboard"],isLoading:false}))
          .catch(err => console.log(err))
    }
    sort_by(property){
        let dir = this.direction[property];
        let leaderboard = this.state.users;
        //console.table(leaderboard);
        leaderboard.sort(this.fun(property,dir))
        //console.table(leaderboard);
         this.setState({users:leaderboard});
         this.direction[property] = 1-this.direction[property]
    }
    fun(property){
        const dir = this.direction[property]===1?1:-1;
        return function(a,b){
                if(typeof a[property]==="number"){
                      return (a[property]-b[property])*dir;
                }
                return (a[property].localeCompare(b[property]))*dir;
        }
    }

  render() {
   let users;
      if(!this.state.isLoading){
            users = Object.values(this.state.users).map((user)=>{
               return <User key={user.id} data={user} />;
            })
      }
   const header = (
         <div className="container">
               <div className="row leaderboard-header badge-primary">
                  <div className="col-3" onClick={(name)=>this.sort_by('name')}>
                        <span className="badge  p-2" title="click to sort by Name">Name</span>
                  </div>
                  <div className="col-3" onClick={(name)=>this.sort_by('git_id')}>
                        <span className="badge  p-2" title="click to sort by username">Github Username</span>
                  </div>
                  <div className="col-3" onClick={(name)=>this.sort_by('commits')}>
                        <span className="badge  p-2" title="click to sort by commits">Commits</span>
                  </div>
                  <div className="col-3" onClick={(name)=>this.sort_by('added')}>
                        <span className="badge  p-2" title="click to sort by lines added">Lines <br/> +  - </span>
                  </div>
               </div>
               {users}
         </div>
   )
    return (
      <div>
         <Navbar />
         <div className="high leaderboard">
                <h1 className="text-center leaderboard_title blue">Leaderboard</h1>
                {this.state.isLoading?<h4 className="text-center">Loading...</h4>:header}
           </div>
         <Footer />
      </div>
    )
  }
}
