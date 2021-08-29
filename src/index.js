import React from 'react';
import ReactDOM from 'react-dom';
import Badges from "./pages/badges/Badges.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const container = document.getElementById('app');

ReactDOM.render(
  <div>
    <Badges/>
  </div>
  ,container);