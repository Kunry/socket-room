import React, { Component } from 'react';
import logo from './logo.svg';
import authService from './service/authService';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      msg:""
    };
    this.authService = new authService();
    this.connectBack();
  }

  connectBack = () => {
    this.authService.Msg()
    .then(({msg, name}) => {
      console.log(msg)
      this.setState({msg, name})})
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
       <p>{this.state.msg}</p>
       <p>No podia faltar escribir ...... <b>{this.state.name}</b></p>
      </div>
    );
  }
}

export default App;
