import React, {useState} from 'react';

import classes from './register.module.scss';
import Header from "../Ui/Header/Header";
import {Input} from "../Ui/Input/Input";
import {Button} from "../Ui/Button/Button";
import {IAuth} from "../../interfaces";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {signUpKey} from "../../firebase-rest";

type Props = {};

export const Register = (props: Props) => {

  const [authData, setAuthData] = useState<IAuth>({
    email: '',
    password: '',
  });

  const history = useHistory();

  const getResponseFromServer = async (apiKey: string) => {

    try {
      return await axios.post(apiKey, {
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

  const registerHandler = async () => {
    const response = await getResponseFromServer(signUpKey);

    if (response === 400) {
      alert('Something went wrong!');
    } else if (response.status === 200) {
      location.replace('/');
    }
  }

  return (
    <div className={classes.register}>
      <div className={classes.form}>
        <Header title={'Register'} />

        <div className={classes['input-field']}>
          <Input authType='email' inputType={'text'} placeholder={'E-mail'} inputData={authData} changeInputData={setAuthData}/>
          <Input authType='password' inputType={'text'} placeholder={'Password'} inputData={authData} changeInputData={setAuthData}/>
        </div>

        <div className={classes.buttons}>
          <Button value={'Register'} eventHandle={registerHandler}/>
        </div>
      </div>
    </div>
  );
}
