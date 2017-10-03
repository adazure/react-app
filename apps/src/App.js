import { Router, Route, Switch } from 'react-router'
import React, { Component } from 'react';
import Menu from './components/Menu';
import Slider from './components/Sliders';
import News from './components/News';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="context">
        <Menu/>
        <Slider />
        <News />
      </div>
    );
  }
}

export default App;
