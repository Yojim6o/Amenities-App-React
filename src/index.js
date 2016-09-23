import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import promise from  'redux-promise';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(
    promise,
    reduxThunk
)(createStore);

const store = createStoreWithMiddleware(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);
