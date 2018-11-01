import React from 'react';
import {shallow} from 'enzyme';
import ContactsForm from "./Contacts-Form";


describe('Contact Form', () => {
    let wrapper;
    const addContact = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<ContactsForm onSubmit={addContact} />);
    });

    it('should contain <form/>', () => {
        expect(wrapper.find('form').length).toEqual(1);
    });

});