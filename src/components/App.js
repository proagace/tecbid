import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      	<Switch>
      		<Route exact path="/" component={Home} />
      	</Switch>
      </div>
    );
  }
}

