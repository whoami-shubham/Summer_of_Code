import React, { Component } from 'react'

export default class Tools extends Component {
  render() {
    const colors = ['primary','secondary','success','danger','warning','info','dark'];
    const index = (this.props.id)%7;
    const color = colors[index];
    let class_ = "badge  badge-"+color;
    return (      
        <div className="p-1 tool"><span className={class_}>{this.props.name}</span></div>
    )
  }
}
