import React from "react";
import WatchNow from "../../../components/buttons/WatchNow";
import BgImg from "../../../assets/images/background_image.jpg";
import Heart from "../../../components/buttons/Heart";
import CardButton from "../../../components/buttons/CardButton";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    border: "", // Border styling

    // Add other background-related styles if needed
  };
  return (
    <div
      className="sm:w-[100vw] sm:h-[40vh] md:w-[79vw] md:h-[40vh] lg:h-[40vh] lg:w-[85vw]"
      style={backgroundImageStyle}
    >
      <div className="sm:text-3xl absolute ml-[3vw] mt-[15vh] text-white text-5xl font-semibold font-['Poppins'] leading-[48px]">
        Insider
      </div>
      <div className="absolute ml-[3vw] mt-[23vh] text-white text-sm font-normal font-['Poppins'] leading-tight">
        2022 | Comedy horror | 1 Season
      </div>
      <div className="ml-[3vw] mt-[30vh] absolute">
        <WatchNow />
      </div>
      <div className="md:ml-[20vw] lg:ml-[15vw] mt-[30vh] sm:ml-[40vw] absolute">
        <CardButton cardId="" isBig={true} />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div style={backgroundImageStyle}></div>  */
}

//      <div className="p-[15px] left-[461px] top-[348px] absolute bg-gradient-to-r from-white to-white rounded-[14px] border border-white backdrop-blur-[20px] justify-start items-start gap-2.5 inline-flex">
// <div className="w-6 h-6 relative" />
// </div>
// <div className="left-[306px] top-[292px] absolute text-white text-sm font-normal font-['Poppins'] leading-tight">2022 | Comedy horror | 1 Season</div>
// <div className="px-6 py-[17px] left-[306px] top-[348px] absolute bg-violet-800 rounded-[14px] justify-start items-start gap-3 inline-flex">
// <div className="text-white text-base font-medium font-['Poppins'] leading-tight">Watch now</div>
// </div>
// <div className="left-[306px] top-[224px] absolute text-white text-5xl font-semibold font-['Poppins'] leading-[48px]">Insider</div>
