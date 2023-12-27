import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spacexdata.com/v4/dragons";

const fetchData = createAsyncThunk("dragons/fetchData", async () => {
  const response = await fetch(URL);
  return response.json();
});

const dragonSlice = createSlice({
  name: "dragon",
  initialState: { dragonList: [], loading: false, error: null },
  reducers: {
    Reservation(state, action) {
      const { id, type } = action.payload;

      const newList = state.dragonList.map((dragon) => {
        if (type === "reserve" && id === dragon.id) {
          return { ...dragon, reserved: true };
        }
        if (type === "cancel" && id === dragon.id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });

      state.dragonList = newList;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.dragonList = action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dragonSlice.reducer;
export const { Reservation } = dragonSlice.actions;
export { fetchData };
