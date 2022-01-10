import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {addDays} from '../../../utils/date';

class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
    currentValue: PropTypes.date,
  };
  
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    
    this.props.setOptionValue(date);
  };

  render() {
    const { currentValue } = this.props;
    return (
      <div>
        <DatePicker className={styles.input}
          selected={currentValue}
          onChange={this.handleChange}
          dateFormat='yyyy-MM-dd'
          minDate={addDays(new Date(), 10)}
        />
        {`(Please select a date min. 10 days from today)`}
      </div>
    );
  }
}

export default OrderOptionDate;