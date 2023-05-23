import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
export const CreateContacts = ({contacts, saveContact}) =>{
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = ({target: {value, name}}) => {
    if (name === "name") setName(value)
    else if (name === "number")setNumber(value)
  };
  
  const handleSubmit = e => {
    const newContact = {
      name,
      number,
      id: nanoid()
    };
    if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      saveContact(newContact);
      reset()
    } else {
      alert('Name is already in contacts');
    }
    e.preventDefault();
    
  };


  const reset = () => {
    setName(""); setNumber("")
  };

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <h3>Name</h3>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contacts</button>
        </form>
      </div>
    );
  }

CreateContacts.propTypes = {
  saveContact: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
  }))
};