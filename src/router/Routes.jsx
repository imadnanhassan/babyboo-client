import React from 'react'; import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../components/Others/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import AllToy from '../pages/AllToy/AllToy';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AddToy from '../user/addtoy/AddToy';
import ViewDetails from '../pages/AllToy/Viewdetails';
import PrivateRoute from './PrivateRoute';
import MyToy from '../user/mytoy/MyToy';



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
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/logout',
            element: <SignUp></SignUp>
         },
         {
            path: '/addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>

         },
         {
            path: '/viewdetails/:id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://babybo-server-dev-abulhassan.vercel.app/viewdetails/${params.id}`)

         },
         {
            path: '/my-toy',
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
         }

      ]
   }
])


export default router;