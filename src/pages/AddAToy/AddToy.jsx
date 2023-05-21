import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {


   // const { user } = useContext(AuthContext);
   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    const form = e.target;
   //    const toyname = form.name.toyname;
   //    const sellerName = form.name.sellerName;
   //    const email = user?.email;
   //    const category = form.name.category;
   //    const price = form.name.price;
   //    const rating = form.name.rating;
   //    const number = form.name.number;
   //    const description = form.name.description


   //    const addToy = {
   //       sellerName: sellerName,
   //       email,
   //       toyname,
   //       category,
   //       price,
   //       rating,
   //       number,
   //       description
   //    }
   //    console.log(addToy);

   // const service = useLoaderData();
   // const { title, _id, price, img } = service;
   const { user } = useContext(AuthContext);

   const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const pictureUrl = form.pictureUrl.value;
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
         email,
         pictureUrl,
         sellerEmail,
         subcategory,
         price,
         rating,
         quantity,
         description,
      };

      console.log(addToy);

      // fetch('http://localhost:5000/bookings', {
      //    method: 'POST',
      //    headers: {
      //       'content-type': 'application/json'
      //    },
      //    body: JSON.stringify(booking)
      // })
      //    .then(res => res.json())
      //    .then(data => {
      //       console.log(data);
      //       if (data.insertedId) {
      //          alert('service book successfully')
      //       }
      //    })


   };
   return (

      <>

         <form onSubmit={handleSubmit}>
            <div className="container mx-auto max-w-lg py-5 grid grid-cols-1 md:grid-cols-2 gap-6">


               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Picture URL</span>
                  </label>
                  <input type="text" name="pictureUrl" placeholder="Picture URL" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Seller Email</span>
                  </label>
                  <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Sub-category</span>
                  </label>
                  <input type="text" name="subcategory" placeholder="Sub-category" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price" placeholder="Price" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Available Quantity</span>
                  </label>
                  <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Detail Description</span>
                  </label>
                  <textarea name="description" placeholder="Detail Description" className="textarea textarea-bordered"></textarea>
               </div>

               <button type="submit" className="bg-blue-500 text-white  py-2 px-4 rounded">
                  Add Toy
               </button>
            </div>

         </form>
         <div className="card-body">

         </div>
      </>
   );
};


export default AddToy;