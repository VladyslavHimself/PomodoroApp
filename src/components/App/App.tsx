import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import classes from './app.module.scss';
import Login from "../Login/Login";
import {Register} from "../Register/Register";
import {Pomodoro} from "../Pomodoro/Pomodoro";
import {Statistics} from '../Statistics/Statistics';
import {NotFound} from "../NotFound/NotFound";

const App = () => {

  const isUserAuthorized = !!localStorage.getItem('user');

  console.log(isUserAuthorized);
  if (isUserAuthorized) {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Pomodoro} />
          <Route path='/pomodoro' component={Pomodoro} />
          <Route path='/statistics' component={Statistics} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }

};

export default App;