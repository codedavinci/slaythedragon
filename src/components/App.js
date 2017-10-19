import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui'
import './App.css';
import { Menu } from './menu'
import { Main } from './content'
import { Layout } from './layout'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <Menu />
          <Main />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
