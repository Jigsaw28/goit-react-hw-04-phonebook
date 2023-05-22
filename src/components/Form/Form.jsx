// import { Component } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, Input, BtnDelete } from './Form.styled';

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let inputId = nanoid();

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

 const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name, number});
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };


  return (
      <FormStyle onSubmit={handleSubmit}>
        <label htmlFor={inputId}>Name</label>
        <br></br>
        <Input
          type="text"
          name="name"
          id={inputId}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor={inputId}>Number</label>
        <br></br>
        <Input
          id={inputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
        <br></br>
        <BtnDelete type="submit" name="addContact">
          Add contact
        </BtnDelete>
      </FormStyle>
    );
}