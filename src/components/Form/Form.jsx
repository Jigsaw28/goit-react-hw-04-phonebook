import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, Input, BtnDelete } from './Form.styled';

export class Form extends Component {
  InputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name, number } }) => {
    this.setState({
      [name]: value,
      [number]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <label htmlFor={this.InputId}>Name</label>
        <br></br>
        <Input
          type="text"
          name="name"
          id={this.InputId}
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          required
        />
        <br></br>
        <label htmlFor={this.InputId}>Number</label>
        <br></br>
        <Input
          id={this.InputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          onChange={this.handleChange}
          required
        />
        <br></br>
        <BtnDelete type="submit" name="addContact">
          Add contact
        </BtnDelete>
      </FormStyle>
    );
  }
}

