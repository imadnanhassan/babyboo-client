import React from 'react'; import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../components/Others/ErrorPage/ErrorPage';


const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <App></App>
         }
      ]
   },
]);



export default router;