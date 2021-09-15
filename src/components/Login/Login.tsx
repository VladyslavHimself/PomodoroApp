import React from 'react';
import classes from "./login.module.scss";
import Header from "../Ui/Header/Header";
import {Input} from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";

import {Link} from "react-router-dom";

function Login() {
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <Header title='LogIn'/>
        <div className={classes['input-field']}>
          <Input inputType={'text'} placeholder={'E-mail'}/>
          <Input inputType={'password'} placeholder={'Password'}/>
        </div>
        <div className={classes.buttons}>
          <Button value={'LogIn'}/>
          <Link to='/register' className={classes['register-link']}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;