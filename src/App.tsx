import React, { Component } from 'react';
import { Router, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { inject, observer } from 'mobx-react';

import themes from './styles/themes'

import PublicLayout from './components/Layouts/PublicLayout';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Wallet from './pages/Wallet';

class App extends Component<any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }
  render() {
    const { history, trade } = this.props;
    console.log(this.props)
    return (
      <ThemeProvider theme={trade.theme}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <PublicLayout path="/" exact component={Home} />
              <PublicLayout path="/trade" component={Trade} />
              <PublicLayout path="/wallet" component={Wallet} />
            </Switch>
          </Router>
          {this.renderDevTool()}
        </div>
      </ThemeProvider>
    );
  }
}


export default inject(
  'trade',
  'router'
)(observer(App));