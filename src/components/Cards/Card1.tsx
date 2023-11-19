// Card1.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CardButton from '../buttons/CardButton';

export interface CardItem {
  id: string;
  url: string;
  title: string;
  description: string;
}

const Card1: React.FC<CardItem & { isFavorite?: boolean }> = ({ id, url, title, description, isFavorite = false }) => {
    const isFavorite = useSelector((state: RootState) => state.favorite.favorites.includes(id));

  return (
    <div className="rounded-[20px] border border-neutral-400 h-[20rem] w-[15rem] m-4 flex flex-col">
      <div className='absolute'>
        <img src={url} alt={title} className="bg-slate-300 h-[10rem] w-[10rem]" />
      </div>
      <div className='h-[20rem] mt-[1rem] w-[3rem] ml-[12rem] absolute'>
        <CardButton cardId={id} />
      </div>
      <div className="absolute w-[14.8rem] mt-[15.5rem] p-4 text-white bg-gradient-to-r from-white to-opacity-50 rounded-bl-[20px] rounded-br-[20px] backdrop-blur-[20px]">
        <div className="text-black text-base font-semibold font-['Poppins'] leading-normal">{title}</div>
        <p className="text-black text-sm font-normal font-['Poppins'] leading-none">{description}</p>
      </div>
    </div>
  );
};

export default Card1;
