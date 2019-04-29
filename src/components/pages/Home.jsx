import React, { Component } from 'react';
const USER_INFO = JSON.parse(localStorage.getItem('user-info'))

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: USER_INFO
    }
  }
  render() {
    return(
      <div>
        <h2 className="mx-auto">Bem Vindo</h2>
      </div>
    )
  }
}