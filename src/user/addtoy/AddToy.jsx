import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddToy = () => {

   const { user } = useContext(AuthContext);
   const navigate = useNavigate()
   const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const toyname = form.toyname.value
      const photourl = form.photourl.value;
      const sellerName = form.sellerName.value;
      const sellerEmail = form.sellerEmail.value;
      const subcategory = form.subcategory.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const email = user?.email;
      const addToy = {
         customerName: sellerName,
         toyname,
         email,
         photourl,
         sellerEmail,
         subcategory,
         price,
         rating,
         quantity,
         description,
      };

      fetch('https://babybo-server-dev-abulhassan.vercel.app/addToy', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(addToy)

      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged) {
               navigate('/all-toy')
            }
         })

   };
   return (
      <>
         <div className='py-10 text-center'>
            <form onSubmit={handleSubmit}>
               <div className="container mx-auto bg-slate-300 px-6 shadow-xl rounded-md max-w-lg py-5 grid grid-cols-1 md:grid-cols-2 gap-6 mb-7 items-center justify-center">

                  {/* toyname */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Toy Name</span>
                     </label>
                     <input type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" />
                  </div>
                  {/* photoURl */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Picture URL</span>
                     </label>
                     <input type="text" name="photourl" placeholder="Picture URL" className="input input-bordered" />
                  </div>
                  {/* seller name */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Seller Name</span>
                     </label>
                     <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                  </div>
                  {/* seller email */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Seller Email</span>
                     </label>
                     <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                  </div>
                  {/* sub category */}
                  <select name='subcategory' className="select select-primary w-full mt3 max-w-xs">
                     <option disabled selected>Select sub-category</option>
                     <option value="mathToys">Math Toys</option>
                     <option value="languageToys">Language Toys</option>
                     <option value="scienceToys">Science Toys</option>
                  </select>
                  {/* price */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Price</span>
                     </label>
                     <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                  </div>

                  {/* rating */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Rating</span>
                     </label>
                     <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                  </div>

                  {/* quantity */}
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Available Quantity</span>
                     </label>
                     <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                  </div>

                  {/* description */}
                  <div className="form-control ">
                     <label className="label">
                        <span className="label-text">Detail Description</span>
                     </label>
                     <textarea name="description" placeholder="Detail Description" className="textarea textarea-bordered w-full "></textarea>
                  </div>
               </div>
               {/* add bnt */}
               <button type="submit" className="bg-blue-500 text-white  py-2 px-32 rounded">
                  Add Toy
               </button>
            </form>
         </div>

      </>
   );
};


export default AddToy;