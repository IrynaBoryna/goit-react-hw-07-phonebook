import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';
import PropTypes from 'prop-types';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <div style={divStyles}>
      <div
        style={{
          width: 1100,
        }}
      >
        <h1 style={{ fontSize: 60 }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ fontSize: 50 }}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </div>
  );
}

const divStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  flexDirection: 'column',
};
App.prototype = {
  filter: PropTypes.string,
  contacts: PropTypes.number,
};
