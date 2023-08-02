import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { contactsSlice } from './contactsSlice';
import { contactsFilter } from './filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const reducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsSlice.reducer),
  filters: contactsFilter.reducer,
});
