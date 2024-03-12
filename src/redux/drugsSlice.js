import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { choseDrugsThunk, fetchDrugsThunk } from './operations';

const drugsState = {
  isLoading: false,
  error: null,
  choseDrugs: [],
  drugs: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const drugsSlice = createSlice({
  name: 'drugs',
  initialState: drugsState,
  extraReducers: builder =>
    builder
      .addCase(choseDrugsThunk.pending, handlePending)
      .addCase(choseDrugsThunk.rejected, handleRejected)
      .addCase(choseDrugsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.choseDrugs.push(action.payload);
      })
      .addCase(fetchDrugsThunk.pending, handlePending)
      .addCase(fetchDrugsThunk.rejected, handleRejected)
      .addCase(fetchDrugsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drugs = action.payload;
      }),
});

const persistConfiAuth = {
  key: 'choseDrugs',
  storage,
  whitelist: ['choseDrugs'],
};

export const drugsReducer = persistReducer(
  persistConfiAuth,
  drugsSlice.reducer
);

export const selectDrugsLoading = state => state.drugs.isLoading;
export const selectDrugs = state => state.drugs.drugs;
export const selectChoseDrugs = state => state.drugs.choseDrugs;
