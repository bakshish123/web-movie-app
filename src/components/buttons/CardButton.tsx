import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/favoriteSlice';
import heart1 from '../../assets/svg/heart (1).svg';
import heart2 from '../../assets/svg/heart(2).svg';

const CardButton = ({ cardId }: { cardId: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch(addToFavorites(cardId));
    } else {
      dispatch(removeFromFavorites(cardId));
    }
  };

  return (
    <div>
      {/* className='h-[20rem] mt-[1rem] ml-[12rem]' */}
      <button onClick={handleToggleFavorite}>
        <div className="w-8 h-8 p-[8.89px] bg-gradient-to-r from-white to-stone-400 rounded-lg border border-white backdrop-blur-[11.85px] justify-start items-start gap-[5.93px] inline-flex">
          <div className="w-[14.22px] h-[14.22px] relative">
            <img src={isFavorite ? heart2 : heart1} alt="Heart Icon" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardButton;
