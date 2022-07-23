import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/coinrankingapi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
