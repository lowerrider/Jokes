import { configureStore } from "@reduxjs/toolkit";
import { jokesReducer } from "./jokes/jokes.slice";

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});

export default store;
