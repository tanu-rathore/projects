import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//code of exexution begins with index.js
//front end file = index.html


import { Provider } from 'react-redux'; //provider used to wrap the application

import App from './App';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')); //root = id, imported from html
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
