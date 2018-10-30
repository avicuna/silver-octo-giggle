import React from 'react';
import {shallow} from 'enzyme';
import Contacts from './Contacts';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<App/>);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the contacts component', () => {
      expect(wrapper.containsMatchingElement(<Contacts />)).toEqual(true);
  })
});

