import React from 'react';
import styles from './DaysToSummer.module.scss';

const DaysToSummer = () => {
  const currentTime = new Date();
  const startSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21, 0, 0, 0, 0));

  const endSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23, 0, 0, 0, 0));

  if(startSummer.getTime() < currentTime.getTime() && currentTime.getTime() < endSummer.getTime()) {
    return null;
  } else {
    if(currentTime.getTime() >= endSummer.getTime()) {
      startSummer.setUTCFullYear(currentTime.getUTCFullYear() + 1);
    }

    const daysToSummer = Math.round((startSummer.getTime() - currentTime.getTime()) / 1000 / 60 / 60 / 24);
    return (
      <div className={styles.daysToSummer}>{daysToSummer} {daysToSummer == 1? 'day' : 'days'} to summer!</div>
    );
  }
};


export default DaysToSummer;