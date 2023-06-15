import css from './contactList.module.css';
import { Item } from '../ContactListOne/contactListOne';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ name, phone, id }) => (
        <Item
          id={id}
          number={phone}
          name={name}
          onClick={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.number,
  onDeleteContact: PropTypes.func,
};
