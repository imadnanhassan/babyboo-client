import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ allToy }) => {
   console.log(allToy)
   const { _id, customerName, toyname, photourl, subcategory, price, quantity, rating, description } = allToy
   return (
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
            <Link to={`/viewdetails/${_id}`}> <button className="btn btn-outline btn-success">View Details</button></Link>
         </th>
      </tr>
   );
};

export default ToyCard;