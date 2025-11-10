import { Outlet } from "react-router";

  import { ToastContainer } from 'react-toastify';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar/>
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <ToastContainer />
    </div>
  );
};

export default MainLayout;