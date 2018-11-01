import React from 'react';

class ContactItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        };

        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    };

    renderForm(){
        return (
            <form onSubmit={this.updateItem}>
                <input
                    type="text"
                    ref={(value) => {
                        this.nameInput = value
                    }}
                    defaultValue={this.props.details.name}
                />
                <input
                    type="text"
                    ref={(value) => {
                        this.numberInput = value
                    }}
                    defaultValue={this.props.details.number}
                />
                <button type="submit">Update Contact</button>
            </form>
        );
    };

    renderItem(){
        return (
            <li onClick={ () => {
                this.props.clickHandler(this.props.index);
            }} className={this.props.details.completed ? 'completed' : ''}
            >
                {"Name: " + this.props.details.name + "\n"}
                {"Phone Number: " + this.props.details.number}
                <br/>

                <button onClick={(e) => {
                    e.stopPropagation();
                    this.props.deleteContact(this.props.index)
                    }}>
                    Delete
                </button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    this.toggleState();
                    }}>
                    Edit Item
                </button>
            </li>
        );
    };

    toggleState(){
        const {isEditing} = this.state;
        this.setState({
            isEditing: !isEditing
        });
    };

    updateItem(e){
        e.preventDefault();
        this.props.editContact(this.props.index, this.nameInput.value, this.numberInput.value);
        this.toggleState();
    };



    render() {
        const { isEditing } = this.state;
        return (
            <>
                {isEditing ? this.renderForm() : this.renderItem()}
            </>
        );
    };
}

export default ContactItem;