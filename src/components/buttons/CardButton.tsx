import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/favoriteSlice";
import heart1 from "../../assets/svg/heart (1).svg";
import heart2 from "../../assets/svg/heart(2).svg";
import { RootState } from "../../store/store";
import { updateCardFavoriteStatus } from "../../store/constSlice";
import { setBigButtonFavorite } from "../../store/bigFavoriteSlice";

const CardButton = ({ cardId, isBig }: { cardId: string; isBig: boolean }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [bigFav, setbigFav] = useState(false);
  const dispatch = useDispatch();

  const cardArray = useSelector((state: RootState) => state.cardArray.arr);

  const currentCard = cardArray.find((card) => card.id === cardId);

  const isFavoriteFromRedux = currentCard ? currentCard.isFavorite : false;

  const handleToggleFavorite = () => {
    console.log("clicked");
    setIsFavorited(!isFavorited);
    setbigFav(!bigFav);

    if (!isFavorited && !isFavoriteFromRedux) {
      dispatch(addToFavorites(cardId));
      dispatch(updateCardFavoriteStatus({ cardId, isFavorite: true }));
    } else {
      dispatch(removeFromFavorites(cardId));
      dispatch(updateCardFavoriteStatus({ cardId, isFavorite: false }));
    }
  };

  return (
    <div onClick={handleToggleFavorite} className="hover:cursor-pointer">
      <div
        className={`${
          isBig ? "h-[54px] w-[54px] p-2" : "w-8 h-8"
        } p-[8.89px] bg-gradient-to-r from-white to-stone-400 rounded-lg border border-white backdrop-blur-[11.85px] justify-start items-start gap-[5.93px] inline-flex`}
      >
        <div
          className={`${
            isBig ? "w-6 h-6" : "w-[14.22px] h-[14.22px]"
          }"relative"`}
        >
          <img
            src={isFavoriteFromRedux || bigFav ? heart2 : heart1}
            alt="Heart Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default CardButton;
