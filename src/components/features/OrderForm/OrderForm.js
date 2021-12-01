import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.module.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = (cost, options) => (
  <Row>
    <Col xs={12}>
      <OrderSummary cost={cost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderForm;