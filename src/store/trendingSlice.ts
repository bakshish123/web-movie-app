import React from "react";
import { createSlice } from "@reduxjs/toolkit";

type trendingState = {
  display: string;
};

const initialState: trendingState = {
  display: "1",
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    displayCard: (state, action) => {
      // console.log('init ',initialState);
      state.display = action.payload;
    },
  },
});

export const { displayCard } = trendingSlice.actions;
export default trendingSlice.reducer;
