import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { fetchHome, fetchHomes } from "./util/home_api_util.js"

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // window.fetchHomes = fetchHomes;
  // window.fetchHome = fetchHome;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
