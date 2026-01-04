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
import Contact from "../pages/Contact";
import BlogPage from "../pages/BlogPage";
import Statistics from "../pages/Statistics";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../layout/DashBoardLayout";
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
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/blog",
        element: <BlogPage />,
      },
      // {
      //   path: "/addExport",
      //   element: (
      //     <PrivateRoute>
      //       <AddExport />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/product-details/:id",
        element: (
          
            <ProductDetails />
        
        ),
      },

      // {
      //   path: "/myImports",
      //   element: (
      //     <PrivateRoute>
      //       <MyImports />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/myExports",
      //   element: (
      //     <PrivateRoute>
      //       <MyExports />
      //     </PrivateRoute>
      //   ),
      // },

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

    {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
           <Statistics></Statistics>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },

      /* ===== USER ===== */
      {
        path: "my-imports",
        element: <MyImports />,
      },

      /* ===== ADMIN ===== */
      {
        path: "my-exports",
        element: (
          <AdminRoute>
            <MyExports />
          </AdminRoute>
        ),
      },
      {
        path: "add-export",
        element: (
          <AdminRoute>
            <AddExport />
          </AdminRoute>
        ),
      },
    ],
  },
]);
