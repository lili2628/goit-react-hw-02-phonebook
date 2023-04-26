import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactItem from "./ContactItem";
import css from './App.module.css';
import initialContacts from '../data/contacts.json';
import {nanoid} from 'nanoid';

class App extends Component { 

  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (data) => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    }
    
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert(`${data.name} is already in contact`);
    } else {
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
      }
  }
  
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <div className={css.contacts}>
          <h2 className={css.title__contacts}>Contacts ({contacts.length})</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList>
            <ContactItem contacts={visibleContacts} onDeleteContact={this.deleteContact} />
          </ContactList>
        </div>
      </div>
    );
  }
}

export default App;


