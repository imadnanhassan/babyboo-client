import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

   const { createUser } = useContext(AuthContext);

   const handleSignUp = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.photoURL
      const password = form.password.value;
      console.log(name, email, photo, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))

   }
   return (

      <div className='py-16'>
         <div className="container mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-400 text-white">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} className="space-y-6 ng-untouched ng-pristine ng-valid">

               <div className="space-y-1 text-sm">
                  <label for="name" className="block text-white">Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-white bg-white text-gray-800 focus:border-cyan-600" />
               </div>

               <div className="space-y-1 text-sm">
                  <label for="email" className="block text-white">Email</label>
                  <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-white bg-white text-gray-800 focus:border-cyan-600" />
               </div>

               <div className="space-y-1 text-sm">
                  <label for="password" className="block text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-white bg-white text-gray-800 focus:border-cyan-600" />
               </div>

               <div className="space-y-1 text-sm">
                  <label for="text" className="block text-white">Photo URL</label>
                  <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-white bg-white text-gray-800 focus:border-cyan-600" />
               </div>

               <button className="block w-full p-3 text-center rounded-sm text-white bg-[#ff8441]">Sign in</button>
            </form>



            <p className="text-xs text-center sm:px-6 text-gray-200">Don't have an account?
               <Link to={'/login'} className="underline ml-2 text-gray-200">Login</Link>
            </p>
         </div>
      </div>
   );
};

export default SignUp;