import React from "react";

const ChatPerson = ({ person, active }) => {
    return (
        <>
            {" "}
            {active ? (
                <div className="pl-2 pr-1 py-2 flex gap-3 w-full  ring-red-400 border-l-[4px] border-blue-400  bg-blue-100">
                    <div className="h-10 w-10  bg-gray-500 rounded-full overflow-hidden">
                        <img
                            src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className=" w-[85%]">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-900 truncate">
                                Abul Kalam
                            </span>
                            <span className="text-sm font-medium text-gray-500 truncate">
                                12:30 PM
                            </span>
                        </div>
                        <div className="mt-[.5px] text-sm text-gray-500 truncate text-limit-1">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            ) : (
                <div className="pl-2 pr-1 py-2 flex gap-3 w-full  ring-red-400 border-l-[3px] border-transparent cursor-pointer hover:bg-blue-50 duration-75">
                    <div className="h-10 w-10  bg-gray-500 rounded-full overflow-hidden">
                        <img
                            src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className=" w-[85%]">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-900 truncate">
                                Abul Kalam
                            </span>
                            <span className="text-sm font-medium text-gray-500 truncate">
                                12:30 PM
                            </span>
                        </div>
                        <div className="mt-[.5px] text-sm text-gray-500 truncate text-limit-1">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            )}
            <hr className="bg-gray-100 h-[2px] w-full" />
        </>
    );
};

export default ChatPerson;
