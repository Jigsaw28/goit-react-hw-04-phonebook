import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { List, Button, Item } from './ContactList.styled';

export const Contactlist = ({ contacts, filter, handleDelete }) => {
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filterName.map(contact => (
        <Item key={nanoid()}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            aria-label="Close"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

Contactlist.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }))
}

