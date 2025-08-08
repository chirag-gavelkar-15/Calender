// calendarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: null,
  modalOpen: false,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { setSelectedDate, openModal, closeModal } = calendarSlice.actions;
export default calendarSlice.reducer;
