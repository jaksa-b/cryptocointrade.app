import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import PublicLayout from './components/Layouts/PublicLayout'; 
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
    const { history } = this.props;
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={() => <Redirect to={{pathname: '/trade'}} />} />
            <PublicLayout path="/trade" component={Trade} />
            <PublicLayout path="/wallet" component={Wallet} />
          </Switch>
        </Router>
        {this.renderDevTool()}
      </div>
    );
  }
}

export default App;
