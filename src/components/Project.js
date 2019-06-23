import React, { Component } from 'react'
import Tools from './Tools'

export default class Project extends Component {
  render() {
     let id = 0;
      const tech = this.props.data.tools.map((tool)=>{
                 id++;
                return <Tools key={id} name={tool} id={id} />
      });
     // console.log("props ",this.props.data)
    return (
        <div className="col-sm-3 m-3 card">
          <div className="card-body">
            <h5 className="card-title line">{this.props.data.name}</h5>
            <p className="card-text line justify">{this.props.data.des}</p>
            <p className="card-text line justify">
              <span>Mentored by : <a href={this.props.data.profile_url}>{this.props.data.mentor}</a></span>
              </p>
            <div className="tools line justify">
                {tech}
            </div>
            <a href={this.props.data.url} className="btn btn-primary">details</a>
        </div>
      </div>
    )
  }
}
