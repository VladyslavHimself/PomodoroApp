import React, {useEffect, useState} from 'react';
import classes from "./login.module.scss";
import Header from "../Ui/Header/Header";
import {Input} from "../Ui/Input/Input";
import {Button} from "../Ui/Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import {signInKey, signUpKey} from "../../firebase-rest";
import {IAuth} from "../../interfaces";
import { useHistory } from 'react-router-dom';
import { getResponseFromServer} from "../../services/firebaseApi";

declare var window: any;

export function Login() {

  const history = useHistory();


  const [authData, setAuthData] = useState<IAuth>({
    email: '',
    password: '',
  });

  const addUserToLocalStorage = (user: string) : void => {
    localStorage.setItem('user', user);
  }

  const loginHandler = async () => {
    const response = await getResponseFromServer(signInKey, authData);

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
          <Button value={'LogIn'} eventHandle={loginHandler}/>
          <Link to='/register' className={classes['register-link']}>Register</Link>
        </div>
      </div>
    </div>
  );
}