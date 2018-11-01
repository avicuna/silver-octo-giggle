import React from 'react';
import { Card } from 'mdbreact';
import ContactsForm from '../Contact-Form/Contacts-Form';
import ContactItem from '../Contact-Item/Contact-Item';

class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.state = {
            contacts: [
                {name: 'Alex', number: '505-307-4441', completed: false},
                {name: 'Sally', number: '012-345-6789', completed: false}
                ],
            currentName: '',
            currentNumber: ''
        }
    }

    /**
     * Delete contact from contact list.
     * @param index
     */

    deleteContact(index){
        let { contacts } = this.state;
        contacts.splice(index, 1);
        this.setState({
            contacts
        });
    }

    /**
     * Add a contact to contact list.
     * @param e
     */

    addContact(e){
        e.preventDefault();
        let {contacts, currentName, currentNumber} = this.state;
        contacts.push({
            name: currentName,
            number: currentNumber,
            completed: false
        });
        this.setState({
            contacts,
            currentName:'',
            currentNumber: ''
        });
    }

    /**
     * Update the name portion of a contact.
     * @param newName
     */

    updateName(newName){
        this.setState({
            currentName: newName.target.value
        });
    }

    /**
     * Update the number portion of a contact.
     * @param newNumber
     */

    updateNumber(newNumber){
        this.setState({
            currentNumber: newNumber.target.value
        })
    }

    /**
     * Edits the contact as a whole.
     * @param index
     * @param newName
     * @param newNumber
     */

    editContact(index, newName, newNumber){
        let {contacts} = this.state;
        let contact = contacts[index];
        contact['name'] = newName;
        contact['number'] = newNumber;
        this.setState({
            contacts
        });
    }

    /**
     * Changes the status of whether a contact has been completed.
     * @param index
     */

    changeStatus(index){
        let {contacts} = this.state;
        let contact = contacts[index];
        contact.completed = !contact.completed;
        this.setState({
            contacts: contacts
        });
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <br/>
                <ContactsForm
                    currentName={this.state.currentName}
                    currentNumber={this.state.currentNumber}
                    updateName={this.updateName}
                    updateNumber={this.updateNumber}
                    addContact={this.addContact}
                />
                <br/>
                <h4>Contacts List</h4>
                <ul id="contacts-list">
                    {
                        this.state.contacts.map((contact, index) => {
                            return <ContactItem
                                    key={index}
                                    clickHandler={this.changeStatus}
                                    index={index}
                                    deleteContact={this.deleteContact}
                                    editContact={this.editContact}
                                    details={contact}
                                    />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Contacts;