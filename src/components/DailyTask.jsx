import React from "react";
import { RxDotsVertical } from "react-icons/rx";
import Taskcard from "./Taskcard";

function DailyTask() {
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className=" flex justify-between w-full mb-4">
          <h3 className="font-bold text-lg">Daily Tasks </h3>
          <select name="Today" id="" className="bg-gray-100 rounded-lg">
          <option value="Today" className="">Today</option>
          </select>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <Taskcard 
                isShow={false}
                title="Todo Mobile App Version"
                description="We have designed a dashboard for DevginEdge Design Agency"
            />
          </div>
          <div>
            <Taskcard 
            isShow={false}
            title="Todo Mobile App Version"
            description="We have designed a dashboard for DevginEdge Design Agency"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyTask;
