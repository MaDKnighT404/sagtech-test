import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyListProps {
  rates: {
    [currency: string]: number;
  };
}

const initialState: CurrencyListProps = {
  rates: {
    USD: 1,
    RUB: 0.5,
  },
};

export const currency = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrencyData: (state, action: PayloadAction<CurrencyListProps>) => {
      state.rates = action.payload.rates;
    },
  },
});

export const { setCurrencyData, reset } = currency.actions;
export default currency.reducer;
