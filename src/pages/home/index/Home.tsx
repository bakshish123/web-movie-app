import React from 'react';
import BgImg from '../../../assets/images/Rectangle 215.png';
import Hero from '../components/Hero';
import CardSection1 from '../components/CardSetion1';
import SideNavbar from '../../../components/SideNavbar';

const Home = () => {
  

  return (
    <div className='h-[95rem] w-full bg-slate-600 z-[-1]'>
        <Hero />
        <CardSection1 />
      
    </div>
  );
};

export default Home;
