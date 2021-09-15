// @flow 
import * as React from 'react';

import classes from "./pomodoro.module.scss";
import Header from "../Ui/Header/Header";
import Button from "../Ui/Button/Button";

import statistics from '../../assets/statistics.svg';

type Props = {
  
};
export const Pomodoro = (props: Props) => {
  return (
    <div className={classes.pomodoro}>
      <div className={classes.navigation}>
        <div className={classes.statistics}>
          <a href="/">
            <img src={statistics} alt="statistics"/>
          </a>
        </div>
      </div>
      <div className={classes.panel}>
        <Header title={'Pomodoro'} />
        <div className={classes.timer}>
          <span className={classes.time}>25:00</span>
        </div>
        <Button value='Start' />
      </div>
    </div>
  );
};