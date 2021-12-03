import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = (limits, currentValue, setOptionValue, price) => (
  <div className= {styles.number}>
    <input 
      type="number" 
      className={styles.inputSmall} 
      value={currentValue} 
      min={limits.min} 
      max={limits.max} 
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
    {formatPrice(price)}
    
  </div>
);

OrderOptionNumber.propTypes = {
  value: PropTypes.array,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionNumber;