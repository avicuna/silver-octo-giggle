import React from 'react';
import {shallow} from 'enzyme';
import ContactItem from './Contact-Item';

describe('Contact Item', () => {
    let wrapper;
    const index = 0;
    const changeStatus = jest.fn();
    const deleteContact = jest.fn();
    const editContact = jest.fn();
    const details = {
        contacts: [
            {name: 'Alex', number: '505-307-4441', completed: false},
            {name: 'Sally', number: '012-345-6789', completed: false}
        ],
        currentName: '',
        currentNumber: ''
    };
    beforeEach(() => {
        wrapper = shallow(
            <ContactItem
                key={index}
                clickHandler={changeStatus}
                index={index}
                deleteContact={deleteContact}
                editContact={editContact}
                details={details.contacts[index]}
            />
        );
    });

    it('should render item when isEditing is false', () => {
        wrapper.setState({
            isEditing: false
        });
        expect(wrapper.find('li').exists()).toEqual(true);
    });

    it('should call renderForm() when isEditing is true', () => {
        wrapper.setState({
            isEditing: true
        });
        expect(wrapper.find('form').exists()).toEqual(true);
    });

});


