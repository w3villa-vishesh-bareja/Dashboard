import React from "react";
import { RxDotsVertical } from "react-icons/rx";
import PsCard from "./PsCard";
import { CgProfile } from "react-icons/cg";
import { MdGroups } from "react-icons/md";

function ProjectSummary() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className=" flex justify-between w-full">
          <h3 className="font-bold text-lg self-center">Project Summary </h3>
          <RxDotsVertical className="hover:bg-gray-200 cursor-pointer rounded-full p-2 mt-1 text-4xl" />
        </div>
        <div className="flex flex-col gap-6">
        <div className="mt-4">
          <PsCard
            icon={<CgProfile />}
            icon2={<MdGroups />}
            title="Todo App"
            member="19 members"
            title2="Homie SAAS Application"
            member2="24 members"
          />
        </div>
        <div className="mt-4">
          <PsCard
            icon={<CgProfile />}
            icon2={<MdGroups />}
            title="Todo App"
            member="19 members"
            title2="Homie SAAS Application"
            member2="24 members"
          />
        </div>
        </div>

      </div>
    </>
  );
}

export default ProjectSummary;
