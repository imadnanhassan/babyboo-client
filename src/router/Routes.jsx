import React from 'react'; import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../components/Others/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import AllToy from '../pages/AllToy/AllToy';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';



const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/all-toy',
            element: <AllToy></AllToy>
         },
         {
            path:'/blog',
            element:<Blog></Blog>
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/logout',
            element: <SignUp></SignUp>
         }

      ]
   }
])


export default router;