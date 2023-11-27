import React from "react";
import CardButton from "../buttons/CardButton";
import { CardItem } from "./Card1";

const Card2: React.FC<CardItem> = ({
  id,
  url,
  title,
  description,
  isFavorite,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="m-2 rounded-[20px] border border-neutral-400 h-[20rem] w-[20rem] lg:w-[20rem] flex flex-col"
      style={cardStyle}
    >
      <div className="h-[20rem] mt-[1rem] w-[3rem] lg:ml-[17rem] sm:ml-[17rem]">
        <CardButton cardId={id} isBig={false} />
      </div>

      <div className="p-4 sm:w-[19,9rem] lg:w-[19.9rem] mt-[12rem] text-white bg-gradient-to-r from-white to-opacity-50 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
        <h5 className="text-black text-base font-semibold font-['Poppins'] leading-normal">
          {title}
        </h5>
        <p className="text-black text-sm font-normal font-['Poppins'] leading-none">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card2;
