import React, { useContext, useEffect, useState } from "react";
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
// custom css
import MainStyle from "./Main.module.css";
// data
import { chatByPersons } from "../chatByPerson.js";

import { GlobalContext } from "@/providers/GlobalProvider";
export default function Authenticated({ children }) {
    const {
        openRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        loggedInUser,
    } = useContext(GlobalContext);
    const [tabIndex, setTabIndex] = useState(0);
    const [chatPersons, setChatPersons] = useState([]);

    useEffect(() => {
        setChatPersons(chatByPersons);
    }, [chatByPersons]);

    const handleActiveChat = (chats) => {
        let sender;
        // getting sender from the particular  chat
        chats?.map((chat) => {
            sender =
                chat?.sender_id != loggedInUser?.id ? chat?.sender_id : null;
            if (sender) {
                setActiveChatPerson(chat?.sender_id);
                return;
            }
        });
    };
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
                            <TabList className="border-0">
                                {chatPersons?.map((chats, index) => (
                                    <Tab
                                        onClick={() => handleActiveChat(chats)}
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
                            className={`${MainStyle.main} ${
                                openRightSidebar ? "" : `${MainStyle.full}`
                            }  float-left`}
                        >
                            <Navbar></Navbar>

                            {chatPersons?.map((item, index) => (
                                <TabPanel className="border-0" key={index}>
                                    {children}
                                </TabPanel>
                            ))}
                        </div>
                        <div
                            className={`p-4 h-screen transition duration-150  relative w-[30%] float-right min-w-[100px] bg-white`}
                        >
                            ok
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}
