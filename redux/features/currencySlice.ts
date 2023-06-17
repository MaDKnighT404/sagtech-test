'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyListProps {
  currentCurrency: string;
  rates: {
    [currency: string]: number;
  };
}

const initialState: CurrencyListProps = {
  currentCurrency: '',
  rates: {},
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrentCurrency: (state, action: PayloadAction<string>) => {
      state.currentCurrency = action.payload;
    },
    setCurrencyData: (state, action: PayloadAction<CurrencyListProps>) => {
      state.rates = action.payload.rates;
    },
  },
});

export const { setCurrencyData, setCurrentCurrency, reset } = currencySlice.actions;
export default currencySlice.reducer;
