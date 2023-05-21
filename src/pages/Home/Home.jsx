import React from 'react';
import Gallery from '../../components/Others/Gallery/Gallery';
import Banner from '../../components/Banner/Banner';
import Brand from '../../components/Brand/Brand';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Gallery></Gallery>
         <Brand></Brand>
         <NewsLetter></NewsLetter>
      </div>
   );
};

export default Home;