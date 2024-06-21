import { configureStore } from '@reduxjs/toolkit';
import applicationsReducer from './reducers/applicationsReducer';

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
  },
});
