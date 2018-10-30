import React from 'react';
import {shallow} from 'enzyme';
import Contacts from './Contacts';
import { Table } from 'reactstrap';

describe('Contacts', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contacts />);
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render a reactstrap table', () => {
        expect(wrapper.find('.contacts-table').length).toBe(1);
    });

});