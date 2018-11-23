import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { createStores } from './stores';
import { createBrowserHistory } from 'history';

// styles
import './index.css';

// components
import App from './App';
import * as serviceWorker from './serviceWorker';

// enable MobX strict mode
configure({ enforceActions: 'observed' });

// initialize google analytics
if (process.env.NODE_ENV === 'production') {
  const ReactGA = require('react-ga');
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
}

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history);

ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
