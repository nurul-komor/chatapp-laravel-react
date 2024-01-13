import React, { useContext } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import ChatDropdown from "../ChatDropdown";
import { GlobalContext } from "@/providers/GlobalProvider";

const ChatMessageLeftLast = ({ isLast, message }) => {
    const { sender } = useContext(GlobalContext);
    // console.log(sender);
    return (
        <div className="chat-message">
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start transition-all">
                    <div className="flex items-center group space-x-2">
                        <span className="px-4 py-2 inline-block rounded-xl  bg-white text-gray-600 shadow-sm shadow-blue-100">
                            {message?.message}
                        </span>
                        <span className=" rounded-full hover:bg-gray-200 cursor-pointer text-gray-400 group-hover:opacity-100 opacity-0 flex">
                            <ChatDropdown position="left">
                                <IoEllipsisVerticalSharp />
                            </ChatDropdown>
                        </span>
                    </div>
                </div>
                {isLast ? (
                    <img
                        src={`https://source.boringavatars.com/beam/120/${sender?.name}`}
                        alt="My profile"
                        className="w-8 h-8 rounded-full order-1"
                    />
                ) : (
                    <div className="w-8 h-8"></div>
                )}
            </div>
        </div>
    );
};

export default ChatMessageLeftLast;
