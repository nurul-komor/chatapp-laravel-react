import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { node, string } from "prop-types";
export default function ChatDropdown({ children, position }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={"p-3 m-0 flex"}>{children}</Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className={`absolute  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-[15px] bg-white shadow-lg ring-black/5 focus:outline-none ${
                        position == "left" ? "left-0" : "right-0"
                    }`}
                >
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? "bg-blue-500 text-white"
                                            : "text-blue-600"
                                    } group flex w-full items-center rounded-[15px] px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <EditActiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EditInactiveIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    )}
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    );
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    );
}

ChatDropdown.propTypes = {
    children: node,
    position: string,
};
