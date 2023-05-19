import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
   return (
    
         <div className='py-16'>
            <div className="container mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-400 text-white">
               <h1 className="text-2xl font-bold text-center">Sign Up</h1>
               <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">

                  <div className="space-y-1 text-sm">
                     <label for="username" className="block text-white">Username</label>
                     <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-white bg-white text-gray-800 focus:border-cyan-600" />
                  </div>

                  <div className="space-y-1 text-sm">
                     <label for="password" className="block text-white">Password</label>
                     <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-white bg-white text-gray-800 focus:border-cyan-600" />
                  </div>

                  <button className="block w-full p-3 text-center rounded-sm text-white bg-[#ff8441]">Sign in</button>
               </form>

               
              
               <p className="text-xs text-center sm:px-6 text-gray-200">Don't have an account?
                  <Link to={'/login'}  className="underline ml-2 text-gray-200">Login</Link>
               </p>
            </div>
         </div>
   );
};

export default SignUp;