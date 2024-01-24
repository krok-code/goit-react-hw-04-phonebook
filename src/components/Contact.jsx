import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, ListGroup } from 'react-bootstrap';

const Contact = ({ contact: { name, number }, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {number}
      </div>
      <CloseButton onClick={onDelete} />
    </ListGroup.Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
