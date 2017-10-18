import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui'
import './App.css';
import { Menu } from './menu'
import { Main } from './content'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-container">
          <Menu />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
