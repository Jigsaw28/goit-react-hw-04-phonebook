import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contactlist } from './ContactList/ContactList';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const dublContact = contacts.find(contact => contact.name === data.name);
    const newContact = {
      ...data,
      id: nanoid(),
    };
    if (dublContact) {
      toast.error(`${data.name} is already in contacts`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <Contactlist
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
      <ToastContainer />
    </Container>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};