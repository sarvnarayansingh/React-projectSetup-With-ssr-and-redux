import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import axios from 'axios'
import Router from '../Helper/router';
import RootReducer from '../Redux/Reducers/RootReducer';


const axiosInstance = axios.create({
  baseURL: process.env.BaseUrl,
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

let enhancer = null;
if (location.hostname === 'localhost') {
  enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance), logger));
} else {
  enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)));
}

const store = createStore(RootReducer, window.INITIAL_STATE, enhancer);

hydrate(
  <Provider store={store}>
  <BrowserRouter>
    <React.Fragment>{renderRoutes(Router)}</React.Fragment>
  </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);