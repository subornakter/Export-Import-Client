import { useState } from "react";
import { NavLink, Outlet, useNavigate, Link } from "react-router";
import useRole from "../hooks/useRole";
import { FaHome, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6"; 
import { IoLogOut } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loading";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  const { role, roleLoading } = useRole();
  const { user, signOutUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  if (roleLoading) {
    return <Loader />;
  }

  const dashboardTitle = role === "admin" ? "Admin Dashboard" : "User Dashboard";

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
      isActive ? "bg-linear-to-r from-pink-500 to-red-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  const SidebarContent = (
    <nav className="flex  flex-col gap-2 mt-4">
      {role === "user" && (
        <>
          <NavLink to="/dashboard/profile" className={menuClass}>
            <FaUser /> My Profile
          </NavLink>
          <NavLink to="/dashboard/my-imports" className={menuClass}>
            <FaHome /> My Imports
          </NavLink>
        </>
      )}

      {role === "admin" && (
        <>
          <NavLink to="/dashboard/profile" className={menuClass}>
            <FaUser /> Admin Profile
          </NavLink>
          <NavLink to="/dashboard/my-exports" className={menuClass}>
            <FaHome /> My Exports
          </NavLink>
          <NavLink to="/dashboard/add-export" className={menuClass}>
            <FaGear /> Add Export
          </NavLink>
        </>
      )}
    </nav>
  );

  /* ===== Dashboard Top Navbar ===== */
  const DashboardNavbar = () => (
    <header className="flex justify-between items-center px-6 py-3 border-b border-gray-200 sticky top-0 z-50 bg-base-100">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.ibb.co.com/RTQjFFbp/e26-removebg-preview.png"
          alt="Logo"
          className="h-10 w-12 object-contain"
        />
        <span className="text-lg font-bold">Alpha Global Trade</span>
      </div>

      {/* Right: Home + Profile + Logout */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-200 transition"
        >
          <FaHome /> Home
        </button>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 border-2 border-gray-400 rounded-full">
                <img
                  alt={user.displayName ?? "User"}
                  src={user.photoURL ?? "https://via.placeholder.com/40"}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className="pb-3 border-b border-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-2">
                <Link to="/dashboard/profile" className="flex items-center gap-2">
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="flex items-center gap-2">
                  <FaGear /> Settings
                </Link>
              </li>
            </ul>
          </div>
        )}

        {user && (
          <button
            onClick={signOutUser}
            className="btn btn-primary btn-sm text-white px-3 py-1 rounded-md font-semibold flex items-center gap-1 hover:bg-[#0d809a]"
          >
            <IoLogOut /> Logout
          </button>
        )}
      </div>
    </header>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar />

      <div className="flex flex-1">
        {/* ===== Desktop Sidebar ===== */}
        <aside className="hidden bg-pink-50 w-64 p-5  shadow-lg md:block">
          <div className="flex items-center gap-2 mb-4">
            <NavLink to="/dashboard" className="text-gray-700">
              <FaHome size={22} />
            </NavLink>
            <h2 className="text-xl font-bold text-gray-700">{dashboardTitle}</h2>
          </div>

          <hr className="mb-4" />
          {SidebarContent}
        </aside>

        {/* ===== Mobile Sidebar ===== */}
        <div className="md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 m-2 text-white bg-gray-700 rounded-md"
          >
            ☰
          </button>

          <AnimatePresence>
            {sidebarOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black bg-opacity-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSidebarOpen(false)}
                />

                <motion.aside
                  className="fixed top-0 left-0 z-50 w-64 h-full p-5 bg-base-100 shadow-lg"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                >
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="absolute top-4 right-4"
                  >
                    ✕
                  </button>

                  <div className="flex items-center gap-2 mb-6">
                    <FaHome />
                    <h2 className="font-bold text-gray-700">{dashboardTitle}</h2>
                  </div>

                  {SidebarContent}
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* ===== Main Content ===== */}
        <main className="flex-1 p-6 bg-base-100">
          <Outlet />
       
        </main>
      </div>
      <Footer />
    </div>
  );
}

