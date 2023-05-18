import React from 'react';
import App from '../App';
import Header from '../shred/Header/Header';
import Footer from '../shred/Footer/Footer';
import Home from '../pages/Home/Home';

const MainLayout = () => {
   return (
      <div>
         <Header></Header>
         <Home></Home>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;