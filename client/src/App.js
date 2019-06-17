import React, { Component } from 'react';
import logo from './logo.svg';
import authService from './service/authService';
import {socketConfig} from "./socket/socket";
import { Switch, Route } from "react-router-dom"
import {Room} from "./components/Rooms";
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      msg:"",
      msgSocket: ""
    };
    this.authService = new authService();
    this.connectBack();
  }

  componentDidMount(){
    console.log("didmount")
  }

  connectBack = () => {
    this.authService.Msg()
    .then(({msg, name}) => {
      // console.log(msg)
      this.setState({msg, name})})
  }
  pepe = () => {
    this.setState({msg:"pepe"})
  }
  render() {
    console.log("APP")
    console.log("render")
    return (
      <div>
        <button onClick={this.pepe}>Pepe</button>
        <Switch>
          <Route path="/:room/:num/chat" component={Room}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
