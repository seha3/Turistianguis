import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Gerson from './Component/button.js'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> yoo! </h1>
        <Gerson />
      </div>

    );
  }
}

export default hot(module)(App);