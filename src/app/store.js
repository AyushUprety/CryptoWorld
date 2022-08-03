import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/coinrankingapi";
import { cryptoNewsApi } from "../services/coinnewsapi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, // Application is connected
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
