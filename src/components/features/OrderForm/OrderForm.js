import React from 'react';
//import PropTypes from 'prop-types';
//import styles from './OrderForm.module.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = () => (
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>
);

//List.propTypes = {
//};

export default OrderForm;