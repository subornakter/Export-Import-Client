import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/profile";
import AddExport from "../pages/AddExport";
import ProductDetails from "../pages/ProductDetails";
import MyImports from "../pages/MyImports";
import MyExports from "../pages/MyExports";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
           loader: () => fetch('http://localhost:5000/latestProducts'),
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
       loader: () => fetch('http://localhost:5000/allProducts'),
      },
      {
        path: "/profile",
        element: 
         
            <Profile/>
          
        ,
      },
      {
        path: "/addExport",
        element: 
         
         (
          <PrivateRoute>
            <AddExport />
          </PrivateRoute>
        ),
          
        
      },
      {
        path: "/product-details/:id",
        element: (
            <PrivateRoute>
            <ProductDetails/>
            </PrivateRoute>
 
       
        ),
      },

       {
        path: "/myImports",
        element: (
          <PrivateRoute>
            <MyImports/>
          </PrivateRoute>
            
        ),
      },

       {
        path: "/myExports",
        element: (
          
          <PrivateRoute>
            <MyExports/>
          </PrivateRoute>
         
        ),
      },

    //     {
    //     path: "/update-product/:id",
    //     element: (
    //       <PrivateRoute>
    //         <UpdateProduct />
    //       </PrivateRoute>
    //     ),
          
    //   },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);