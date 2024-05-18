import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "model",
  initialState: {
    modelValue: false,
    modelVariant: "",
  },
  reducers: {
    openModel: (state, a) => {
      state.modelValue = true;
      state.modelVariant = a.payload;
    },
    closeModel: (state) => {
      state.modelValue = false;
      state.modelVariant = "";
    },
  },
});

export const { openModel, closeModel } = ModelSlice.actions;

export default ModelSlice.reducer;
