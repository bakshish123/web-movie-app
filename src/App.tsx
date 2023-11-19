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
    <div className="App border-4 border-black">

      
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
