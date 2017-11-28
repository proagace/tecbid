import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Home from './home';
import Edit from './editProfile';
import Footer from './footer';
import Cadastro from './cadastro';
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
    const setState = () => {
      this.setState({ user: {} })
    };
    this.props.history.push('/');
    firebase.auth().signOut()
    .then(setState())
    .catch(error => console.log(error));
  };

  bindObserver = f => {
    this.observers.push(f);
  };

  componentWillMount() {
    const setUser = this.setUser;
    firebase.initializeApp(config.firebase);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
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
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/edit" component={Edit} />
        </Switch>
        <Footer />
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