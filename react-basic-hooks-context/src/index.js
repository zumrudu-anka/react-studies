import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/css/styles.css";
import { BrowserRouter } from 'react-router-dom';

const appName = "/react-basic-hooks-context-studies";

ReactDOM.render(
  <BrowserRouter basename = {appName}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);