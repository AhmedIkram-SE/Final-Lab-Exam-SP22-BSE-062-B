import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.spacexdata.com/v3/missions";

const fetchData1 = createAsyncThunk("missions/fetchData1", async () => {
  const response = await fetch(URL);
  return response.json();
});

const missionsSlice = createSlice({
  name: "missions",
  initialState: { missionsList: [], loading: false, error: null },
  reducers: {
    Joning(state, action) {
      const { id, type } = action.payload;
      const newList = state.missionsList.map((mission) => {
        if (type === "reserve" && id === mission.id) {
          return { ...mission, reserved: true };
        }
        if (type === "cancel" && id === mission.id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });

      state.missionsList = newList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData1.fulfilled, (state, action) => {
        state.missionsList = action.payload;
      })
      .addCase(fetchData1.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default missionsSlice.reducer;
export const { Joning } = missionsSlice.actions;
export { fetchData1 };
