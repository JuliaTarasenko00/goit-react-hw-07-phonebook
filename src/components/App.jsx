import 'react-toastify/dist/ReactToastify.css';

import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { SectionContact, TitlePage } from './App.styled';

export const App = () => {
  return (
    <SectionContact>
      <TitlePage>Phonebook</TitlePage>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </SectionContact>
  );
};
