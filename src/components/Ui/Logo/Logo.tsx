import React from 'react';
import classes from "./logo.module.scss";

type Props = {
  title: String
};
export const Logo = (props: Props) => {
  return (
    <div className={classes.logo}>
      <div className={classes['logo__text']}>{props.title}</div>
      <hr className={classes['logo__underline']}/>
    </div>
  );
};