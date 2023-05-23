import React from 'react';
import { ListContactsItem } from './ListContactsItem';
import PropTypes from 'prop-types';
export const ListContacts = ({contacts, onDelete}) => {
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <ListContactsItem onDelete={onDelete} contact={contact} key={contact.id }/>
          ))}
        </ul>
      </div>
    );
  }


ListContacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
  }))
};