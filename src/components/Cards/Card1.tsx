import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardButton from "../buttons/CardButton";
import tokyo from "../../assets/images/tokyo.png";
import moonfall from "../../assets/images/moonfall.png";
import paris from "../../assets/images/paris.png";
import guccci from "../../assets/images/gucci.png";
import { displayCard } from "../../store/trendingSlice";

export interface CardItem {
  id: string;
  url: string;
  title: string;
  description: string;
  isFavorite: boolean;
  ratings: string;
  details: string;
}

const Card1: React.FC<CardItem> = ({
  id,
  url,
  title,
  description,
  isFavorite,
}) => {
  const dispatch = useDispatch();
  const handleDisplay = () => {
    console.log("clicked");
    dispatch(displayCard(id));
  };

  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={cardStyle}
      className="rounded-[20px] border border-neutral-400 md:h-[20rem] md:w-[15rem] m-2 flex flex-col sm:w-[20rem]"
      onClick={handleDisplay}
    >
      <div className="mt-[1rem] w-[3rem] md:ml-[12rem] sm:ml-[17rem]">
        <CardButton cardId={id} isBig={false} />
      </div>
      <div className="md:w-[14.8rem] mt-[12.5rem] p-4 sm:w-[19.9rem] text-white bg-gradient-to-r from-white to-opacity-50 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
        <div className="text-black text-base font-semibold font-['Poppins'] leading-normal">
          {title}
        </div>
        <p className="text-black text-sm font-normal font-['Poppins'] leading-none">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card1;
