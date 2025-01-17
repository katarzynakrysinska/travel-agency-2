import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.module.scss';
import { formatTime } from '../../../utils/formatTime';


class HappyHourAd extends React.Component {

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(),
      currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate() +1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }

  render() {
    const seconds = this.getCountdownTime(); 
    let {title, promoDescription} = this.props;
    let time = formatTime(seconds);
  
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className='promoDescription'></div>
        <div className={styles.promoDescription}>{seconds > 23*60*60 ? promoDescription : time}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;