import React from 'react';
import propTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const valid = (options, name, id, cost) => {
  const { contactName, contactInfo } = options;
  if ( contactName == '' && contactInfo == '') {
    window.alert('Whom shall we contact? Complete the info, please!'); 
  } else if ( contactName == '') {
    window.alert('Who are you? Give us your name, please!'); 
  } else if ( contactInfo == '') {
    window.alert('How can we contact you? Complete the info, please!'); 
  } else { 
    sendOrder(options, cost, name, id);
  }
};

const sendOrder = (options, cost, name, id) => {
  const totalCost = formatPrice(calculateTotal(cost, options));

  const payload = {
    nameTrip: name,
    idTrip: id,
    costTrip: totalCost,
    ...options,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
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
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {
  render() {
    const {options, cost, days, setOrderOption, name, id} = this.props;  
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id} >
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={cost} options={options} days={days}/>
        </Col>
        <Col xs={12}>
          <Button variant='order' onClick={() => valid(options, name, id, cost)}>Order now!</Button>
        </Col>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  options: propTypes.object,
  cost: propTypes.string,
  setOrderOption: propTypes.func,
  days: propTypes.number,
  name: propTypes.string,
  id: propTypes.string,
};

export default OrderForm;