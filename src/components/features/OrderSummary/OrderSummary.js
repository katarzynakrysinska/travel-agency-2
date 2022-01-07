import React from 'react';
import styles from './OrderSummary.module.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import { dateToStr, addDays } from '../../../utils/date';
  
const OrderSummary = ({cost, options}) => (
  <div className={styles.component}>
    <h2>Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong></h2>
    <span>{dateToStr(options.startDate)} - {dateToStr(addDays(options.startDate + options.days))}</span>
  </div>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
