import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import Home from './pages/Home';
import DevTools from 'mobx-react-devtools';

class App extends Component<any> {
  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <DevTools />
      </div>
    );
  }
}

export default App;
