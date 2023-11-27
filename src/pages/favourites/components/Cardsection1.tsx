import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Card1, { CardItem } from "../../../components/Cards/Card1";
import { arr } from "../../../constants/constants";

const CardSection2 = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favorites
  );
  const cardStyle = {
    background: "linear-gradient(to left, #1c1917 95%, transparent 100%)",
  };
  const favoriteIds = useSelector(
    (state: RootState) => state.favorite.favorites
  );

  const filteredFavorites = arr.filter((card) =>
    favoriteList.includes(card.id)
  );

  return (
    <div
      className="flex flex-col sm:w-[100vw] md:w-[77vw] lg:w-[85vw] items-center md:h-[150vh] sm:h-[230vh] overflow-y-auto"
      style={cardStyle}
    >
      <div className="text-white text-2xl font-semibold font-['Poppins'] p-4">
        <h2 className="my-[5vh] ml-[1vw]">Favorites</h2>
        {favoriteIds.length === 0 && (
          <p>You have no favorite shows right now</p>
        )}
        <div className="flex overflow-y-auto md:w-[75vw] sm:w-[70vw]">
          {filteredFavorites.map((card, index) => (
            <Card1
              key={index}
              {...card}
              isFavorite={favoriteList.includes(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection2;
