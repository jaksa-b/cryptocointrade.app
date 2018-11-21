import React, { Component } from 'react';
import { Router, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { inject, observer } from 'mobx-react';

// layout
import PublicLayout from './components/Layouts/PublicLayout';

// pages
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
    const { history, app } = this.props;
    return (
      <ThemeProvider theme={app.theme}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <PublicLayout path="/" exact component={Trade} />
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
  'app',
)(observer(App));