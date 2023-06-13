import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { addContacts } from '../../redux/contactsSlice';
import { addContact } from 'redux/operations';

export function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;
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
    setId(nanoid());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name, number, id }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setId('');
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nanoid()}>
          <p className={css.textLabel}>Name</p>
          <input
            className={css.inputField}
            // id={nanoid()}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </label>
        <label className={css.label} htmlFor={nanoid()}>
          <p className={css.textLabel}>Number</p>
          <input
            className={css.inputField}
            // id={nanoid()}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </label>
        <button className={css.button} type="submit" onSubmit={handleSubmit}>
          Add contact
        </button>
      </form>
    </>
  );
}
ContactForm.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
