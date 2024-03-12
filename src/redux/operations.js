import { createAsyncThunk } from '@reduxjs/toolkit';
import { tablets } from '../DRUGS';

export const choseDrugsThunk = createAsyncThunk(
  'drugs/chose',
  async (data, { rejectWithValue }) => {
    try {
      if (data) {
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDrugsThunk = createAsyncThunk(
  'drugs/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return tablets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
