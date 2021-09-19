import React from 'react';
import classes from './Button.module.scss';

type Props = {
  value: string,
  eventHandle?: React.MouseEventHandler<HTMLButtonElement>,
};

export function Button(props: Props) {
  return (
    <button className={classes.button} onClick={props.eventHandle}>{props.value}</button>
  );
}