// import React, { useState } from 'react';

import Header from "./Header";
import { FaHeadphonesAlt, FaRegCalendar } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuKanban } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex flex-1 h-screen bg-black">
      <div className="">
        <div className="flex flex-col h-screen pt-5 bg-gray-100">
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
               <nav className="space-y-2">
                <a
                  href="#"
                  title=""
                  className="flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-gray-600 rounded-lg group"
                >
                  <MdOutlineDashboardCustomize className="mr-4 text-xl mt-1 font-semibold"/>
                  Dashboard
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-gray-600 group"
                >
                  <FaRegCalendar className="mr-4 text-xl mt-1 font-semibold"/>
                  Calendar
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-gray-600 group"
                >
                  <IoMailUnreadOutline className="mr-4 text-xl mt-1 font-semibold"/>
                  Mail
                </a>

                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-gray-600 group"
                >
                  <LuKanban className="mr-4 text-xl mt-1 font-semibold"/>
                  Kanban
                </a>
                </nav> 
                <nav className="mt-80">
                  <div className="bg-gray-200 rounded-md shadow-lg m-1 p-2">
                    <p className="font-bold flex"><FaHeadphonesAlt className="mt-1 mr-2" /> Need support?</p>
                    <p>Get in  touch with our team.</p>
                    <button className="text-center items-center justify-center w-full bg-white mt-2 py-1 px-6 rounded-md">Contact us</button>

                  </div>
                
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-lg font-semibold transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-gray-600 group"
                >
                  <TbLogout className="mr-4 text-xl mt-1 font-semibold"/>
                  Log Out
                </a>
                </nav>
              </nav>

              
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 max-h-screen">
        <main>
          <div className="">
            <div className="">
              <Header/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Navbar;
