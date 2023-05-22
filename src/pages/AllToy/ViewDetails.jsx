import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
   const product = useLoaderData()
   const { _id, customerName, toyname, photourl, subcategory, price, quantity, rating, description } = product
   console.log(product)
   return (
      <div>
         <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
               <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                     alt="ecommerce"
                     className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                     src={photourl}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                     <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        Category: {subcategory}
                     </h2>
                     <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {toyname}
                     </h1>
                     <div className="flex mb-4">
                        <span className="flex items-center">
                           <span className="text-gray-600 ml-3"> {rating} Reviews</span>
                        </span>

                     </div>
                     <p className="leading-relaxed">
                        {description}
                     </p>

                     <div className="flex gap-7">
                        <span className="title-font mr-4 font-medium text-2xl text-gray-900">
                           Price Now: ${price}
                        </span>
                        <span className="title-font font-medium text-2xl text-gray-900">
                           quantity: {quantity}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ViewDetails;