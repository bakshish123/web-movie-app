import React from 'react'
import BgImg from '../../../assets/images/background image.jpg'
import WatchNow from '../../../components/buttons/WatchNow';
import Heart from '../../../components/buttons/Heart';

const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${BgImg})`,
        backgroundSize: 'cover',  // Adjust as needed
        backgroundPosition: 'center',  // Adjust as needed
        height: '25rem',  // Adjust as needed
        width: '72rem',  // Adjust as needed
        border: '4px solid black',  // Border styling
        // Add other background-related styles if needed
      };
  return (
    <div className='border-4 ml-[15rem] border-black h-[30rem] w-[72rem]'>
        <div className="absolute ml-[3rem] mt-[15rem] text-white text-5xl font-semibold font-['Poppins'] leading-[48px]">Insider</div>
        <div className="absolute ml-[3rem] mt-[19rem] text-white text-sm font-normal font-['Poppins'] leading-tight">2022 | Comedy horror | 1 Season</div>
        <div className='h-[60px] w-[150px] ml-[3rem] mt-[23rem] absolute'>
        <WatchNow />
        </div>
        <div className='h-[60px] w-[150px] ml-[13rem] mt-[23rem] absolute'>
        <Heart />
        </div>
        </div> 
  )
}

export default Hero


{/* <div style={backgroundImageStyle}></div> */}
        {/* <div className="p-[15px] left-[461px] top-[348px] absolute bg-gradient-to-r from-white to-white rounded-[14px] border border-white backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
<div className="w-6 h-6 relative" />
</div>
<div className="left-[306px] top-[292px] absolute text-white text-sm font-normal font-['Poppins'] leading-tight">2022 | Comedy horror | 1 Season</div>
<div className="px-6 py-[17px] left-[306px] top-[348px] absolute bg-violet-800 rounded-[14px] justify-start items-start gap-3 inline-flex">
<div className="text-white text-base font-medium font-['Poppins'] leading-tight">Watch now</div>
</div>
<div className="left-[306px] top-[224px] absolute text-white text-5xl font-semibold font-['Poppins'] leading-[48px]">Insider</div>
       */} 