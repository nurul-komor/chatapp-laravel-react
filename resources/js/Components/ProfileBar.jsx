import { Link } from "@inertiajs/react";
import React, { useContext } from "react";
import {
    IoCall,
    IoLockClosed,
    IoPerson,
    IoVideocam,
    IoVolumeMedium,
} from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import ImageGallery from "./ImageGallery";
import { GlobalContext } from "@/providers/GlobalProvider";
function ProfileBar() {
    const { sender } = useContext(GlobalContext);
    return (
        <div className="flex flex-col p-2 items-center ">
            <div className="">
                <img
                    src={`https://source.boringavatars.com/beam/120/${sender?.name}`}
                    alt=""
                    className="w-30 h-30 rounded-full mt-10 ring-[8px]  ring-blue-400"
                />
            </div>
            <h4 className="font-semibold text-2xl mt-3">{sender?.name}</h4>
            <h5 className="text-lg my-2">Chittagong</h5>
            <p className="text-center text-gray-500">
                Lorem ipsum dolor sit amet, consectetur .
            </p>
            <div className="icons flex my-2 space-x-2">
                <Icon href="#">
                    <IoCall size={14} />
                </Icon>
                <Icon href="#">
                    <IoVideocam size={14} />
                </Icon>
                <Icon href="#">
                    <IoVolumeMedium size={14} />
                </Icon>
                <Icon href="#">
                    <IoPerson size={14} />
                </Icon>
            </div>
            <div className="grid grid-cols-1  w-full mt-2 gap-2">
                <div className="flex justify-between items-end">
                    <p>Theme</p>
                    <p>Blue</p>
                </div>
                <div className="flex justify-between items-end">
                    <p>Nickname</p>
                    <p>nick</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Create a group</p>
                    <MdGroups size={22}></MdGroups>
                </div>
                <div className="flex justify-between items-center">
                    <p>Go To Secret Conversation</p>
                    <IoLockClosed size={16}></IoLockClosed>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Media</p>
                    <Link>See all</Link>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((item, index) => (
                        <a
                            href="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                            target="_blank"
                            key={index}
                            className="rounded-[8px] h-15 overflow-hidden "
                            rel="noreferrer"
                        >
                            <img
                                src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                                className="h-15 object-contain "
                                alt=""
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileBar;

function Icon({ children, href }) {
    return (
        <Link
            href={href}
            className="p-2 rounded-full bg-gray-300 text-gray-600 text-xs cursor-hover"
        >
            {children}
        </Link>
    );
}
