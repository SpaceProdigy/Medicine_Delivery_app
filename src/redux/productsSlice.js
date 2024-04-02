import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProductsThunk,
  fetchProductsByIdThunk,
  fetchCartProductThunk,
} from './productsOperations';

const productsState = {
  isLoading: false,
  error: null,
  products: [],
  productsById: {},
  cartProducts: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsState,
  extraReducers: builder =>
    builder
      .addCase(fetchProductsThunk.pending, handlePending)
      .addCase(fetchProductsThunk.rejected, handleRejected)
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })

      .addCase(fetchProductsByIdThunk.pending, handlePending)
      .addCase(fetchProductsByIdThunk.rejected, handleRejected)
      .addCase(fetchProductsByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.productsById = action.payload;
      })

      .addCase(fetchCartProductThunk.pending, handlePending)
      .addCase(fetchCartProductThunk.rejected, handleRejected)
      .addCase(fetchCartProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cartProducts = action.payload;
      }),
  //   .addCase(reorderhDrugsThunk.pending, handlePending)
  //   .addCase(reorderhDrugsThunk.rejected, handleRejected)
  //   .addCase(reorderhDrugsThunk.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.choseDrugs = action.payload;
  //   }),
});

export const productsReducer = productsSlice.reducer;

export const selectProductsLoading = state => state.products.isLoading;
export const selectCartProducts = state => state.products.cartProducts;
export const selectProducts = state => state.products.products;
export const selectError = state => state.products.error;
export const selectProductById = state => state.products.productsById;
