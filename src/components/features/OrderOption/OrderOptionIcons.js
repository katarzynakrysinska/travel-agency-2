import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({values, currentValue, setOptionValue, required}) => (
    <div className={styles.component}>
      {required ? '' : (
        <div className={styles.icon} onClick={() => setOptionValue('')}>
            <Icon name="times-circle" />
            <p>none</p>
        </div>
      )}
     
      {values.map(value => (
        <div 
          className={value.id === currentValue ? styles.iconActive : styles.icon}
          key={value.id}
          onClick={() => setOptionValue(value.id)}
          >
            <Icon name={value.icon} />
            {value.name}
            ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;