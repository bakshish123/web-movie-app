import React from "react";
import Card2 from "../Cards/Card2"; // Import Card2 and CardItem types
import { CardItem } from "../Cards/Card1";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CardList2: React.FC = () => {
  const favoriteIds = useSelector(
    (state: RootState) => state.favorite.favorites
  );
  const cardArray = useSelector((state: RootState) => state.cardArray2.arr);

  return (
    <div className="flex flex-col md:w-[70vw] lg:w-[80vw] sm:ml-[2vw]">
      <h2 className="text-white text-xl font-semibold font-['Poppins'] my-[5vh]">
        Continue Watching
      </h2>
      <div className="no-scrollbar flex mt-[3vh] overflow-y-auto md:w-[70vw] lg:w-[80vw] sm:w-[90vw]">
        {cardArray.map((card, index) => (
          <Card2 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardList2;
