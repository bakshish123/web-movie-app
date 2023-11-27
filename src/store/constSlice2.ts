import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import Card1, { CardItem } from "../components/Cards/Card1";
import { arr2 } from "../constants/constants";

export interface CardArrayState {
  arr: CardItem[];
}

const initialState = {
  arr: arr2,
};

const cardArraySlice = createSlice({
  name: "cardArray2",
  initialState,
  reducers: {
    setCardArray: (state, action: PayloadAction<CardItem[]>) => {
      //   state.arr = action.payload;
      console.log(state.arr);
    },
    updateCardFavoriteStatus: (
      state,
      action: PayloadAction<{ cardId: string; isFavorite: boolean }>
    ) => {
      const { cardId, isFavorite } = action.payload;
      console.log("UPDATE CAD FAV");
      console.log(action.payload, "action");
      console.log("const slice ", cardId);
      console.log("const isFavourite ", isFavorite);
      const cardIndex = state.arr.findIndex(
        (card: CardItem) => card.id === cardId
      );
      console.log("CARD ", cardId);
      console.log("BEFORE", current(state));
      if (cardIndex !== -1 && state.arr) {
        console.log("inside");
        state.arr[cardIndex].isFavorite = isFavorite;
      }
      console.log("AFTER", current(state));
    },
  },
});

export const { setCardArray, updateCardFavoriteStatus } =
  cardArraySlice.actions;
export default cardArraySlice.reducer;
