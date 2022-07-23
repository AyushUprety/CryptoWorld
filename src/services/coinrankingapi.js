import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "be0b7c3582mshafb0cdeda175d83p1f8d6ejsn14223d0757f6",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoAPi", // what is this reducer for?
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // this function instantly returns an object
    getCoinExchange: builder.query({
      query: () => "/exchanges",
    }),
  }),
});
// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "be0b7c3582mshafb0cdeda175d83p1f8d6ejsn14223d0757f6",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
