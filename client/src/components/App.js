import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Home from './home';
import Profile from './profile';
import * as firebase from 'firebase';
import config from './config.json';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.mobileMode = false;
    this.observers = [];
    this.state = { user: {} };
  }

  handleResize = (evt) => {
    if(window.innerWidth <= 600 && !this.mobileMode) {
      this.mobileMode = true;
      this.observers.forEach(observer => observer(this.mobileMode));
    } else if (window.innerWidth > 600 && this.mobileMode) {
      this.mobileMode = false;
      this.observers.forEach(observer => observer(this.mobileMode));
    }
  };

  setUser = (user) => {
    fetch('http://localhost:8080/users/' + user.email)
    .then(resp => {return resp.json();})
    .then(obj => {
      this.setState({user: obj});
    })
    .catch(err => console.log(err));
  };

  logOff = () => {
    this.props.history.push('/');
    this.setState({ user: {} });
  };

  bindObserver = f => {
    this.observers.push(f);
  };

  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  render() {
    return (
      <div>
        <Header 
          history={this.props.history}
          firebase={firebase} 
          setUser={this.setUser}
          user={this.state.user}
          isLogged={typeof this.state.user._id !== "undefined"}
          logOff={this.logOff}
        />
      	<Switch>
      		<Route exact path="/" render={() => <Home history={this.props.history} subscribe={this.bindObserver}/>} />
          <Route path="/profile" render={() => <Profile history={this.props.history} user={this.state.user}/>} />
        </Switch>
      </div>
    );
  }
}

const NavigationWithRouter = withRouter(App);

class AppWrapp extends Component {
  render() {
    return <NavigationWithRouter />;
  }
}

export default AppWrapp;