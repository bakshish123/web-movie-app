import React from 'react';
import Home from './pages/home/index/Home';
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import { Link,Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Trending from './pages/trending/index/Trending';
import Favourite from './pages/favourites/index/Favourite';
import Layout from './components/Layout';

function App() {
  return (
    <div className="bg-black sm:w-[100vw] md:w-[100vw] lg:w-[100vw] m-0 p-0 ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="trending" element={<Trending />} />
        </Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
