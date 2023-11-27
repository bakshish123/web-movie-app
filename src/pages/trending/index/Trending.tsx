import React from "react";
import BgImg from "../../../assets/images/Rectangle 215.png";
import Hero from "../components/Hero";
import CardSection1 from "../components/CardSection1";
import SideNavbar from "../../../components/SideNavbar";
import TopNavbar from "../../../components/TopNavbar";
import MobileTopNavbar from "../../../components/MobileTopNavbar";

const Favourite = () => {
  return (
    <div className="sm:h-[190vh] md:w-[75vw] lg:w-[85vw] bg-gradient-to-b from-black to-purple-900">
      <TopNavbar />
      <MobileTopNavbar />
      <CardSection1 />
    </div>
  );
};

export default Favourite;
