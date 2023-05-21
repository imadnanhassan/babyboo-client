import React from 'react';

const Blog = () => {
   return (
      <div className='container mx-auto max-w-2xl py-20'>
         <h2 className='text-center py-4 mb-3'>Blog Section</h2>

         <div tabIndex={0} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content">
               <p>Access tokens and refresh tokens are used in authentication systems. An access token is a short-lived credential that verifies a user's identity and grants access to protected resources. It contains user information and permissions. On the other hand, a refresh token is a long-lived credential used to obtain a new access token when it expires, without requiring user credentials. Access tokens are typically stored in memory or short-lived storage like session or local storage, while refresh tokens should be stored securely, such as in an HTTP-only secure cookie or a secure storage mechanism. Following security best practices is crucial to protect tokens from unauthorized access and ensure secure authentication and authorization processes.</p>
            </div>
         </div>

         <div tabIndex={1} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Focus me to see content
            </div>
            <div className="collapse-content">
               <p>tabIndex={1} attribute is necessary to make the div focusable</p>
            </div>
         </div>

         <div tabIndex={2} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Focus me to see content
            </div>
            <div className="collapse-content">
               <p>tabIndex={2} attribute is necessary to make the div focusable</p>
            </div>
         </div>

         <div tabIndex={4} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Focus me to see content
            </div>
            <div className="collapse-content">
               <p>tabIndex={4} attribute is necessary to make the div focusable</p>
            </div>
         </div>

      </div>
   );
};

export default Blog;