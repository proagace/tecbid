import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';

injectTapEventPlugin();

class AppWrapp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default AppWrapp;