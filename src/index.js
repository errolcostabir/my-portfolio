import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Projects from './Projects';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/about" component={About}/>
            <Route path="/project" component={Projects}/>
          </Switch>
        </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

