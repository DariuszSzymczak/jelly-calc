import { configureStore } from "@reduxjs/toolkit";
import calculationsReducer from "./../API/calculationsSlice";
export const store = configureStore({
  reducer: {
    calculations: calculationsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
