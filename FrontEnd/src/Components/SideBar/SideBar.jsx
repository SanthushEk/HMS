import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing React icons
import {
  FaUserInjured,
  FaUserMd,
  FaStethoscope,
  FaFlask,
} from "react-icons/fa"; // New icons for Patients, Doctors, etc.
import {
  FaCog,
  FaUserAlt,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa"; // Icons for Settings, Profile, Logout, Dashboard

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen bg-[#131112] sm:translate-x-0 transition-transform duration-300 ease-in-out`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col font-roboto">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaTachometerAlt className="w-6 h-6 text-gray-500 dark:text-gray-400 mr-2" /> {/* Dashboard icon */}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white sm:hidden"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-300 dark:border-gray-700 mb-4" />

          {/* Navigation Links */}
          <ul className="space-y-2 font-medium flex flex-col items-start">
            {/* Patients */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#04B16F] hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserInjured className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#04B16F]" />
                <span className="ms-3">Patients</span>
              </a>
            </li>
            {/* Doctors */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#04B16F] hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaUserMd className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#04B16F]" />
                <span className="ms-3">Doctors</span>
              </a>
            </li>
            {/* Medical Officers */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#04B16F] hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaStethoscope className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#04B16F]" />
                <span className="ms-3">Medical Officers</span>
              </a>
            </li>
            {/* Lab Reports */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:text-[#04B16F] hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaFlask className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#04B16F]" />
                <span className="ms-3">Lab Reports</span>
              </a>
            </li>
          </ul>

          {/* Bottom Section */}
          <div className="mt-auto flex justify-center space-x-4 border-t border-gray-300 dark:border-gray-700 pt-4 mx-4">
            <a
              href="#"
              className="flex items-center text-gray-900 dark:text-white hover:text-[#04B16F]"
            >
              <FaCog className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900 dark:text-white hover:text-[#04B16F]"
            >
              <FaUserAlt className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900 dark:text-white hover:text-[#04B16F]"
            >
              <FaSignOutAlt className="w-5 h-5" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-4 sm:ml-64">
        <button
          onClick={toggleSidebar}
          className="inline-flex items-center p-2 mt-2 sm:hidden text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <FiMenu className="w-6 h-6" /> {/* Using the Menu icon here */}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
