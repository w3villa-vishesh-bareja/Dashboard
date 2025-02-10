import Sidebar from "./SideBar.jsx";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { useState } from 'react';


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return(
    <div className="flex h-screen"> 
    <Sidebar sidebarState={[isSidebarOpen, setIsSidebarOpen]} />
    <div className="flex-1 w-full flex flex-col"> 
      <Topbar sidebarState ={[isSidebarOpen, setIsSidebarOpen]}/>
      <Outlet/>
    </div>
  </div>
  )
};

export default Dashboard;
