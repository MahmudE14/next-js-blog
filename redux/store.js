import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogSlice } from "./blogSlice";

export default configureStore({
  reducer: {
    blog: blogSlice,
  },
});

// setupListeners(store.dispatch);
