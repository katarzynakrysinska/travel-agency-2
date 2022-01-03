import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';







describe('Component OrderOption', () => {
  const expectedType='dropdown';
  const expectedName='name';

  let component = shallow(<OrderOption
    type={expectedType}
    name={expectedName}
  />);

  it('should reder', () => {
    expect(component).toBeTruthy();      
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });
  it('should correct name props', () => {
    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
  });  
});