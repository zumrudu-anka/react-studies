import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/styles.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const appName = "/react-barcode-scanner";

ReactDOM.render(
  <BrowserRouter basename = {appName}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
