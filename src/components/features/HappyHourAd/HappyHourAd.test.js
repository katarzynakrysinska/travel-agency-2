import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';



describe('Component HappyHourAd', () => {

  it('should reder without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();      
  });
});