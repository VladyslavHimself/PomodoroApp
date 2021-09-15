import React from 'react';
import classes from "./header.module.scss";
import {Logo} from "../Logo/Logo";

type Props = {
  title: String
}

function Header(props: Props) {
  return (
    <div className={classes.header}>
      <Logo title={props.title} />
    </div>
  );
}

export default Header;