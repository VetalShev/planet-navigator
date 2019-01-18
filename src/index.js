import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./components/app";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers'

let store = createStore(combineReducers(reducers), applyMiddleware(thunk, logger));

class AppWithRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<AppWithRouter/>, document.getElementById('root'));