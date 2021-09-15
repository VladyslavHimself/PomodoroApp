import React from 'react';
import classes from './Button.module.scss';

type Props = {
  value: string
}

function Button(props: Props) {
  return (
    <button className={classes.button}>{props.value}</button>
  );
}

export default Button;