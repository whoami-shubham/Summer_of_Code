import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div className="row user_list_font p-1">
        <div className="col-3">
            {this.props.data.name}
        </div>
        <div className="col-3">
            <a href={this.props.data.url} style={link}>{this.props.data.git_id}</a>
        </div>
        <div className="col-3">
            {this.props.data.commits}
        </div>
        <div className="col-3">
            <span className="green">{this.props.data.added}++ </span>
            <span className="red">{this.props.data.removed}-- </span>
        </div>
      </div>
    )
  }

   
}
const link = {
  color:'#3c4043',
  textDecoration:"none",
  cursor: "pointer"
}
