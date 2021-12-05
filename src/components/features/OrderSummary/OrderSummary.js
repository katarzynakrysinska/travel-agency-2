import React from 'react';
import styles from './OrderSummary.module.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import HTMLParser from 'react-html-parser';
  
const OrderSummary = ({cost, options}) => (
    <div className={styles.component}>
      <div className={styles.input}>Trips START:<strong>{HTMLParser(options.myDate)}</strong></div>
      <h2>Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong></h2>
    </div>
  );

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;