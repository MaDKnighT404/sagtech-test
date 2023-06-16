// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// interface ExchangeRates {
//   disclaimer: string;
//   license: string;
//   timestamp: number;
//   base: string;
//   rates: {
//     [currency: string]: number;
//   };
// }

// export const currencyApi = createApi({
//   reducerPath: 'userApi',
//   refetchOnFocus: true,
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://openexchangerates.org/api',
//     prepareHeaders: (headers) => {
//       headers.set('Authorization', `Token ${process.env.NEXT_PUBLIC_USER_ID_TOKEN}`);
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     rates: builder.query<ExchangeRates, void>({
//       query: () => 'latest.json',
//     }),
//   }),
// });

// export const { useRatesQuery } = currencyApi;
