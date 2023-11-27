import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import cardArrayReducer from "./constSlice";
import trendingReducer from "./trendingSlice";
import bigButtonReducer from "./bigFavoriteSlice";
import cardArray2Reducer from "./constSlice2";
import sideNavbarReducer from "./sideNavbarSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    cardArray: cardArrayReducer,
    trending: trendingReducer,
    bigButton: bigButtonReducer,
    cardArray2: cardArray2Reducer,
    sideNavbar: sideNavbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
