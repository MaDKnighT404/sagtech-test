'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConvertorProps {
  amount: string;
}

const initialConvertorState: ConvertorProps = {
  amount: '',
};

export const convertorSlice = createSlice({
  name: 'convertor',
  initialState: initialConvertorState,
  reducers: {
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    resetAmount: (state) => {
      state.amount = '';
    },
  },
});

export const { setAmount, resetAmount } = convertorSlice.actions;
export default convertorSlice.reducer;