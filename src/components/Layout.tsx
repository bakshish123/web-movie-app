import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'
import { Provider } from 'react-redux'
import store from '../store/store'

const Layout = () => {
  return (
    <div>
        <Provider store={store}>
        <TopNavbar />
        <SideNavbar />
        <Outlet />
        </Provider>
    </div>
  )
}

export default Layout