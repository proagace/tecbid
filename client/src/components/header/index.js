import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from '../dialog';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

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

class Logged extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color='white'/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="PERFIL" onClick={() => this.props.history.push('/profile')}/>
        <MenuItem primaryText="SAIR" onClick={this.props.logOff}/>
      </IconMenu>
    );
  }
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
        <Dialog 
          callback={this.bindDialog} 
          firebase={this.props.firebase} 
          setUser={this.props.setUser}
        />
        <AppBar
          title={this.props.isLogged ? 'Olá ' + this.props.user.nome : ''}
          style={styles.header}
          onLeftIconButtonTouchTap={this.handleTouchTap}
          iconElementLeft={<img src={require('./brand.png')} alt="Error retrieving file" style={{'cursor': 'pointer'}}/>}
          iconElementRight={!this.props.isLogged ? <FlatButton label="ENTRAR" onClick={() => this.openDialog()}/> : <Logged history={this.props.history} logOff={this.props.logOff}/>}
        />
      </div>
    );
  }
}

export default Header;