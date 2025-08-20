import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slice/sliceCouse"; // siz yozgan slice

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store as default };
