import React, {Component} from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component { 

  state = {
    name: '',
    number: '',
  };

  onChangeInput = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.onSubmitForm}>
        <div className={css.form__data}>
          <label className={css.form__label}>
            Name
            <input
            className={css.form__item}
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
        
          <label className={css.form__label}>
            Number
            <input
              className={css.form__item}
              type="tel"
              name="number"
              value={number}
              onChange={this.onChangeInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </label>
          </div>

        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

