import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/header';
//import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
      <div>
        <Switch>
          <Route path="/profile" component={Header} />
          <Route path="/" component={App} />
        </Switch>
      </div>
  </BrowserRouter>, document.getElementById('root'));
