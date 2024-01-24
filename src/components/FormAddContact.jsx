import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormAddContact extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="border border-primary-subtle p-3 rounded-3"
      >
        <Form.Group className="mb-3" controlId="formAddContactName">
          <Form.Label className="fs-4 fw-medium">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            placeholder="Enter contact name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <Form.Text className="text-muted">
            Name may contain only letters, apostrophe, dash and spaces. For
            example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan
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
            value={this.state.number}
            onChange={this.handleInputChange}
          />
          <Form.Text className="text-muted">
            Phone number must be digits and can contain spaces dashes,
            parentheses and can start with +
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormAddContact;
