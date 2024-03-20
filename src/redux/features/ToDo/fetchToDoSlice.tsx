import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "../../../services/axiosInstance";
import { FetchToDoInterface } from "../../../types/FetchToDoInterface";

interface fetchToDoState {
  data: FetchToDoInterface | null;
  loading: boolean;
  success?: boolean;
  error: string | undefined;
}

const initialState: fetchToDoState = {
  data: null,
  loading: false,
  success: false,
  error: "",
};

export const fetchToDos = createAsyncThunk("fetchToDos", async () => {
  const client = axiosClient();
  const response = await client.get("todos");
  return response.data;
});

const fetchToDoSlice = createSlice({
  name: "fetchToDo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(
      fetchToDos.fulfilled,
      (state, action: PayloadAction<FetchToDoInterface>) => {
        state.data = action.payload;
        state.loading = false;
        state.success = true;
        state.error = "";
      },
    );

    builder.addCase(fetchToDos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success = false;
      state.data = null;
    });
  },
});

export default fetchToDoSlice.reducer;
