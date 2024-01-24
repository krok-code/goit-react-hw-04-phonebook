import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Filter = ({ value, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId="filter">
      <Form.Label>Filter</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
