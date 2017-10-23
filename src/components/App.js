import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui'
import { connect } from 'react-redux'
import { getChampions } from '../actions/championsActions'
import { Main } from './content'
import { Layout } from './layout'


class App extends Component {

  componentDidMount() {
    this.props.getChampions()
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <Main />
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default connect((state) => state.champs , { getChampions })(App)