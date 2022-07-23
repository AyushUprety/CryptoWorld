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
      query: () => makeRequest("/coins"),
    }),
  }),
});
export const {
  useGetCryptosQuery, // creates a hook that gets all data for your query
} = cryptoApi; // This is coming from cryptoApi
