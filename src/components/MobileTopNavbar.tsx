import React, { useState } from "react";
import search from "../assets/svg/search.svg";
import bell from "../assets/svg/bell.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../store/sideNavbarSlice";
import { RootState } from "../store/store";
import coffee from "../assets/svg/coffee.svg";

const MobileTopNavbar = () => {
  const [cross, setCross] = useState(false);
  const disp = useSelector((state: RootState) => state.sideNavbar.display);

  const dispatch = useDispatch();
  console.log(disp);

  const handleSideNavbar = () => {
    dispatch(setDisplay(!disp));
  };
  return (
    <div className="pt-6 h-[5rem] sm:flex sm:w-[100vw] sm:h-[10vh] md:hidden lg:hidden flex-row justify-between text-white">
      <div className="mr-5 w-[100vw]">
        <ul className="flex flex-row gap-3 justify-between">
          <div className="flex flex-row gap-5 ml-[3vw]">
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={bell} alt="" />
            </li>
          </div>
          <div className="flex flex-row gap-2">
            <img src={coffee} alt="" className="h-[3vh]" />
            <h2 className="opacity-80 text-white text-base font-normal font-['Poppins'] leading-normal mt-[1vh]">
              WATCH
            </h2>
          </div>
          <div className="z-50">
            <li
              className="hamburger ml-[5vw] sm:block md:hidden z-50 mt-[4px]"
              onClick={handleSideNavbar}
            >
              {!disp ? <FaBars /> : <FaTimes />}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileTopNavbar;
