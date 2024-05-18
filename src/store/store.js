import { configureStore } from "@reduxjs/toolkit";
import ModelSlice from "./slices/model";

export default configureStore({
  reducer: { ModelSlice },
  devTools: true,
});
