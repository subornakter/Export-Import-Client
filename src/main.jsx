import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthProvider.jsx'
import { router } from './Router/Routes.jsx'
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
  <AuthProvider>
       <RouterProvider router={router}/>
  </AuthProvider>
  </QueryClientProvider>
     <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
  </StrictMode>,
)
