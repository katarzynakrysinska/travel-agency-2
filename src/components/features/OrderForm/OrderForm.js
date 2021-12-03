import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.module.scss';
import { Row, Col, Grid } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';

const OrderForm = (props) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption {...option}
        currentValue={props.options[option.id]}
        setOrderOption={props.setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={props.cost} options={props.options}
      />
      <Button>Order the trip!</Button>
    </Col>
    
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderForm;