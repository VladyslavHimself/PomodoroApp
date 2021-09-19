import React from 'react';
import classes from './Button.module.scss';

type Props = {
  value: string,
  loginHandle?: React.MouseEventHandler<HTMLButtonElement>,
};

export function Button(props: Props) {
  return (
    <button className={classes.button} onClick={props.loginHandle}>{props.value}</button>
  );
}