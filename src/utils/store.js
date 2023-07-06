import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import serachSlice from "./serachSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: serachSlice,
    chat: chatSlice,
  },
});

export default store;
