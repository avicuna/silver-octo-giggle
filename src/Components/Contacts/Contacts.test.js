import React from 'react';
import {shallow, mount} from 'enzyme';
import Contacts from './Contacts';
import ContactsForm from "../Contact-Form/Contacts-Form";
import ContactItem from "../Contact-Item/Contact-Item";

describe('Contacts', () => {
    
    it('should render a <div />', () => {
        let wrapper = shallow(<Contacts/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render a <ContactsForm />', () => {
        let wrapper = mount(<Contacts/>);
        const currentName = "Name";
        const currentNumber = "0123456789";
        const updateName = jest.fn();
        const updateNumber = jest.fn();
        const addContact = jest.fn();
        expect(wrapper.containsMatchingElement(
            <ContactsForm
                currentName={currentName}
                currentNumber={currentNumber}
                updateName={updateName}
                updateNumber={updateNumber}
                addContact={addContact}
            />
        ))
    });

    it('should render a <ContactItem/>', () => {
        let wrapper = mount(<Contacts/>);
        const details = {
            contacts: [
                {name: 'Alex', number: '505-307-4441', completed: false},
                {name: 'Sally', number: '012-345-6789', completed: false}
            ],
            currentName: '',
            currentNumber: ''
        }
        const index = 0;
        const changeStatus = jest.fn();
        const deleteContact = jest.fn();
        const editContact = jest.fn();
        expect(wrapper.containsMatchingElement(
            <ContactItem
                key={index}
                clickHandler={changeStatus}
                index={index}
                deleteContact={deleteContact}
                editContact={editContact}
                details={details.contacts[index]}
            />
        ))
    })

});