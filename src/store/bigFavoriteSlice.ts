import { createSlice } from "@reduxjs/toolkit";
import React from "react";

type BigButtonState = {
  isBigFavorite: boolean;
};

const initialState: BigButtonState = {
  isBigFavorite: false,
};

const bigButtonSlice = createSlice({
  name: "bigButton",
  initialState,
  reducers: {
    setBigButtonFavorite: (state, action) => {
      state.isBigFavorite = action.payload;
    },
  },
});

export const { setBigButtonFavorite } = bigButtonSlice.actions;
export default bigButtonSlice.reducer;
