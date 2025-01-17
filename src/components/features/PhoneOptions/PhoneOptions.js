import React from 'react';
import Icon from '../../common/Icon/Icon';

class PhoneOptions extends React.Component {

  getCountdownTime() {
    const currentTime = new Date();

    if(currentTime.getUTCHours() >= 8 && currentTime.getUTCHours() < 12) {
      return 'Amanda, 678.243.8455';
    }

    if(currentTime.getUTCHours() >= 12 && currentTime.getUTCHours() < 16) {
      return 'Tobias, 278.443.6443';
    }

    if(currentTime.getUTCHours() >= 16 && currentTime.getUTCHours() < 22) {
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }
  render() {
    return (
      <div className='component'>
        <Icon name='phone' />
        <span>{this.getCountdownTime()}</span>
      </div>
    );
  }
}

export default PhoneOptions;