import React from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import ChatDropdown from "./ChatDropdown";
function ChatMessageRight() {
    return (
        <div className="chat-message">
            <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end transition-all">
                    <div className="flex items-center group space-x-2">
                        <span className=" rounded-full hover:bg-gray-200 cursor-pointer text-gray-400 group-hover:opacity-100 opacity-0 ">
                            <ChatDropdown>
                                <IoEllipsisVerticalSharp />
                            </ChatDropdown>
                        </span>
                        <span className="px-4 py-2 rounded-xl inline-block  bg-blue-600 text-white shadow">
                            Your error message says permission denied, npm
                            global installs must be given root privileges.
                        </span>
                    </div>
                    <div className="flex items-center group space-x-2">
                        <span className="  p-0 rounded-full hover:bg-gray-200 cursor-pointer text-gray-400 group-hover:opacity-100 opacity-0 ">
                            <ChatDropdown>
                                <IoEllipsisVerticalSharp />
                            </ChatDropdown>
                        </span>
                        <span className="px-4 py-2 rounded-xl inline-block  bg-blue-600 text-white shadow">
                            Your error message says permission denied, npm
                            global installs must be given root privileges.
                        </span>
                    </div>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    className="w-8 h-8 rounded-full order-2"
                />
            </div>
        </div>
    );
}

export default ChatMessageRight;
