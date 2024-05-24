// import React, { useState } from 'react';

import Header from "./Header";
import { FaHeadphonesAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-1 bg-white">
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-gray-100">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="w-auto h-8"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col flex-1 px-3 mt-6">
            <div className="space">
              <nav className="flex-1">
                <a
                  href="#"
                  title=""
                  className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-indigo-600 rounded-lg group"
                >
                  
                  Dashboard
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  
                  Calendar
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  
                  Mail
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  
                  Kanban
                </a>

                <nav className="mt-80">
                  <div className="bg-gray-200 rounded-md shadow-lg m-1 p-2">
                    <p className="font-bold flex"><FaHeadphonesAlt className="mt-1 mr-2" /> Need support?</p>
                    <p>Get in  touch with our team.</p>
                    <button className="text-center items-center justify-center w-full bg-white mt-2 py-1 px-6 rounded-md">Contact us</button>

                  </div>
                <a
                  href="#"
                  className=" flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Log Out
                </a>
                </nav>
              </nav>

              <nav className="space-y-2 mt-64">
                
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <main>
          <div className="py-6">
            <div className="px-4  max-w-7xl sm:px-6 md:px-8">
              <Header/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Navbar;
