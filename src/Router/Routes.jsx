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
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://import-export-server-lac.vercel.app/latestProducts"),
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
        loader: () =>
          fetch("https://import-export-server-lac.vercel.app/allProducts"),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/addExport",
        element: (
          <PrivateRoute>
            <AddExport />
          </PrivateRoute>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/myImports",
        element: (
          <PrivateRoute>
            <MyImports />
          </PrivateRoute>
        ),
      },

      {
        path: "/myExports",
        element: (
          <PrivateRoute>
            <MyExports />
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
