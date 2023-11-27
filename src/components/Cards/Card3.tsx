import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardButton from "../buttons/CardButton";
import { CardItem } from "./Card1";

const Card3: React.FC<CardItem> = ({
  id,
  url,
  title,
  description,
  isFavorite,
  details,
  ratings,
}) => {
  //   const someReduxState = useSelector((state: RootState) => state.favorite.favorites.includes(id));

  return (
    <div className="rounded-[20px] border border-neutral-400 h-[28rem] w-[15rem] m-4 flex flex-row">
      <div className="  ">
        <img src={url} alt={title} className="h-[10rem] w-[10rem]" />
      </div>

      <div className="   w-[14.8rem] mt-[15.5rem] p-4 text-white bg-gradient-to-r from-white to-opacity-50 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
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

export default Card3;
