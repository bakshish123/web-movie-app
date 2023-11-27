import React from "react";
import BgImg from "../../../assets/images/background_image.jpg";
import Hero from "../components/Hero";
import CardSection1 from "../components/CardSetion1";
import SideNavbar from "../../../components/SideNavbar";
import TopNavbar from "../../../components/TopNavbar";
import MobileTopNavbar from "../../../components/MobileTopNavbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-purple-900 sm:w-[100vw] md:w-[75vw] lg:w-[85vw]">
      <TopNavbar />
      <MobileTopNavbar />
      <Hero />
      <CardSection1 />
    </div>
  );
};

export default Home;
