import React, { Component } from 'react';
import '../App.css';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {purple500, pink500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ProdutoDesc from './produtodesc'
import ProdutoLances from './produtolances'
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: purple500,
        accent1Color: pink500
    }

});


const prodStyle = {
    marginRight: 'auto' ,
    marginLeft: 'auto' , 
    width: '50%'
};

const tituloProdStyle = {
    marginTop: '85px'
};



class Publicacao extends Component {
  constructor () {
      super();
      this.state = {
          drawerOpened: false
      };
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          {/* <div style={contentStyle}>
                <form onSubmit={(e) => this._sendForm(e)}>
                    <TextField id="email" floatingLabelText="Email" type="email" style={textFieldStyle} />
                    <TextField id="password" floatingLabelText="Password" type="password" style={textFieldStyle} />
                    <RaisedButton type="submit" fullWidth={true} label="Login" secondary={true} style={buttonStyle} />
                </form>
            </div> */}
            <div style={prodStyle}>
              <h2 style={tituloProdStyle}>Playstation 4</h2>
              <div>
              <h5>5000 mil jogos instalados</h5>
              </div>
            </div>
            <div>
                <ProdutoDesc />
                <ProdutoLances />
            </div>
            
        </MuiThemeProvider>
    );
  }
}

export default Publicacao;
