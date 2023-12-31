import React, { useContext, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import LeftSidebar from "@/Components/LeftSidebar";
import Navbar from "@/Components/Navbar";
// react tab
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChatPerson from "@/Components/ChatPerson";
// icons
import { IoAlertCircleOutline } from "react-icons/io5";
import { GlobalContext } from "@/providers/GlobalProvider";
export default function Authenticated({ children }) {
    const { openRightSidebar } = useContext(GlobalContext);
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [tabIndex, setTabIndex] = useState(0);
    // console.log(tabIndex);
    return (
        <div className="h-screen w-full">
            {/* <Tabs> */}
            <Tabs
                className="grid grid-cols-8"
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <div className=" col-span-2   flex">
                    <div className="bg-[#232323] text-slate-50 p-2 w-[20%] h-screen">
                        ok
                    </div>
                    <div className=" w-[80%] h-screen ">
                        <LeftSidebar>
                            <TabList>
                                {[...Array(24)].map((item, index) => (
                                    <Tab
                                        key={index}
                                        className={`w-full outline-none`}
                                    >
                                        <ChatPerson
                                            active={
                                                tabIndex == index ? true : false
                                            }
                                        />
                                    </Tab>
                                ))}
                            </TabList>
                        </LeftSidebar>
                    </div>
                </div>
                <div
                    className={`col-span-6  bg-gray-100 h-screen overflow-hidden w-full`}
                >
                    <div className=" w-full ring-1 ring-red-300 transition-all">
                        <div
                            className={`${
                                openRightSidebar
                                    ? "min-w-[468px] w-[70%]"
                                    : "min-w-[600px] w-[100%]"
                            } transition duration-150 float-left`}
                        >
                            <Navbar></Navbar>
                            {[...Array(24)].map((item, index) => (
                                <TabPanel key={index}>{children}</TabPanel>
                            ))}
                        </div>
                        <div
                            className={`p-4 h-screen transition duration-150  ring-1 relative w-[30%] float-right min-w-[100px] ${
                                openRightSidebar ? "-right-0" : "-right-[40rem]"
                            }`}
                        >
                            ok
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}
