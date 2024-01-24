import React, { Component } from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  findContact = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  addContact = ({ name, number }) => {
    if (this.findContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Container className="w-50 p-3">
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length !== 0 ? (
            <>
              <Filter value={filter} onChange={this.onFilterChange} />
              <Contacts
                contacts={this.getFilteredContacts()}
                onDelete={this.onDelete}
              />
            </>
          ) : (
            <Alert variant="info">Contact list is empty</Alert>
          )}
        </Section>
      </Container>
    );
  }
}
