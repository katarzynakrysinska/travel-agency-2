import React from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  render() { 
    let {title} = this.props;
    return (
      <div>
        <h3 className='title'>{title}</h3>
        <div className='promoDescription'></div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;