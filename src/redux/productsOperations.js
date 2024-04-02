import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsThunk = createAsyncThunk(
  'products/fetch',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        data
          ? `https://fakestoreapi.com/products/category/${data}`
          : `https://fakestoreapi.com/products`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductsByIdThunk = createAsyncThunk(
  'product/fetchById',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${data}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCartProductThunk = createAsyncThunk(
  'product/delete',
  async (data, { rejectWithValue }) => {
    try {
      const promise = Promise.all(
        data.map(id => axios.get(`https://fakestoreapi.com/products/${id}`))
      ).then(products => products.map(({ data }) => data));
      return promise;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
