import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import currency from './features/currencySlice';
import convertor from './features/convertorSlice';

export const store = configureStore({
  reducer: {
    currency,
    convertor,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
