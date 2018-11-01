import React from 'react';

const ContactsForm = (props) => {
    return (
        <>
            <h4>Add Contact</h4>
            <form onSubmit={props.addContact}>
                <input
                type="text"
                placeholder="Name"
                aria-label="Name"
                aria-required="true"
                value={props.currentName}
                onChange={props.updateName}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    aria-required="true"
                    value={props.currentNumber}
                    onChange={props.updateNumber}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
};

export default ContactsForm