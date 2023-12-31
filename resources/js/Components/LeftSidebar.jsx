import React, { Children } from "react";
/* -------------------------------------------------------------------------- */
/*                                    Icons                                   */
/* -------------------------------------------------------------------------- */
import { IoSearch } from "react-icons/io5";
import { node } from "prop-types";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const LeftSidebar = ({ children }) => {
    return (
        <div className="ring-1 h-screen overflow-y-hidden">
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
            <div className=" mt-2 max-h-[80vh] overflow-y-scroll scrollbar-none">
                {children}
            </div>
        </div>
    );
};

export default LeftSidebar;

LeftSidebar.propTypes = {
    children: node,
};
