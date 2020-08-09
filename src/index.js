import './style';
import { Component } from 'preact';
import Pusher from 'pusher-js';
import logo from '../assets/Julia.svg';
import sendbtn from '../assets/send.svg';
import { Router } from 'preact-router';
import Homepage from './home'
import Botpage from './botpage'

export default class App extends Component {


  render() {
    return (
     <div id="app">
  
      <Router >
       <Homepage path="/" />
       <Botpage path="/julia" />
      </Router>
     </div>
    );
   }
}
