import React, { useContext, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ChatMessageLeft from "@/Components/ChatMessageLeft";
import ChatMessageRight from "@/Components/ChatMessageRight";
import ChatFooter from "@/Components/ChatFooter";
// import { messages } from "../chatByPerson.js";
import { GlobalContext } from "@/providers/GlobalProvider.jsx";

export default function Dashboard({ auth }) {
    const {
        openRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        sender,
        loggedInUser,
        setLoggedInUser,
    } = useContext(GlobalContext);
    useEffect(() => {
        setLoggedInUser(auth);
    }, [auth]);
    return (
        <AuthenticatedLayout>
            <div className="flex-1 justify-between flex flex-col  ">
                <div
                    id="messages"
                    className="flex flex-col flex-col-reverse space-y-4 p-3  h-[80vh] overflow-y-scroll px-4 custom-scrollbar"
                >
                    <p>Sender:{sender?.name}</p>
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
