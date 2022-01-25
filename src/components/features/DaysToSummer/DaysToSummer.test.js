import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';


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

describe('Component DaysToSummer', () => {

  it('Test 1: Should render without crashing', () => {

    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('Test 2: Should show nothing when summer', () => {

    global.Date = mockDate(`2019-03-14T10:00:01.135Z`);
    const component = shallow(<DaysToSummer />);
    expect(component).toEqual({});
    global.Date = trueDate;
  });

  it('Test 3: Should show number of days to summer', () => {

    global.Date = mockDate(`2022-09-23T00:00:00.135Z`);
    const component = shallow(<DaysToSummer />);
    expect(component.find('div').text()).toEqual('271 days to summer!');
    global.Date = trueDate;
  });

  it('Test 3: Should show day when it is 1 left', () => {

    global.Date = mockDate(`2022-06-20T00:00:00.135Z`);
    const component = shallow(<DaysToSummer />);
    expect(component.find('div').text()).toEqual('1 day to summer!');
    global.Date = trueDate;
  });
});