import React, { Component } from 'react';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import { array } from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState({ contacts: [data] });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts contacts={contacts} onDeleteContact={this.deleteContacts} />
      </>
    );
  }
}

export default App;
