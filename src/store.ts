import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { usersSlice } from "./redux/usersSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [usersSlice.name]: usersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
