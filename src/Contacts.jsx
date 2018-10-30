import React from 'react';
import { Table } from 'reactstrap';

class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: [{'Alex': '505-307-4441'}, {'Sally': '012-345-6789'}]
        }
    }

    render() {
        return (
            <div>
                <Table className="contacts-table">

                </Table>
            </div>
        );
    }
}

export default Contacts;