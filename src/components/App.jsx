import React, { useState, useEffect } from 'react';
import { CreateContacts } from './CreateContacts/CreateContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Search } from './Search/Search';
import css from "./App.module.css"
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      return storageContacts;
    }

    return [];
  });
  const [filter, setFilter] = useState('');

  const handleSearch = ({ target: { value } }) => {
    setFilter(value);
  };
  const saveContact = contact => {
    setContacts([contact].concat(contacts));
  };

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      setContacts(storageContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  return (
    <div className={css.wrapper}>
      <h2>Phonebook</h2>
      <CreateContacts
        saveContact={saveContact}
        contacts={contacts}
      ></CreateContacts>
      <h2>Contacts</h2>
      <ListContacts
        onDelete={deleteContact}
        contacts={contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
      ></ListContacts>
      <Search filter={filter} handleSearch={handleSearch}></Search>
    </div>
  );
};
