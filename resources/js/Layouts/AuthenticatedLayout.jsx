import React, { useContext, useEffect, useState } from "react";
// Components
// import ApplicationLogo from "@/Components/ApplicationLogo";
// import Dropdown from "@/Components/Dropdown";
// import NavLink from "@/Components/NavLink";
// import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
// import { Link } from "@inertiajs/react";
import LeftSidebar from "@/Components/LeftSidebar";
import Navbar from "@/Components/Navbar";

// react tab
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChatPerson from "@/Components/ChatPerson";
// icons
// import { IoAlertCircleOutline } from "react-icons/io5";
// custom css
import MainStyle from "./Main.module.css";
// data
// import { chatByPersons } from "../chatByPerson.js";
// contexts
import { GlobalContext } from "@/providers/GlobalProvider";
import ProfileBar from "@/Components/ProfileBar";
// import useAllChats from "@/hooks/useAllChats";
export default function Authenticated({ children }) {
    const {
        openRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        loggedInUser,
        sender,
        setSender,
        messages,
        setMessages,
        messagePage,
    } = useContext(GlobalContext);

    const [tabIndex, setTabIndex] = useState(-1);
    const [chatPersons, setChatPersons] = useState([]);
    useEffect(() => {
        loadSenders();
    }, [loggedInUser]);
    /* ------------------------------ load senders ------------------------------ */
    const loadSenders = () => {
        const response = fetch(
            `${import.meta.env.VITE_API_URI}/senders/?recipientId=${
                loggedInUser?.id
            }`,
            { headers: { "Content-Type": "application/json" } }
        )
            .then((res) => res.json())
            .then((senders) => {
                setChatPersons(Object.values(senders?.senders));
                console.log(senders?.senders[0]);
                if (!activeChatPerson) {
                    console.log("no active chat person");
                }
            })
            .catch((err) => new Error(err));
    };
    /* ------------------------------ load senders ------------------------------ */
    /* ------------------------------ load messages ----------------------------- */
    const loadMessages = () => {
        const messages = fetch(
            `${
                import.meta.env.VITE_API_URI
            }/messages/?senderId=${activeChatPerson}&page=${messagePage}`,
            { headers: { "Content-Type": "application/json" } }
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setSender(data?.sender);
                setActiveChatPerson(data?.sender?.id);
                setMessages(data?.messages);
            })
            .catch((err) => console.log(err));
    };
    /* ------------------------------ load messages ----------------------------- */

    const handleActiveChat = (chat) => {
        let sender;
        // getting sender from the particular  chat

        sender = chat?.sender_id != loggedInUser?.id ? chat?.sender_id : null;
        if (sender) {
            setActiveChatPerson(chat?.sender_id);
        }
    };
    useEffect(() => {
        loadMessages();
    }, [activeChatPerson]);

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
                                {chatPersons &&
                                    chatPersons?.map((item, index) => (
                                        <Tab
                                            onClick={() =>
                                                handleActiveChat(item)
                                            }
                                            key={index}
                                            className={`w-full outline-none`}
                                        >
                                            <ChatPerson
                                                sender={item}
                                                active={
                                                    tabIndex == index
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </Tab>
                                    ))}
                            </TabList>
                        </LeftSidebar>
                    </div>
                </div>
                <div
                    className={`col-span-6  bg-gray-100 h-screen overflow-hidden w-full relative z-1`}
                >
                    {/* background  */}

                    <div
                        className={`absolute left-0 top-0 w-full h-screen bg-[url('https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg')] -z-1 opacity-[.1]`}
                    ></div>
                    <div className=" w-full transition-all relative z-1">
                        <div
                            className={` ${MainStyle.main} ${
                                openRightSidebar ? "" : `${MainStyle.full}`
                            }  float-left`}
                        >
                            {tabIndex >= 0 ? <Navbar /> : ""}

                            {chatPersons?.map((item, index) => (
                                <TabPanel className="border-0" key={index}>
                                    {tabIndex >= 0 ? children : ""}
                                </TabPanel>
                            ))}
                        </div>
                        <div
                            className={`p-4 h-screen transition duration-150  relative w-[30%] float-right min-w-[100px] bg-white scrollbar-none max-h-screen overflow-y-scroll ${
                                tabIndex >= 0 ? "" : "hidden"
                            }`}
                        >
                            <ProfileBar />
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}
