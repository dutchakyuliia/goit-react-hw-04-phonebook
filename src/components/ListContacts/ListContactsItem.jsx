import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class ListContactsItem extends Component {
  render() {
    return (
      <li>{this.props.contact.name}  {this.props.contact.number}
        <button onClick={() => {
          this.props.onDelete(this.props.contact.id)
        }} >Delete</button></li>
       
    );
  }
}
ListContactsItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })
};