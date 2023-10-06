import { createSlice } from "@reduxjs/toolkit";
import { updateErorStatus, updateJoke, updateJokesList, updateLoadingStatus } from "./jokes.actions";
import { fetchJoke, fetchJokesList } from "./jokes.thunk";
import { REQUEST_STATUS } from "../../constans";

const initialState = {
  jokesList: [],
  requestStatus: REQUEST_STATUS.idle,
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJokesList.pending.type, updateLoadingStatus);
    builder.addCase(fetchJoke.pending.type, updateLoadingStatus);

    builder.addCase(fetchJokesList.fulfilled.type, updateJokesList);
    builder.addCase(fetchJoke.fulfilled.type, updateJoke);

    builder.addCase(fetchJokesList.rejected.type, updateErorStatus);
    builder.addCase(fetchJoke.rejected.type, updateErorStatus);
  },
});

const { actions, reducer } = jokesSlice;

export const jokesActions = actions;
export const jokesReducer = reducer;
