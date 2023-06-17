'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyListProps {
  currenciesArray: [string, string][];
  currentCurrency: string;
  rates: {
    [currency: string]: number;
  };
}

const initialState: CurrencyListProps = {
  currenciesArray: [],
  currentCurrency: '',
  rates: {},
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrencyArray: (state, action: PayloadAction<[string, string][]>) => {
      state.currenciesArray = action.payload;
    },
    setCurrentCurrency: (state, action: PayloadAction<string>) => {
      state.currentCurrency = action.payload;
    },
    setCurrencyData: (state, action: PayloadAction<CurrencyListProps>) => {
      state.rates = action.payload.rates;
    },
  },
});

export const { setCurrencyData, setCurrentCurrency, setCurrencyArray, reset } = currencySlice.actions;
export default currencySlice.reducer;
