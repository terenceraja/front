import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    addCounterToStore: (state, action) => {
      // state.value.push({ azd: 1351 });

      console.log("like added to store");
    },
  },
});

export const { addCounterToStore } = counterSlice.actions;
export default counterSlice.reducer;
