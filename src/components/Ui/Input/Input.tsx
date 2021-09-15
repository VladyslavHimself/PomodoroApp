// @flow 
import * as React from 'react';
import classes from "./input.module.scss";

type Props = {
  inputType: string,
  placeholder: string
};

export const Input = (props: Props) => (
  <div>
    <input type={props.placeholder} className={classes.input} placeholder={props.placeholder}/>
  </div>
);