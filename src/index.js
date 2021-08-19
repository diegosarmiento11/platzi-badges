import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from "./pages/badgeNew/BadgeNew.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const container = document.getElementById('app');

ReactDOM.render(
  <div>
  <BadgeNew/>
  </div>
  ,container);