import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducers from '../Reducers/RootReducer';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BaseUrl,
  });
  const store = createStore(rootReducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
};


