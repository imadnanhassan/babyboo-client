import React from 'react';
import { Link } from 'react-router-dom';

const AllToyBanner = () => {
   return (
      <div className="p-6 py-12 bg-[#ff8441] font-Primary text-gray-50 text-center">
         <h2 className='text-2xl font-semibold'>All Toys</h2>
         <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between">
               <nav aria-label="breadcrumb" className="w-full p-4  text-white">
                  <ol className="flex justify-center items-center h-10 space-x-2">
                     <li className="flex items-center">
                        <Link to={'/'} title="Back to homepage" className="hover:underline">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 text-white">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                           </svg>
                        </Link>
                     </li>

                     <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current text-white">
                           <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <a className="flex cursor-default items-center px-1 capitalize hover:underline">Shop</a>
                     </li>

                  </ol>
               </nav>

            </div>
         </div>
      </div>
   );
};

export default AllToyBanner;