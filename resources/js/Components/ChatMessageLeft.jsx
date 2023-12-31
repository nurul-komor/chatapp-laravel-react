import React from "react";

const ChatMessageLeft = () => {
    return (
        <div className="chat-message">
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                    <div>
                        <span className="px-4 py-2 inline-block rounded-xl  bg-white text-gray-600 shadow-sm shadow-blue-100">
                            Can be verified on any platform using docker
                        </span>
                    </div>
                    <div>
                        <span className="px-4 py-2 inline-block rounded-xl rounded-bl-none bg-white text-gray-600 shadow-sm shadow-blue-100">
                            Can be verified on any platform using docker
                        </span>
                    </div>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt="My profile"
                    className="w-8 h-8 rounded-full order-1"
                />
            </div>
        </div>
    );
};

export default ChatMessageLeft;
