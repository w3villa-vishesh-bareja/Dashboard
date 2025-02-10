import React from "react";
import { FiUsers, FiUser } from "react-icons/fi";

function PsCard({ title, member, title2, member2, icon, icon2 }) {
  return (
    <div className="border-gray-200 rounded-2xl bg-white shadow-sm p-4 space-y-4 w-full mx-auto">
      <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl cursor-pointer">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
          {icon || <FiUser className="text-orange-500 text-2xl" />}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{member} Members</p>
        </div>
        <div className="ml-auto text-gray-400 text-xl">&gt;</div>
      </div>

      <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl cursor-pointer">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
          {icon2 || <FiUsers className="text-purple-500 text-2xl" />}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-gray-900">{title2}</p>
          <p className="text-sm text-gray-500">{member2} Members</p>
        </div>
        <div className="ml-auto text-gray-400 text-xl">&gt;</div>
      </div>
    </div>
  );
}

export default PsCard;