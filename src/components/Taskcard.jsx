import React from "react";
import { RxDotsVertical } from "react-icons/rx";
import { LuClock2 } from "react-icons/lu";
import man1 from "../assets/images/man1.jpeg";
import man2 from "../assets/images/man2.jpeg";
import '../assets/styles/taskCard.css'

const Taskcard = ({ title, description, isShow }) => (
  <div className=" bg-white shadow-md w-full   rounded-3xl p-4 md:p-6 lg:p-4 flex flex-col justify-between">
    <div className="">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="title font-bold text-base lg:text-lg xl:text-xl mb-1 ">
            {title}
          </h3>
          {isShow && (
            <RxDotsVertical className="hover:bg-gray-200 cursor-pointer rounded-full p-1 md:p-2 text-2xl md:text-3xl lg:text-4xl" />
          )}
        </div>
        <p className="text-gray-600 mb-1 md:mb-2 text-xs md:text-sm lg:text-base font-light lg:max-w-48 ">
          {description}
        </p>
      </div>
      <div className="flex xl:flex-nowrap  items-center md:items-end max-w-full justify-between">
        <div className="flex items-center gap-1 md:gap-2">
          <LuClock2 className="text-orange-500 text-sm md:text-base" />
          <p className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
            Updated in 5 hours
          </p>
        </div>
        <div className="flex ">
          <img
            src={man1}
            alt=""
            className="w-8 h-8 md:w-8d:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-full border-2 md:border-4 border-white"
          />
          <img
            src={man2}
            alt=""
            className="w-8 h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-full border-2 md:border-4 border-white -ml-2"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Taskcard;
