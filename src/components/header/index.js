import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';
import Dialog from '../dialog';

const styles = {
  title: {
    cursor: 'pointer',
  },
  header: {
    backgroundColor: '#872429',
    position: 'fixed',
    top: 0,
  },
};

class Header extends Component {

  handleTouchTap = () => {
    this.props.history.push('/');
  };

  bindDialog = f => {
    this.openDialog = f;
  };

  render() {
    return (
      <div>
        
        <Dialog callback={this.bindDialog}/>
        <AppBar
          style={styles.header}
          onLeftIconButtonTouchTap={this.handleTouchTap}
          iconElementLeft={<img src={require('./brand.png')} alt="Error retrieving file" style={{'cursor': 'pointer'}}/>}
          iconElementRight={<FlatButton label="ENTRAR" onClick={() => this.openDialog()}/>}
        />
      </div>
    );
  }
}

const NavigationWithRouter = withRouter(Header);

class HeaderWrapp extends Component {
  render() {
    return (
      <NavigationWithRouter />
    );
  }
}

export default HeaderWrapp;