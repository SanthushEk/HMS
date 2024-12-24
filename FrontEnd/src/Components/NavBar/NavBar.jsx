import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { FiUser } from "react-icons/fi"; // User, Notification, and Search Icons

const NavBar = () => {
  return (
    <nav className="relative px-4 py-3 flex items-center justify-between font-roboto">
      {/* Search Bar (Visible on medium screens and above) */}
      <div className="relative w-1/3 hidden sm:block">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#04B16F]">
          <FaSearch className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Search Anything"
          className="pl-10 px-4 py-2 text-sm bg-gray-100 rounded-md w-full focus:outline-none focus:ring-0 focus:border-none"
        />
      </div>

      {/* Right Section (Notification and User Icons) */}
      <div className="absolute top-0 right-0 flex items-center space-x-3 sm:mt-3 mt-6 mr-4 ">
        {/* Notification Icon */}
        <button
          aria-label="Notifications"
          className="text-gray-500 hover:text-[#04B16F] focus:outline-none"
        >
          <FiBell className="w-6 h-6" />
        </button>

        {/* User Icon */}
        <button
          aria-label="User Profile"
          className="text-gray-500 hover:text-[#04B16F] focus:outline-none"
        >
          <FiUser className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
