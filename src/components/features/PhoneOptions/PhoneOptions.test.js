import React from 'react';
import {shallow} from 'enzyme';
import PhoneOptions from './PhoneOptions';
import Icon from '../../common/Icon/Icon';

const trueDate = Date;
const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

describe('Component PhoneOptions', () => {

  it('Test 1: Should render without crashing', () => {

    const component = shallow(<PhoneOptions />);
    expect(component).toBeTruthy();
  });

  it('Test 2: should contain an icon', () => {

    const component = shallow(<PhoneOptions />);
    expect(component.exists(Icon)).toBeTruthy();
  });

  it('Test 3: should show Amanda info at 8-12 UTC', () => {

    global.Date = mockDate(`2019-05-14T10:00:01.135Z`);
    const component = shallow(<PhoneOptions />);
    expect(component.find('span').text()).toEqual('Amanda, 678.243.8455');
    global.Date = trueDate;
  });

  it('Test 4: should show Tobias info at 12-16 UTC', () => {

    global.Date = mockDate(`2019-05-14T13:00:01.135Z`);
    const component = shallow(<PhoneOptions />);
    expect(component.find('span').text()).toEqual('Tobias, 278.443.6443');
    global.Date = trueDate;
  });

  it('Test 5: should show Tobias info at 16-22 UTC', () => {

    global.Date = mockDate(`2019-05-14T20:00:01.135Z`);
    const component = shallow(<PhoneOptions />);
    expect(component.find('span').text()).toEqual('Helena, 167.280.3970');
    global.Date = trueDate;
  });
});