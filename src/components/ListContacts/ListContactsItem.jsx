import React from 'react';
import PropTypes from 'prop-types';
export const ListContactsItem = ({contact, onDelete}) => {
    return (
      <li>{contact.name}  {contact.number}
        <button onClick={() => {
          onDelete(contact.id)
        }} >Delete</button></li>
       
    );
  }
ListContactsItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })
};