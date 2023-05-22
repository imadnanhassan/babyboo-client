import React, { useContext, useState } from 'react';
import MyToyBanner from './MyToyBanner';
import { AuthContext } from '../../providers/AuthProvider';
import ToyCard from './ToyCard';

const MyToy = () => {
   const [myToys, setMyToys] = useState([])
   const { user } = useContext(AuthContext)
   fetch(`https://babybo-server-dev-abulhassan.vercel.app/myToy/${user.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
      .catch(error => console.error(error.message));
   console.log(user.email)
   return (
      <div>
         <MyToyBanner></MyToyBanner>

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
                     {myToys.length > 0 &&
                        myToys.map(allToy => <ToyCard
                           key={allToy._id}
                           allToy={allToy}
                        ></ToyCard>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyToy;