import React from 'react';
import styles from './OrderOption.module.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import PropTypes from 'prop-types';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
      <h3 className={styles.title}>{name}</h3>
      <OptionComponent 
      setOptionValue={value => setOrderOption({[id]: value})}
      {...otherProps} 
      />
    </div>
    );
  }
};

OrderOption.propTypes = {
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default OrderOption;