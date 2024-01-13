import React, { useContext } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import ChatDropdown from "../ChatDropdown";
import { GlobalContext } from "@/providers/GlobalProvider";

function ChatMessageRight({ isLast, message }) {
    const { loggedInUser } = useContext(GlobalContext);
    // console.log(sender?.name);
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
                            {message?.message}
                        </span>
                    </div>
                </div>
                {isLast ? (
                    <img
                        src={`https://source.boringavatars.com/beam/20/${loggedInUser?.name}`}
                        alt="My profile"
                        className="w-8 h-8 rounded-full order-2"
                    />
                ) : (
                    <div className="w-8 h-8 order-2"></div>
                )}
            </div>
        </div>
    );
}

export default ChatMessageRight;
