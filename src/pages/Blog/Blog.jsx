import React from 'react';
import BlogBanner from './BlogBanner';

const Blog = () => {
   return (
      <>
      <BlogBanner></BlogBanner>
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
               Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
               <p>SQL databases are relational, structured, and use a fixed schema. They provide ACID transactions and are ideal for complex queries and relationships. NoSQL databases are non-relational, flexible, and schema-less. They offer high scalability, eventual consistency, and are suitable for large-scale distributed systems and unstructured data.</p>
            </div>
         </div>

         <div tabIndex={2} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               What is MongoDB aggregate and how does it work?
            </div>
            <div className="collapse-content">
               <p>In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on collections. It allows you to perform complex operations like filtering, grouping, sorting, and aggregating data using a pipeline of stages. Each stage transforms the documents in the pipeline to produce the desired result.</p>
            </div>
         </div>

         <div tabIndex={4} className="my-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               What is express js? What is Nest JS?
            </div>
            <div className="collapse-content">
               <p>Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web applications and APIs. Express.js allows developers to handle HTTP requests, define routes, handle middleware, and manage responses efficiently. It is known for its flexibility and extensive ecosystem of middleware and plugins.
                  <br /> <br />
                  Nest.js, on the other hand, is a progressive, extensible, and opinionated framework for building scalable and efficient server-side applications. It is built on top of Express.js and utilizes TypeScript for building robust and maintainable applications. Nest.js follows the modular architecture pattern and provides features like dependency injection, decorators, and powerful CLI tools to streamline development. It is often used for building enterprise-grade applications and microservices.</p>
            </div>
         </div>

      </div>
      </>
   );
};

export default Blog;