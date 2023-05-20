import React, { useState } from 'react';

const AddToy = () => {
   const [pictureUrl, setPictureUrl] = useState("");
   const [name, setName] = useState("");
   const [sellerName, setSellerName] = useState("");
   const [sellerEmail, setSellerEmail] = useState("");
   const [subCategory, setSubCategory] = useState("");
   const [price, setPrice] = useState("");
   const [rating, setRating] = useState("");
   const [quantity, setQuantity] = useState("");
   const [description, setDescription] = useState("");


   const handleSubmit = (e) => {
      e.preventDefault();
      // Perform MongoDB data call here to save the toy information
      // You can use a library like axios to make the API call
      // Example: axios.post("/toys", { pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description })
      // .then((response) => { Handle response })
      // .catch((error) => { Handle error })
   };
   return (
      <div className="container mx-auto p-4 mt-4  bg-slate-200">
         <h1 className="text-2xl font-bold mb-4 text-center">Add A Toy</h1>
         <form onSubmit={handleSubmit} className="mx-auto max-w-lg py-5">
            <div className='flex gap-2 items-center '>
               <div>
                  <label htmlFor="pictureUrl" className="block mb-2">
                     Picture URL:
                  </label>
                  <input
                     type="text"
                     id="pictureUrl"
                     value={pictureUrl}
                     onChange={(e) => setPictureUrl(e.target.value)}
                     required
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />
               </div>
               <div>
                  <label htmlFor="name" className="block mb-2">
                     Name:
                  </label>
                  <input
                     type="text"
                     id="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />
               </div>
            </div>

            <div className='flex gap-2 items-center '>
               <div>
                  <label htmlFor="sellerName" className="block mb-2">
                     Seller Name:
                  </label>
                  <input
                     type="text"
                     id="sellerName"
                     value={sellerName}
                     onChange={(e) => setSellerName(e.target.value)}
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />


               </div>
               <div>
                  <label htmlFor="sellerEmail" className="block mb-2">
                     Seller Email:
                  </label>
                  <input
                     type="email"
                     id="sellerEmail"
                     value={sellerEmail}
                     onChange={(e) => setSellerEmail(e.target.value)}
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />
               </div>


            </div>

            <div className='flex gap-2 items-center'>
               <div>
                  <label htmlFor="subCategory" className="block mb-2">
                     Sub-category:
                  </label>
                  <select
                     id="subCategory"
                     value={subCategory}
                     onChange={(e) => setSubCategory(e.target.value)}
                     required
                     className="w-full mb-4 px-4 py-2 border rounded"
                  >
                     <option value="">Select sub-category</option>
                     <option value="Math Toys">Math Toys</option>
                     <option value="Language Toys">Language Toys</option>
                     <option value="Science Toys">Science Toys</option>
                  </select>


               </div>
               <div>
                  <label htmlFor="price" className="block mb-2">
                     Price:
                  </label>
                  <input
                     type="number"
                     id="price"
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     required
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />
               </div>
            </div>

            <div className='flex gap-2 items-center '>
               <div>
                  <label htmlFor="rating" className="block mb-2">
                     Rating:
                  </label>
                  <input
                     type="number"
                     id="rating"
                     value={rating}
                     onChange={(e) => setRating(e.target.value)}
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />


               </div>
               <div>
                  <label htmlFor="quantity" className="block mb-2">
                     Available Quantity:
                  </label>
                  <input
                     type="number"
                     id="quantity"
                     value={quantity}
                     onChange={(e) => setQuantity(e.target.value)}
                     required
                     className="w-full mb-4 px-4 py-2 border rounded"
                  />
               </div>
            </div>

            <label htmlFor="description" className="block mb-2">
               Description:
            </label>
            <textarea
               id="description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               required
               className="w-full mb-4 px-4 py-2 border rounded"
            ></textarea>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
               Add Toy
            </button>
         </form>
      </div>
   );
};


export default AddToy;