import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

let component = shallow(<TripSummary
  id={'abc'}
  image={'image'}
  name={'name'}

/>);

describe('Component TripSummary', () => {
  it('should generate correct url link', () => {
    expect(component.find('.link').prop('to')).toEqual('/trip/' + 'abc');
  });

  it('should have correct src and alt', () => {
    expect(component.find('img').prop('src')).toEqual('image');
    expect(component.find('img').prop('alt')).toEqual('name');

  });
});