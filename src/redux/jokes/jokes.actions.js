import { REQUEST_STATUS } from "../../constans";

export const updateJokesList = (state, action) => {
  state.requestStatus = REQUEST_STATUS.idle;
  state.jokesList = action.payload;
};

export const updateJoke = (state, action) => {
  state.requestStatus = REQUEST_STATUS.idle;
  state.jokesList = [action.payload];
};

export const updateLoadingStatus = (state) => {
  state.requestStatus = REQUEST_STATUS.loading;
};

export const updateErorStatus = (state) => {
  state.requestStatus = REQUEST_STATUS.error;
};
