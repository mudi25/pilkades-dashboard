import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSliece } from "./authState";
export const rootReducer = combineReducers({
  authState: authSliece.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
