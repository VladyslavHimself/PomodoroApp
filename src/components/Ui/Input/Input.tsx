import * as React from 'react';
import classes from "./input.module.scss";

type Props = {
  inputType: string,
  placeholder: string,
  inputData?: object,
  changeInputData?: any,
  authType: 'password' | 'email'
};

export const Input = (props: Props) => {

  const { changeInputData, inputData } = props;

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {

    if (props.authType === 'email') {
      changeInputData({
        ...inputData,
        email: e.target.value,
      });
    } else if (props.authType === 'password') {
      changeInputData({
        ...inputData,
        password: e.target.value,
      });
    }

  };

  return (
    <div>
      <input
        type={props.placeholder}
        className={classes.input}
        placeholder={props.placeholder}
        onChange={(e) => changeInputHandler(e)}
      />
    </div>
  );
};