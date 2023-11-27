import { createSlice } from "@reduxjs/toolkit";

type sideNavbarState = {
  display: boolean;
};

const initialState: sideNavbarState = {
  display: false,
};

const sideNavbarSlice = createSlice({
  name: "sideNavbar",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = sideNavbarSlice.actions;
export default sideNavbarSlice.reducer;
