import React, {useState} from 'react';

import classes from './register.module.scss';
import Header from "../Ui/Header/Header";
import {Input} from "../Ui/Input/Input";
import Button from "../Ui/Button/Button";

type Props = {

}

export const Register = (props: Props) => {
  return (
    <div className={classes.register}>
      <div className={classes.form}>
        <Header title={'Register'} />

        <div className={classes['input-field']}>
          <Input authType='email' inputType={'text'} placeholder={'E-mail'} />
          <Input authType='password' inputType={'text'} placeholder={'Password'} />
        </div>

        <div className={classes.buttons}>
          <Button value={'Register'} />
        </div>
      </div>
    </div>
  );
}
