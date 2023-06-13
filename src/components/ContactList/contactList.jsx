import css from './contactList.module.css';
import { Item } from '../ContactListOne/contactListOne';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContacts} from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const getVisibleContacts = (contacts, filter) => {
    console.log(contacts)
     return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
        <Item
          id={id}
          number={number}
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
