import React from 'react';
import Card1, { CardItem } from '../Cards/Card1'; // Import Card1 and CardItem types
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CardList1: React.FC = () => {
  const arr: CardItem[] = [
    { id: '1', url: require('../../assets/images/tokyo.png').default, title: 'Title 1', description: 'Description 1' },
    { id: '2', url: require('../../assets/images/moonfall.png').default, title: 'Title 2', description: 'Description 2' },
    { id: '3', url: require('../../assets/images/paris.png').default, title: 'Title 3', description: 'Description 3' },
    { id: '4', url: require('../../assets/images/gucci.png').default, title: 'Title 4', description: 'Description 4' },
  ];

  const favoriteIds = useSelector((state: RootState) => state.favorite.favorites);

  return (
    <div className="text-white text-xl font-semibold font-['Poppins'] p-4 ml-[1rem]">
      Trending
      <div className='border-8 border-black h-[28rem] flex flex-row justify-center'>
        {arr.map((card, index) => (
          <Card1 key={index} {...card} isFavorite={false} />
        ))}
      </div>
    </div>
  );
};

export default CardList1;
