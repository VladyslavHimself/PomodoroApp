import React from 'react';
import classes from './Button.module.scss';

type Props = {
  value: string,
  loginHandle?: any
}

function Button(props: Props) {
  return (
    <button className={classes.button} onClick={props.loginHandle}>{props.value}</button>
  );
}

export default Button;