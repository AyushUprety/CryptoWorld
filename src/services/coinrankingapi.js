import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "be0b7c3582mshafb0cdeda175d83p1f8d6ejsn14223d0757f6",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const makeRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoAPi", // what is this reducer for?
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // this function instantly returns an object
    getCryptos: builder.query({
      query: (totalCoins) => makeRequest(`/coins?limit=${totalCoins}`), // Wrote a clean piece of code to pass headers using functions
    }),
    getCoinDetails: builder.query({
      query: (coinId) => makeRequest(`/coin/${coinId}`),
    }),
    getCryptosHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        makeRequest(`/coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});
export const {
  useGetCryptosQuery,
  useGetCoinDetailsQuery, // creates a hook that gets all data for your query redux ko documentation ma clearly deko xa
  useGetCryptosHistoryQuery,
} = cryptoApi; // This is coming from cryptoApi
