import React, { Component } from 'react';
import { CreateContacts } from './CreateContacts/CreateContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Search } from './Search/Search';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSearch = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };
  saveContact = contact => {
    this.setState({
      contacts: [contact].concat(this.state.contacts),
    });
  };
  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storageContacts) {
      this.setState({
        contacts: storageContacts,
      });
    }
  }
  componentDidUpdate(preProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <CreateContacts
          saveContact={this.saveContact}
          contacts={this.state.contacts}
        ></CreateContacts>
        <h2>Contacts</h2>
        <ListContacts
          onDelete={this.deleteContact}
          contacts={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
        ></ListContacts>
        <Search
          filter={this.state.filter}
          handleSearch={this.handleSearch}
        ></Search>
      </div>
    );
  }
}
