'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConvertorState {
  amount: string;
  from: string;
  to: string;
  result: number;
}

const initialState: ConvertorState = {
  amount: '',
  from: 'USD',
  to: 'RUB',
  result: 0,
};

const convertorSlice = createSlice({
  name: 'convertor',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<ConvertorState>) => {
      state.amount = action.payload.amount;
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { setFormData, setAmount, setResult, resetForm } = convertorSlice.actions;
export default convertorSlice.reducer;
