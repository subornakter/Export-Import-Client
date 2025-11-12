import { Link } from "react-router";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ClockLoader } from "react-spinners";
import MyLink from "./MyLink";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser, FaGear } from "react-icons/fa6";
import { IoLogOut, IoLogIn } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="bg-base-100 flex justify-between items-center py-2 px-4 border-b border-slate-300 sticky top-0 z-50">

      {/* === Left: Hamburger + Company Name + Logo === */}
      <div className="flex items-center gap-3">
        {/* Hamburger (only mobile) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Logo + Company Name */}
        <div className="flex items-center gap-2">
          {/* Logo hidden on mobile */}
          <img
            className="hidden md:block h-10 w-10 object-contain"
            src="https://i.ibb.co.com/RTQjFFbp/e26-removebg-preview.png"
            alt="Logo"
          />
          <span className="text-lg md:text-2xl font-bold whitespace-nowrap">
            Alpha Global Trade
          </span>
        </div>
      </div>

      {/* === Middle: Desktop Menu === */}
      <ul className="hidden md:flex items-center gap-6">
        <li><MyLink to="/">Home</MyLink></li>
        <li><MyLink to="/allProducts">AllProducts</MyLink></li>
        <li><MyLink to="/myImports">MyImports</MyLink></li>
        <li><MyLink to="/myExports">MyExports</MyLink></li>
        <li><MyLink to="/addExport">AddExport</MyLink></li>
      </ul>

      {/* === Right: Profile / Auth === */}
      <div className="flex items-center gap-2 md:gap-3">

        {/* Dark mode toggle (desktop only) */}
        <div className="hidden md:block">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle toggle-sm"
          />
        </div>

        {loading ? (
          <ClockLoader color="#e74c3c" size={25} />
        ) : user ? (
          <>
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-9 border-2 border-[#1096B5] rounded-full">
                  <img
                    alt={user?.displayName ?? "User"}
                    src={user?.photoURL ?? "https://via.placeholder.com/40"}
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
                  <Link to="/profile" className="flex items-center gap-2">
                    <FaUser /> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="flex items-center gap-2">
                    <FaGear /> Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logout Button */}
            <button
              onClick={signOutUser}
              className="btn btn-primary btn-sm text-xs md:text-sm text-white px-2 md:px-3 py-1 md:py-2 rounded-md font-semibold hover:bg-[#0d809a] flex items-center gap-1"
            >
              <IoLogOut /> Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary btn-sm text-xs md:text-sm text-white px-3 py-1 rounded-md font-semibold hover:bg-[#0d809a] flex items-center gap-1"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>

      {/* === Mobile Sidebar === */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 border-r border-slate-300 transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-slate-300">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-3 p-5 text-[15px]">
          <li onClick={() => setMenuOpen(false)}><MyLink to="/">Home</MyLink></li>
          <li onClick={() => setMenuOpen(false)}><MyLink to="/allProducts">AllProducts</MyLink></li>
          <li onClick={() => setMenuOpen(false)}><MyLink to="/myImports">MyImports</MyLink></li>
          <li onClick={() => setMenuOpen(false)}><MyLink to="/myExports">MyExports</MyLink></li>
          <li onClick={() => setMenuOpen(false)}><MyLink to="/addExport">AddExport</MyLink></li>
        </ul>

        {/* Dark Mode toggle inside mobile menu */}
        <div className="flex items-center justify-between px-5 mt-3 border-t border-slate-300 pt-3">
          <span className="font-medium text-sm">Dark Mode</span>
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle toggle-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
