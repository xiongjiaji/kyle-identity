import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Logout from './Logout';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      {/* add the routes here */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/logout" component={Logout} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
