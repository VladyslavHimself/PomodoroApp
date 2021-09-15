import React from 'react';
import classes from "./login.module.scss";

type Props = {

}

function Login(props: Props) {
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <div className={classes['logo__text']}>LogIn</div>
            <hr className={classes['logo__underline']}/>
          </div>
        </div>

        <div className={classes['input-field']}>
          <input type='text' className={classes.input} placeholder='E-mail'/>
          <input type='text' className={classes.input} placeholder='Password' />
        </div>

        <div className={classes.buttons}>
          <button className={classes.button}>Login</button>
          <a href='/' className={classes['register-link']}>Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;