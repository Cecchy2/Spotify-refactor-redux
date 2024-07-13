import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: song,
});

export default store;
