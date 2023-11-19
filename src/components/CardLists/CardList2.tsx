import React from 'react';
import Card2, { CardItem } from '../Cards/Card2'; // Import Card2 and CardItem types

const CardList2: React.FC = () => {
  const arr: CardItem[] = [
    { url: require('../../assets/images/tokyo.png').default, title: 'Title 1', description: 'Description 1' },
    { url: require('../../assets/images/moonfall.png').default, title: 'Title 2', description: 'Description 2' },
    { url: require('../../assets/images/paris.png').default, title: 'Title 3', description: 'Description 3' }
  ];

  return (
    <div className="text-white text-xl font-semibold font-['Poppins'] p-4 ml-[1rem]">
        Continue Watching
    <div className='border-8 border-black h-[28rem] flex flex-row justify-center'>
      {arr.map((card, index) => (
        <Card2 key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default CardList2;
