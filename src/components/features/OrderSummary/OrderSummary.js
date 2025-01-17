import React from 'react';
import styles from './OrderSummary.module.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import {addDays} from '../../../utils/date';
import propTypes from 'prop-types';
import HTMLParser from 'react-html-parser';

const OrderSummary = ({tripCost, options, days}) => (
  <div className={styles.component}>
    <div className={styles.input}>Your Trip starts on:<strong>{HTMLParser(options.startDate)}</strong></div>
    <div className={styles.input}>Your Trip finishes on:<strong>{HTMLParser(addDays(options.startDate,days))}</strong></div>
    <h2 className={styles.input}>Total:<strong>{formatPrice(calculateTotal(tripCost, options))}</strong></h2>
  </div>
);

OrderSummary.propTypes = {
  tripCost: propTypes.string,
  options: propTypes.object,
  days: propTypes.number,
};

export default OrderSummary;