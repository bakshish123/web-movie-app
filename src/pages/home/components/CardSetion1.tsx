import React from 'react';
import CardList1 from '../../../components/CardLists/CardList1';
import CardList2 from '../../../components/CardLists/CardList2';

const CardSection1 = () => {
  const cardStyle = {
    background: 'linear-gradient(to left, #1c1917 95%, transparent 100%)',
  };
  

  return (
    <div className='border-4 ml-[15rem] border-black h-[65rem] w-[72.3rem]' style={cardStyle}>
      <CardList1 />
      <CardList2 />
    </div>
  );
}

export default CardSection1;
