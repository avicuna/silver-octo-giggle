import React from 'react';
import {shallow} from 'enzyme';
import Contacts from './Contacts';

describe('Contacts', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contacts />);
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });


});