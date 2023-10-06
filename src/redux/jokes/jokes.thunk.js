import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJokesList = createAsyncThunk("jokes/fetchJokesList", async () => {
  try {
    const { data } = await axios.get(`https://official-joke-api.appspot.com/random_ten`);
    return data;
  } catch (e) {
    throw e;
  }
});

export const fetchJoke = createAsyncThunk("jokes/fetchJoke", async () => {
  try {
    const { data } = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
    return data;
  } catch (e) {
    throw e;
  }
});
