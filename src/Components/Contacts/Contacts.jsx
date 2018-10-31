import React from 'react';
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

    deleteContact(index){
        console.log(index);

        let { contacts } = this.state;
        contacts.splice(index, 1);

        this.setState({
            contacts
        });
    }

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

    updateName(newName){
        this.setState({
            currentName: newName.target.value
        });
    }

    updateNumber(newNumber){
        this.setState({
            currentNumber: newNumber.target.value
        })
    }

    editContact(index, newName, newNumber){
        let {contacts} = this.state;
        let contact = contacts[index];
        contact['name'] = newName;
        contact['number'] = newNumber;
        this.setState({
            contacts
        });
    }

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
                <ul>
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