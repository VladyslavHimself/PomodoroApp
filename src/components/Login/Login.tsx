import React, {useState} from 'react';
import classes from "./login.module.scss";
import Header from "../Ui/Header/Header";
import {Input} from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import {apiKey} from "../../firebase-rest";

function Login() {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const loginFunction = async () => {
    const response = await axios.post(apiKey, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    });
  }

  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <Header title='LogIn'/>
        <div className={classes['input-field']}>
          <Input authType='email' inputType={'text'} placeholder={'E-mail'} inputData={authData} changeInputData={setAuthData}/>
          <Input authType='password' inputType={'password'} placeholder={'Password'} inputData={authData} changeInputData={setAuthData}/>
        </div>
        <div className={classes.buttons}>

          <Button value={'LogIn'} loginHandle={loginFunction}/>
          <Link to='/register' className={classes['register-link']}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;