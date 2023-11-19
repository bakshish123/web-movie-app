// store.ts
import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
