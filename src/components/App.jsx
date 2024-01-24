import React, { useState, useEffect } from 'react';
import FormAddContact from './FormAddContact';
import { Alert, Container } from 'react-bootstrap';
import Section from './Section';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter';

const normalize = text => text.toLowerCase();

const App = () => {
  const [contacts, setContacts] = useState(readContacts);
  const [filter, setFilter] = useState('');

  function readContacts() {
    const contacts = localStorage.getItem('contacts');
    try {
      const parsedContacts = JSON.parse(contacts);
      return parsedContacts || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContact = byName => {
    return contacts.find(({ name }) => normalize(name) === normalize(byName));
  };

  const addContact = ({ name, number }) => {
    if (findContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { name, number, id: nanoid() }]);
  };

  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = normalize(filter);

    return contacts.filter(
      contact =>
        normalize(contact.name).includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <Container className="w-50 p-3">
      <Section title="Phonebook">
        <FormAddContact onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 ? (
          <>
            <Filter value={filter} onChange={onFilterChange} />
            <Contacts contacts={getFilteredContacts()} onDelete={onDelete} />
          </>
        ) : (
          <Alert variant="info">Contact list is empty</Alert>
        )}
      </Section>
    </Container>
  );
};

export default App;
