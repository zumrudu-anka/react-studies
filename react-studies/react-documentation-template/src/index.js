/**
*   @author Osman DURDAĞ
*   @version 0.0.1
*   @since 05.12.2020
*   @copyright Osman DURDAĞ
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import "./assets/css/style.min.css";

const appName = "/react-documentation-template"

ReactDOM.render(
  <BrowserRouter basename = {appName}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
