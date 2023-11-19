import React from "react";
import coffee from "../assets/svg/coffee.svg";
import film from "../assets/svg/film.svg";
import heart from "../assets/svg/heart.svg";
import trending from "../assets/svg/trending-up.svg";
import calendar from "../assets/svg/calendar.svg";
import users from "../assets/svg/users.svg";
import message from "../assets/svg/message-circle.svg";
import sliders from "../assets/svg/sliders.svg";
import logout from "../assets/svg/log-out.svg";
import { Link } from "react-router-dom"; 

const SideNavbar = () => {
  return (
    <div className='border-2 border-black h-[95rem] w-[15rem] absolute bg-stone-900'>
        <div className="left-[40px] top-[40px] absolute">
          <div className="left-[40px] top-[4px] absolute text-white text-[22px] font-bold font-['Poppins'] uppercase leading-normal tracking-wider">WATCH</div>
          <div className="w-8 h-8 left-0 top-0 absolute flex-col justify-start items-start inline-flex" ><img src={coffee} alt="" /></div>
      </div>
      <div className="w-36 h-[731.09px] left-[40px] top-[130px] absolute">
      <Link to="/">
          <div className="left-[36px] top-0 absolute text-white text-base font-bold font-['Poppins'] leading-normal">Home</div>
      </Link>
      <Link to="/favourite">
          <div className="left-[36px] top-[59px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Favourites</div>
          </Link>
          <Link to="/trending">
          <div className="left-[36px] top-[118px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Trending</div>
          </Link>
          <div className="left-[36px] top-[176px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Coming soon</div>
          <div className="left-[43px] top-[707.09px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Logout</div>
          <div className="left-[36px] top-[322px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Community</div>
          <div className="left-[36px] top-[379px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Social</div>
          <div className="left-[43px] top-[660.09px] absolute opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal">Settings</div>
          
          <div className="w-6 h-6 left-0 top-0 absolute" >
          <img src={film} alt="" />
  
          </div>
          <div className="w-6 h-6 left-0 top-[59px] absolute opacity-80" >
              <img src={heart} alt="" />
          </div>
          <div className="w-6 h-6 left-0 top-[118px] absolute opacity-80" >
              <img src={trending} alt="" />
          </div>
          <div className="w-6 h-6 left-0 top-[176px] absolute opacity-80" >
              <img src={calendar} alt="" />
          </div>
          
          <div className="w-6 h-6 left-0 top-[322px] absolute opacity-80" >
              <img src={users} alt="" />
          </div>
  
          <div className="w-6 h-6 left-0 top-[379px] absolute opacity-80" >
              <img src={message} alt="" />
          </div>
          <div className="w-6 h-6 left-[7px] top-[660px] absolute opacity-80" >
              <img src={sliders} alt="" />
          </div>
          <div className="w-6 h-6 left-[7px] top-[707px] absolute opacity-80" >
              <img src={logout} alt="" />
          </div>
      </div> 
    </div>
  )
}

export default SideNavbar