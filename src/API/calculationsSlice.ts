import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { Calculation } from "./API";

export const getCalculationsList = createAsyncThunk(
  "calculations/getAll",
  async () => {
    console.log("getcalc list");
    const data = await Api.getCalculations();
    return data;
  }
);

const initialState = {
  calculations: [] as Calculation[],
  error: "",
  loading: false,
};

const calculationsSlice = createSlice({
  name: "calculations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        getCalculationsList.fulfilled,
        (state, action: { payload: Calculation[] }) => {
          console.log("pobrano dane");
          console.log(action.payload);
          state.calculations = action.payload;
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(getCalculationsList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCalculationsList.rejected, (state, action) => {
        state.error = "download calculations data error";
        state.loading = false;
      });
  },
  reducers: {},
});

const { reducer } = calculationsSlice;
export default reducer;
