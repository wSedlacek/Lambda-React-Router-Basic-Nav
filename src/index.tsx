import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './app.component';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
