import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";
import { Provider } from "react-redux";
import store from "../store/store";
import MobileSideNavbar from "./MobileSideNavbar";

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <div className="flex flex-row">
          <SideNavbar />
          <MobileSideNavbar />
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};

export default Layout;
