import React, { Component } from 'react';
import {socketConfig} from "../socket/socket";

export class Room extends Component{
    constructor(props){
        super(props);
        this.connectSocket = new socketConfig(this.socketMsg, {room:props.match.params.room, num:props.match.params.num});
        this.state = {
            msg:""
        }
        console.log({room:props.match.params.room, num:props.match.params.num})
    }

  socketMsg = (msgSocket) => {
    console.log(msgSocket)
    this.setState({msgSocket})
  }

  socketNewMessage = (e) => {
    console.log(e)
    this.connectSocket.newMessage(`Prueba room: ${this.props.match.params.room} ${this.props.match.params.num}`, {room:this.props.match.params.room, num:this.props.match.params.num})
  }

  render(){
      console.log("Entra en la room")
      return(
          <div>
              <p>{this.state.msg}</p>
              <button onClick={this.socketNewMessage}>Mensaje</button>
          </div>
      )
  }
}
