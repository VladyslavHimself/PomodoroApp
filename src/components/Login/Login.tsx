import React, {useEffect, useState} from 'react';
import classes from "./login.module.scss";
import Header from "../Ui/Header/Header";
import {Input} from "../Ui/Input/Input";
import {Button} from "../Ui/Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import {signInKey} from "../../firebase-rest";
import {IAuth} from "../../interfaces";
import { useHistory } from 'react-router-dom';


declare var window: any;

function Login() {

  const [authData, setAuthData] = useState<IAuth>({
    email: '',
    password: '',
  });

  const history = useHistory();

  const getResponseFromServer = async () => {

    try {
      return await axios.post(signInKey, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      });

    } catch (e) {
      return 400;
    }

  }

  const addUserToLocalStorage = (user: string) : void => {
    localStorage.setItem('user', user);
  }

  const loginFunction = async () => {
    const response = await getResponseFromServer();

    if (response === 400) {
      alert('Invalid login, or password');
    } else if (response.status === 200) {
      addUserToLocalStorage(authData.email);
      location.replace('/pomodoro');
    }
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
          <Button value={'LogIn'} eventHandle={loginFunction}/>
          <Link to='/register' className={classes['register-link']}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;