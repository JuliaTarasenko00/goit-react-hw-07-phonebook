import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectFilterContacts = state => state.filters.filters;

export const selectorIsLoading = state => state.contacts.isLoading;

export const selectorFilterContact = createSelector(
  [selectContacts, selectFilterContacts],
  (contactName, filterValue) =>
    contactName?.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    )
);
