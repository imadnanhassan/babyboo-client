import React from 'react';
import Banner from '../../components/Banner/Banner';
import Brand from '../../components/Brand/Brand';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import useTitle from '../../hooks/useTitle';

const Home = () => {
   useTitle('Home')
   return (
      <div>
         <Banner></Banner>
         
         <Brand></Brand>
         <NewsLetter></NewsLetter>
      </div>
   );
};

export default Home;