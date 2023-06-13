import React from 'react';
import css from './filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(filterContacts(evt.currentTarget.value.toLowerCase()));
  };

  return (
    <div className={css.filter}>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        onChange={handleChange}
      />
    </div>
  );
};
Filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
