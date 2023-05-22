import PropTypes from 'prop-types'
import { Input } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></Input>
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}