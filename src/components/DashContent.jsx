import React from "react";
import Taskcard from "./Taskcard";
import Donutchart from "./Donutchart";
import Barchartc from "./BarChart";
import ProjectSummary from "./ProjectSummary.jsx";
import ProjectOverview from "./ProjectOverview.jsx";
import DailyTask from "./DailyTask.jsx";
import '../assets/styles/taskCard.css'

function DashContent() {
  return (
    <div className="dc-container p-4 flex-1 overflow-y-auto bg-gray-100 gap-4 flex flex-col ">
      <div className="Card-container grid sm:grid sm: grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Taskcard
          isShow={true}
          title="Project Dashboard"
          description="Style guide for the business"
        />
        <Taskcard
          isShow={true}
          title="Create a Style Guide"
          description="Style guide for the business"
        />
        <Taskcard
          isShow={true}
          title="Create Wireframe"
          description="WStyle guide for the business"
        />
        <Taskcard
          isShow={true}
          title="Conduct User Research"
          description="Style guide for the business"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="Pie-chart bg-white shadow-md p-4 rounded-4xl flex justify-center items-center flex-col">
          <Donutchart />
        </div>
        <div className="BclassNamear-chart bg-white shadow-md p-4 rounded-4xl lg:col-span-2">
          <Barchartc />
        </div>
      </div>

      <div className="sm:grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="ps-container bg-white shadow-md p-4 rounded-4xl flex justify-center">
          <ProjectSummary />
        </div>
        <div className="po-container my-5 md:my-0 bg-white shadow-md p-4 rounded-4xl flex items-center flex-col h-auto">
          <ProjectOverview />
        </div>
        <div className="dt-container mt-5 md:mt-0   bg-white shadow-md p-4 rounded-4xl flex justify-center">
          <DailyTask />
        </div>
      </div>
    </div>
  );
}

export default DashContent;
