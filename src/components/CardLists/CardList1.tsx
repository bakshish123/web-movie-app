import React from "react";
import Card1, { CardItem } from "../Cards/Card1";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CardList1: React.FC = () => {
  const favoriteIds = useSelector(
    (state: RootState) => state.favorite.favorites
  );
  const cardArray = useSelector((state: RootState) => state.cardArray.arr);

  return (
    <div className="text-white text-xl font-semibold font-['Poppins'] md:w-[70vw] lg:w-[80vw] sm:ml-[2vw]">
      <h2 className="">Trending</h2>
      <div className="no-scrollbar flex mt-[3vh] overflow-y-auto md:w-[70vw] lg:w-[80vw] sm:w-[90vw]">
        {cardArray.map((card, index) => (
          <Card1
            key={index}
            {...card}
            isFavorite={favoriteIds.includes(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList1;
