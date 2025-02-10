import React from "react";
import { FiSearch, FiMoon, FiBell } from "react-icons/fi"; // Importing icons
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";

import "../assets/styles/topbar.css";



const Topbar = ({sidebarState}) => {
  const [isSidebarOpen, setIsSidebarOpen] = sidebarState;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return(

    <div className="flex justify-between items-center p-4 bg-white shadow-md top-0 z-10 gap-2">
    <div className={`lg:hidden cursor-pointer z-30`} onClick={toggleSidebar}>
      <TbLayoutSidebarRightExpandFilled size={30} />
    </div>
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search task..."
        className="search w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-100 focus:outline-none"
        />
    </div>

    <div className="flex items-center gap-2 md:gap-4 text-gray-600 text-xl">
      {" "}
      {/* Styling for icons */}
      <button>
        <FiMoon className="hover:text-black transition duration-200" />{" "}
        {/* Moon Icon */}
      </button>
      <button>
        <FiBell className="hover:text-black transition duration-200" />{" "}
        {/* Bell Icon */}
      </button>
      {/* <img src="" alt="Profile" className="w-10 h-10 rounded-full" /> */}
    </div>
  </div>
      )
};

export default Topbar;
