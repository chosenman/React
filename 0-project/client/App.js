import React, { Component } from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

import Home from "./Home/home.js";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}
