import React from 'react';

const ContactsForm = (props) => {
    return (
        <form onSubmit={props.addContact}>
            <input
            type="text"
            placeholder="Name"
            value={props.currentName}
            onChange={props.updateName}
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={props.currentNumber}
                onChange={props.updateNumber}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactsForm