import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormAddContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
    console.warn(`no field with name ${name}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="border border-primary-subtle p-3 rounded-3"
    >
      <Form.Group className="mb-3" controlId="formAddContactName">
        <Form.Label className="fs-4 fw-medium">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          pattern="^[a-zA-Z\u0400-\u04FF]+(([' -][a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$"
          required
          placeholder="Enter contact name"
          value={name}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAddContactTel">
        <Form.Label className="fs-4 fw-medium">Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          placeholder="Enter contact phone number"
          value={number}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">
          Phone number must be digits and can contain spaces dashes, parentheses
          and can start with +
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormAddContact;
