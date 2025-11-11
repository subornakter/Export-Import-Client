import { Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ClockLoader } from "react-spinners";
import { useEffect } from "react";
import MyLink from "./MyLink";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser, FaGear } from "react-icons/fa6";
import { IoLogOut, IoLogIn } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }

  return (
    <div className="bg-base-100 flex justify-between items-center py-2 px-5 border-b border-b-slate-300 sticky top-0 z-50">

      {/* Logo + Mobile Menu Button */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Logo */}
        <div className="flex gap-1 items-center">
          <img
            className="h-12 w-15"
            src="https://i.ibb.co.com/RTQjFFbp/e26-removebg-preview.png"
            alt="Logo"
          />
          <span className="text-2xl font-bold">Alpha Global Trade</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li><MyLink to="/">Home</MyLink></li>
        <li><MyLink to="/allProducts">AllProducts</MyLink></li>
        <li><MyLink to="/myImports">MyImports</MyLink></li>
        <li><MyLink to="/MyExports">MyExports</MyLink></li>
        <li><MyLink to="/addExport">AddExport</MyLink></li>
      </ul>

      {/* Right Side: Profile Dropdown + Logout */}
      <div className="flex items-center gap-3">
        <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
        {loading ? (
          <ClockLoader color="#e74c3c" size={30} />
        ) : user ? (
          <>
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 border-2 border-[#1096B5] rounded-full">
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
                <div className="pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="mt-2">
                  <Link to="/profile" className="flex items-center gap-2">
                    <FaUser /> Profile
                  </Link>
                </li>
                {/* <li>
                  <Link to="/store" className="flex items-center gap-2">
                    My Imports
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="flex items-center gap-2">
                    Add Exports
                  </Link>
                </li> */}
                <li>
                  <Link to="/settings" className="flex items-center gap-2">
                    <FaGear /> Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logout Button outside dropdown */}
            <button
              onClick={signOutUser}
              className="btn-primary text-white px-3 py-2 rounded-md font-semibold hover:bg-[#0d809a] flex items-center gap-1"
            >
              <IoLogOut /> Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0d809a] flex items-center gap-1"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#bdeef8] mt-2 border-t border-t-slate-300 py-4 px-5 space-y-3">
          <ul className="flex flex-col gap-3">
            <li onClick={() => setMenuOpen(false)}><MyLink to="/">Home</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/allProducts">AllProducts</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/myImports">MyImports</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/myExports">MyExports</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/addExport">AddExport</MyLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
