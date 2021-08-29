import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const container = document.getElementById('app');

ReactDOM.render(
  <div>
    <App/>
  </div>
  ,container);