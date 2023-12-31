import React, { useContext } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ChatMessageLeft from "@/Components/ChatMessageLeft";
import ChatMessageRight from "@/Components/ChatMessageRight";
import ChatFooter from "@/Components/ChatFooter";
import { messages } from "../message.js";
import { GlobalContext } from "@/providers/GlobalProvider.jsx";

export default function Dashboard({ loggedInUser }) {
    const { openRightSidebar } = useContext(GlobalContext);
    console.log(openRightSidebar);

    return (
        <AuthenticatedLayout>
            <div className="flex-1 justify-between flex flex-col  ">
                <div
                    id="messages"
                    className="flex flex-col flex-col-reverse space-y-4 p-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-[80vh] overflow-y-scroll px-4"
                >
                    {/* chat message left  */}
                    <ChatMessageLeft />
                    <br></br>
                    {/* chat message right  */}
                    <ChatMessageRight />
                    <br></br>
                    {/* chat message left  */}
                    <ChatMessageLeft />
                    <br></br>
                    {/* chat message right  */}
                    <ChatMessageRight />
                    <br></br>
                    {/* chat message left  */}
                    <ChatMessageLeft />
                    <br></br>
                    {/* chat message right  */}
                    <ChatMessageRight />
                </div>
                <ChatFooter />
            </div>
        </AuthenticatedLayout>
    );
}
