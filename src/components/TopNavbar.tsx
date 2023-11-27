import React, { useState } from "react";
import search from "../assets/svg/search.svg";
import bell from "../assets/svg/bell.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../store/sideNavbarSlice";
import { RootState } from "../store/store";

const TopNavbar = () => {
  const [cross, setCross] = useState(false);
  const disp = useSelector((state: RootState) => state.sideNavbar.display);

  const dispatch = useDispatch();
  console.log(disp);

  const handleSideNavbar = () => {
    dispatch(setDisplay(!disp));
  };
  return (
    <div className="pt-6 sm:hidden md:flex md:h-[10vh] md:w-[79vw] lg:h-[10vh] lg:flex lg:w-[85vw] flex-row justify-between text-white">
      <div className="ml-5">
        <ul className="flex flex-row gap-3">
          <li>Movies</li>
          <li>Series</li>
          <li>Documentaries</li>
        </ul>
      </div>
      <div className="mr-5">
        <ul className="flex flex-row gap-3">
          <li>
            <img src={search} alt="" />
          </li>
          <li>
            <img src={bell} alt="" />
          </li>
          <li className="md:block sm:hidden">Bakshish</li>
          <li
            className="hamburger sm:block md:hidden z-50 mt-[4px]"
            onClick={handleSideNavbar}
          >
            {!disp ? <FaBars /> : <FaTimes />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
