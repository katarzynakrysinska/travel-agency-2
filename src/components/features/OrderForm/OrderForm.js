import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.module.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options,tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache:'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponde', parsedResponse);
    });
};


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
      <OrderSummary cost={props.cost} options={props.options} days={props.days}
      />
      <Button onClick={() => sendOrder(options, tripCost)}>Order the trip!</Button>
    </Col>
    
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
  setOrderOption: PropTypes.node,
  days: PropTypes.number,
};

export default OrderForm;