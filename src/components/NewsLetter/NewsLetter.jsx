import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
   return (
      <div className=''>
         <div className='bg-orange-400 py-8'>
            <section className=" dark:text-gray-100 ">
               <div className="container  p-6 mx-auto  ">
                  <div className="flex flex-col justify-center items-center  text-center rounded-sm ">
                     <div className="mb-7 ">
                        <h1 className="text-5xl  text-white animate-fade-in-down font-Primary">Subscribe to our Newsletter
                        </h1>
                        <p className="text-lg mt-4 text-white animate-fade-in-up font-Secondary ">Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed erosat orci congue vestibulum. <br /> Learn how to make your favorite restaurant’s dishes </p>
                     </div>
                     <div>
                        <main className="flex  w-full items-center justify-center bg-gray-100">
                           <Link to={`https://www.facebook.com/iamadnanhassan`} className="group relative h-12 w-48 overflow-hidden  bg-green-400 text-white text-lg shadow">
                              <div className="absolute inset-0 w-3 bg-white text-green-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                              <span className="relative text-whiteb uppercase text-lg font-semibold font-Secondary group-hover:text-green-500">subscirb!</span>
                           </Link>
                        </main>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default NewsLetter;