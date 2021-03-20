import { observer } from 'mobx-react-lite';
import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = observer(({ data, setChange }) => {
  const filterArray = (array, key) => ({
    array: array.filter((item) => item.name.toLowerCase()
      .includes(key.toLowerCase())),
    key,
  });

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by Name"
      onChange={(e) => setChange(filterArray(data, e.target.value))}
    />
  );
});

SearchBar.propTypes = {
  data: PropTypes.instanceOf(Array),
  setChange: PropTypes.func,
};

export default SearchBar;
