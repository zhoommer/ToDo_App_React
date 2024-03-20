import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import labelSlice from "../features/Labels/labelSlice";
import fetchToDoSlice from "../features/ToDo/fetchToDoSlice";

const store = configureStore({
  reducer: {
    labels: labelSlice,
    todos: fetchToDoSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
