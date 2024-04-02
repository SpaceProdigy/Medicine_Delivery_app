import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favorite: [],
  selectedProducts: [],
  theme: null,
  cartInputs: {},
  history: [],
};

export const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    saveProductsIds: (state, { payload }) => {
      if (!state.selectedProducts.includes(payload)) {
        state.selectedProducts.push(payload);
      }
    },
    updateOrder: (state, { payload }) => {
      state.selectedProducts = payload;
    },

    updateInputs: (state, { payload }) => {
      state.cartInputs = payload;
    },
    updateHistory: (state, { payload }) => {
      state.history.push({
        ...payload,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        id: nanoid(),
      });
    },

    deleteProductIds: (state, action) => {
      state.selectedProducts = state.selectedProducts?.filter(
        product => product !== action.payload
      );
    },
    toggleFavorite: (state, { payload }) => {
      if (!state.favorite.includes(payload)) {
        state.favorite.push(payload);
      } else {
        state.favorite = state.favorite.filter(item => item !== payload);
      }
    },
    saveTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

const persistConfiAuth = {
  key: 'basicSettings',
  storage,
};

export const localProductsReducer = persistReducer(
  persistConfiAuth,
  localSlice.reducer
);

export const {
  saveProductsIds,
  deleteProductIds,
  toggleFavorite,
  saveTheme,
  updateOrder,
  updateInputs,
  updateHistory,
} = localSlice.actions;
export const selectHistory = state => state.local.history;
export const selectInputs = state => state.local.cartInputs;
export const selectProductsIdArr = state => state.local.selectedProducts;
export const selectfavorite = state => state.local.favorite;
export const selectTheme = state => state.local.theme;
