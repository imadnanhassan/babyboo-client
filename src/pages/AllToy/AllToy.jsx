import React, { useEffect, useState } from 'react';
import AllToyBanner from './AllToyBanner';
import useTitle from '../../hooks/useTitle';
import AllToyCard from './AllToyCard';

const AllToy = () => {
   useTitle('Alloy')
   const [allToy, setAllToy] = useState([])
   useEffect(() => {
      fetch('https://babybo-server-dev-abulhassan.vercel.app/allToy')
         .then(res => res.json())
         .then(data => setAllToy(data))
   }, [])
   return (
      <div>
         <AllToyBanner></AllToyBanner>
         <div>
            <div className="container mx-auto py-5 overflow-x-auto w-full">
               <table className="table w-full">
                  <thead>
                     <tr>
                        <th>Toy name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        allToy.map(toy =>
                           <AllToyCard key={toy._id}
                              toy={toy}></AllToyCard>
                        )
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AllToy;