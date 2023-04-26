import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


function ContactList({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

export default ContactList;

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};


