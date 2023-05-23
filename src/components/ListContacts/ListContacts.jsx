import React, { Component } from 'react';
import { ListContactsItem } from './ListContactsItem';
import PropTypes from 'prop-types';
export class ListContacts extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => (
            <ListContactsItem onDelete={this.props.onDelete} contact={contact} key={contact.id }/>
          ))}
        </ul>
      </div>
    );
  }
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