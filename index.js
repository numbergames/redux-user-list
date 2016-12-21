import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import allReducers from './reducers';

import { Provider } from 'react-redux';
import App from './components/app';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('content')
  );
})