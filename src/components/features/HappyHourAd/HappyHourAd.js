import React from 'react';
import PropTypes from 'prop-types';


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
  render() { 
    let {title} = this.props;
    return (
      <div>
        <h3 className='title'>{title}</h3>
        <div className='promoDescription'></div>
        <div className='promoDescription'>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HappyHourAd;