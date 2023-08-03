import { useDispatch, useSelector } from 'react-redux';

import {
  Contact,
  ContactTitle,
  ContactBtn,
  ContactListUl,
} from './Contact.styled';

import { deleteContact } from 'redux/options';
import { selectorFilterContact, selectorIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const contactsFilteredByName = useSelector(selectorFilterContact);
  const isLoading = useSelector(selectorIsLoading);
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <>
      {contactsFilteredByName.length === 0 && !isLoading && (
        <p style={{ marginTop: '10px', color: 'red' }}>
          Your contacts will be here 😉
        </p>
      )}
      <ContactListUl>
        {contactsFilteredByName?.map(({ name, number, id }) => (
          <Contact key={id}>
            <ContactTitle>• {name}:</ContactTitle>
            <p>{number}</p>
            <ContactBtn type="button" onClick={() => deleteContacts(id)}>
              Delete
            </ContactBtn>
          </Contact>
        ))}
      </ContactListUl>
    </>
  );
};
