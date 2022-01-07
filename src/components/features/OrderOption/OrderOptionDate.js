import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
  };
  
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    
    const myDate = moment(date, 'yyyy-MM-dd').toDate();
    console.log('freshnewDate', myDate);
    this.props.setOptionValue(myDate);
  };

  render() {
    return (
      <DatePicker className={styles.input}
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat='yyyy-MM-dd'
      />
    );
  }
}

export default OrderOptionDate;