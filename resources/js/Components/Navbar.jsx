import { GlobalContext } from "@/providers/GlobalProvider";
import React, { useContext } from "react";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function Navbar() {
    const {
        openRightSidebar,
        setOpenRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        sender,
        loggedInUser,
        setLoggedInUser,
    } = useContext(GlobalContext);
    return (
        <>
            <div className=" bg-white  w-full relative z-30">
                <div className="flex sm:items-center justify-between py-3 px-4">
                    <div
                        className="relative flex items-center space-x-4 cursor-pointer"
                        onClick={() => setOpenRightSidebar(!openRightSidebar)}
                    >
                        <div className="relative ring-4 ring-blue-400 ring-offset-2 rounded-full">
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt=""
                                className="w-10  h-10 rounded-full"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="text-lg mt-1 flex items-center">
                                <span className="text-gray-700 mr-3">
                                    {sender?.name}
                                </span>
                            </div>
                            <span className="text-sm text-gray-600">
                                {/* Junior Developer */}
                                {sender?.id}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full  h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full  h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full  h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                ></path>
                            </svg>
                        </button>
                        <span className="select-none mx-3 text-gray-300">
                            |
                        </span>
                        <button
                            className="inline-flex items-center justify-center rounded-full  h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            onClick={() =>
                                setOpenRightSidebar(!openRightSidebar)
                            }
                        >
                            <IoAlertCircleOutline
                                size={22}
                            ></IoAlertCircleOutline>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
