import React, {Children} from "react";
/* -------------------------------------------------------------------------- */
/*                                    Icons                                   */
/* -------------------------------------------------------------------------- */
import {IoSearch} from "react-icons/io5";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
const LeftSidebar = ({children}) => {
  return (
    <>
      <div className="py-6 pr-4 pl-8">
        <div
          className={`relative inline-block before:absolute before:content-["23New"] before:left-full before:bottom-4 before:text-sm before:text-gray-400 `}
        >
          <span className="text-xl font-semibold">Inbox</span>
        </div>
      </div>
      <div className=" p-4">
        <div className="bg-blue-50 rounded-full flex items-center">
          <span className=" pl-3">
            <IoSearch size={22} className="text-gray-300" />
          </span>
          <span className=" ">
            <input
              type="text"
              className="outline-none border-0 bg-transparent w-full focus:ring-transparent"
              name=""
              placeholder="Search here..."
              id=""
            />
          </span>
        </div>
      </div>
      <div className=" mt-2 max-h-[78vh] overflow-y-scroll scrollbar-none">
        {/* chat persons */}
        {/* <div className="pl-2 pr-1 py-2 flex gap-3 w-full  ring-red-400 border-l-[3px] border-blue-400 bg-gradient-to-l from-blue-100">
          <div className="h-10 w-10  bg-gray-500 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className=" w-[85%]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 truncate">
                                Abul Kalam
              </span>
              <span className="text-sm font-medium text-gray-500 truncate">
                                12:30 PM
              </span>
            </div>
            <div className="mt-[.5px] text-sm text-gray-500 truncate text-limit-1">
                            Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div> */}
        {/* <hr className="bg-gray-100 h-[2px] w-full" /> */}
        { children}
      </div>
    </>
  );
};

export default LeftSidebar;
