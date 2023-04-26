import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';


function Filter({value, onChangeFilter}) {
  return (
    <label className={css.filter__title}>Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        name="name"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};