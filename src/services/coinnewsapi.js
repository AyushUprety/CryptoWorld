import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsAPiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "be0b7c3582mshafb0cdeda175d83p1f8d6ejsn14223d0757f6",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
// Define a service using a base URL and expected endpoints
const makeRequest = (url) => ({
  //why ( is required
  url,
  headers: newsAPiHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ category, count }) =>
        makeRequest(
          `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ), // cryptojs sanga compare gar confusion vayo
    }),
  }),
});
export const { useGetNewsQuery } = cryptoNewsApi;
