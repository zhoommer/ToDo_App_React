import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "../../../services/axiosInstance";
import { AddToDo } from "../../../types/AddToDoInterface";

interface addToDoState {
  data: AddToDo | null;
  loading: boolean;
  success?: boolean;
  error: string | undefined;
}

const initialState: addToDoState = {
  data: null,
  loading: false,
  success: false,
  error: "",
};

export const addToDo = createAsyncThunk("addToDo", async (body: AddToDo) => {
  const client = axiosClient();
  const req = await client.post("add-todo", body);
  return req.data;
});

const addToDoSlice = createSlice({
  name: "addToDo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToDo.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(addToDo.fulfilled, (state, action: any) => {
      state.data = action.payload;
      state.loading = false;
      state.success = true;
    });

    builder.addCase(addToDo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success = false;
      state.data = null;
    });
  },
});

export default addToDoSlice.reducer;
