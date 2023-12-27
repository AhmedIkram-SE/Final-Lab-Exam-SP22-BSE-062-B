import { configureStore } from "@reduxjs/toolkit";
import dragonSlice from "../features/dragonsSlice";
import missionsSlice from "../features/MissionsSlice";
const store = configureStore({
  reducer: {
    dragons: dragonSlice,
    missions: missionsSlice,
  },
});

export default store;
