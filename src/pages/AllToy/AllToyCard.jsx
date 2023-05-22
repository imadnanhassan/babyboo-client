import React from 'react';
import { Link } from 'react-router-dom';

const AllToyCard = ({ toy }) => {
   const {_id, customerName, toyname, photourl, subcategory, price, quantity } = toy
   return (
      <>
         <tr>

            <td>
               <div className="flex items-center space-x-3">
                  <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src={photourl} alt="Avatar Tailwind CSS Component" />
                     </div>
                  </div>
                  <div>
                     <div className="font-bold">{toyname}</div>

                  </div>
               </div>
            </td>
            <td>
               {customerName}
               <br />
            </td>
            <td>
               {subcategory}
            </td>
            <td>
               {price}
            </td>
            <td>
               {quantity}
            </td>



            <th>
               <Link to={`/viewdetails/${_id}`}> <button className="btn btn-outline btn-success">Details</button></Link>
            </th>
         </tr>
      </>
   );
};

export default AllToyCard;