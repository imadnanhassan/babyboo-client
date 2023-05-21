import React from 'react';
import brand1 from '../../assets/img/brand/brand-1.png'
import brand2 from '../../assets/img/brand/brand-2.png'
import brand3 from '../../assets/img/brand/brand-3.png'
import brand4 from '../../assets/img/brand/brand-4.png'
import brand5 from '../../assets/img/brand/brand-5.png'

const Brand = () => {

   // w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-gray-600

   return (
      <div>
         <section className="bg-gray-100 text-gray-800">
            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
               <h2 className="text-3xl font-bold">Brands</h2>
               <div className="flex flex-wrap justify-center lg:justify-between py-5">
                  <img src={brand1} alt="" />
                  <img src={brand2} alt="" />
                  <img src={brand3} alt="" />
                  <img src={brand4} alt="" />
                  <img src={brand5} alt="" />
                 
               </div>
            </div>
         </section>
      </div>
   );
};

export default Brand;