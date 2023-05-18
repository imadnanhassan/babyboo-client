import React from 'react';
import App from '../App';
import Header from '../shred/Header/Header';
import Footer from '../shred/Footer/Footer';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;