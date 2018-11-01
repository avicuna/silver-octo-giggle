import React from 'react';
import {shallow} from 'enzyme';
import ContactsForm from "./Contacts-Form";


describe('Contact Form', () => {
    let wrapper;
    const addContact = jest.fn();
    const currentName = "";
    const currentNumber = "";
    const updateName = jest.fn();
    const updateNumber = jest.fn();
    beforeEach(() => {
        wrapper = shallow(
            <ContactsForm
                currentName={currentName}
                currentNumber={currentNumber}
                updateName={updateName}
                updateNumber={updateNumber}
                addContact={addContact}
            />
        );
    });

    it('should contain <form/>', () => {
        expect(wrapper.find('form').length).toEqual(1);
    });

    it('Name input should change when onChange is called', () => {
        const inputName = wrapper.find('input').at(0);
        inputName.simulate('change', 'Name');
        expect(updateName).toBeCalledWith('Name');
    });

    it('Number input should change when onChange is called', () => {
        const inputNumber = wrapper.find('input').at(1);
        inputNumber.simulate('change', '0000000000');
        expect(updateNumber).toBeCalledWith('0000000000');
    });

    it('Button should call addContact on submit')

});