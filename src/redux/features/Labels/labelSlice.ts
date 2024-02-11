import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "../../../services/axiosInstance";
import { LabelDataInterface } from "../../../types/LabelInterface";

interface LabelState {
  data: [LabelDataInterface] | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: LabelState = {
  data: null,
  loading: false,
  error: "",
};

export const fetchLabels = createAsyncThunk("fetchLabels", async () => {
  const client = axiosClient();
  const response = await client.get("labels");
  return response.data;
});

export const createLabel = createAsyncThunk("createLabel", async(data: any) => {
	const client = axiosClient();
	try {
		const label = await client.post("add-label", data)
		return label;
	} catch (error) {
		console.log(error)
	}
})

const labelSlice = createSlice({
	name: 'labels',
	initialState, 
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLabels.pending, (state) => {
			state.loading = true;
			state.error = "";
		})
		builder.addCase(fetchLabels.fulfilled, (state, action: PayloadAction<[LabelDataInterface]>) => {
			state.data = action.payload;
			state.loading = false;
		})
		builder.addCase(fetchLabels.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		})

		builder.addCase(createLabel.pending, (state) => {
			state.loading = true;
			state.error = "";
		})
		builder.addCase(createLabel.fulfilled, (state, action: any) => {
			state.data = action.payload;
			state.loading = false;
		})
		builder.addCase(createLabel.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		})
	}
})


export default labelSlice.reducer;