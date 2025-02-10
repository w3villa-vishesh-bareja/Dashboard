import { useState, useEffect } from 'react';
import { MdDashboard, MdEvent, MdAssignment, MdFolder, MdViewKanban, MdWork, MdTaskAlt, MdSecurity, MdPages, MdOutlineDashboardCustomize, MdHelp, MdSettings, MdLogout } from "react-icons/md";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import SideBarMenu from './SideBarMenu';

function SideBar({ sidebarState }) {
  const [isSidebarOpen, setIsSidebarOpen] = sidebarState;
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <div>   
      <div className={`sidebar z-20 bg-zinc-900 text-slate-200 flex flex-col h-screen transition-all duration-300 ease-in-out 
          ${isSidebarOpen ? "left-0 top-[72px]" : "-left-full top-[72px]"} fixed lg:static w-64`}>
        
        <div className='logo-container font-[Raleway] font-bold text-4xl text-yellow-600 mx-2 my-4 tracking-tight flex justify-between items-center'>
          Panzee
        </div>
        <div className='sidebar-options-container p-2 flex-1 overflow-y-auto'>
          <SideBarMenu
            heading="Dashboards"
            options={[
              { icon: <MdDashboard />, text: "Overview", route: "/" },
              { icon: <MdEvent />, text: "Calendar", route: "calendar" },
              { icon: <MdAssignment />, text: "Form", route: "Form" },
              { icon: <MdFolder />, text: "File Manager", route: "file-manager" },
              { icon: <MdViewKanban />, text: "Kanban", route: "kanban" },
              { icon: <MdWork />, text: "Projects", route: "projects" },
              { icon: <MdTaskAlt />, text: "Tasks", route: "tasks" }
            ]}
          />

          <SideBarMenu
            heading="Administrator"
            options={[
              { icon: <MdSecurity />, text: "Auth Pages", route: "auth-pages" },
              { icon: <MdPages />, text: "Extra Pages", route: "extra-pages" },
              { icon: <MdOutlineDashboardCustomize />, text: "Layout", route: "layout" }
            ]}
          />

          <SideBarMenu
            heading="Settings"
            options={[
              { icon: <MdHelp />, text: "Support", route: "support" },
              { icon: <MdSettings />, text: "Settings", route: "settings" },
              { icon: <MdLogout />, text: "Log Out", route: "logout" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
