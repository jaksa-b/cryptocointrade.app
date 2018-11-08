import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import Home from './pages/Home';

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
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        {this.renderDevTool()}
      </div>
    );
  }
}

export default App;
