'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  currencyArray: [string, string][];
  currentCurrency: string;
  rates: {
    [currency: string]: number;
  };
}

const initialState: CurrencyState = {
  currencyArray: [],
  currentCurrency: '',
  rates: {},
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyArray: (state, action: PayloadAction<[string, string][]>) => {
      state.currencyArray = action.payload;
    },
    setCurrentCurrency: (state, action: PayloadAction<string>) => {
      state.currentCurrency = action.payload;
    },
    setCurrencyData: (state, action: PayloadAction<CurrencyState>) => {
      state.rates = action.payload.rates;
    },
  },
});

export const { setCurrencyData, setCurrentCurrency, setCurrencyArray } = currencySlice.actions;
export default currencySlice.reducer;
