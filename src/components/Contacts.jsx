import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ListGroup variant="flush">
      {contacts.map(({ id, ...contactInfo }) => (
        <Contact key={id} contact={contactInfo} onDelete={() => onDelete(id)} />
      ))}
    </ListGroup>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
