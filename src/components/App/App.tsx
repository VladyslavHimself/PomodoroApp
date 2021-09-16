import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import classes from './app.module.scss';
import Login from "../Login/Login";
import {Register} from "../Register/Register";
import {Pomodoro} from "../Pomodoro/Pomodoro";
import {Statistics} from '../Statistics/Statistics';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/pomodoro' component={Pomodoro} />
      <Route path='/statistics' component={Statistics} />
    </Switch>
  </Router>
);

export default App;