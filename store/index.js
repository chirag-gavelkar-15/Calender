// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './CalenderSlice';

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});

export default store;
