import { ThreeDots } from 'react-loader-spinner';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { SectionContact, TitlePage } from './App.styled';
import { fetchContacts } from 'redux/options';
import { selectorIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionContact>
      <TitlePage>Phonebook</TitlePage>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      <ContactList />
    </SectionContact>
  );
};
