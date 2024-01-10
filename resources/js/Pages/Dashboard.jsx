import React, { useContext, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
// import ChatMessageLeft from "@/Components/ChatMessage/ChatMessageLeftContainer";
import ChatFooter from "@/Components/ChatFooter";
// import { messages } from "../chatByPerson.js";
import { GlobalContext } from "@/providers/GlobalProvider.jsx";
import ChatMessageLeft from "@/Components/ChatMessage/ChatMessageLeft";
import ChatMessageRight from "@/Components/ChatMessage/ChatMessageRight";

export default function Dashboard({ auth }) {
    const {
        openRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        sender,
        loggedInUser,
        setLoggedInUser,
        messages,
    } = useContext(GlobalContext);
    useEffect(() => {
        setLoggedInUser(auth);
    }, [auth]);
    console.log(loggedInUser?.id);
    return (
        <AuthenticatedLayout>
            <div className="flex-1 justify-between flex flex-col  ">
                <div
                    id="messages"
                    className="flex flex-col flex-col-reverse gap-y-2 p-3  h-[80vh] overflow-y-scroll px-4 custom-scrollbar"
                >
                    {messages &&
                        messages?.data?.map((message, index, elements) => (
                            <span key={index}>
                                {message?.recipient_id == loggedInUser?.id ? (
                                    <>
                                        {/* When sender of (this) message and (this-1) both of them are same , thats mean this is not the last message  */}
                                        {/* As it if flex reverse map, thats why (this -1) refers to the next latest  message  */}

                                        {/* <ChatMessageLeft /> */}
                                        {elements[index - 1]?.sender_id ==
                                        elements[index]?.sender_id ? (
                                            <ChatMessageLeft
                                                message={message}
                                            />
                                        ) : (
                                            <ChatMessageLeft
                                                isLast={true}
                                                message={message}
                                            />
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {/* When sender of (this) message and (this-1) both of them are same , thats mean this is not the last message  */}
                                        {/* As it if flex reverse map, thats why (this -1) refers to the next latest  message  */}
                                        {/* chat message right  */}
                                        {elements[index - 1]?.sender_id ==
                                        elements[index]?.sender_id ? (
                                            <ChatMessageRight
                                                message={message}
                                            />
                                        ) : (
                                            <ChatMessageRight
                                                isLast={true}
                                                message={message}
                                            />
                                        )}
                                    </>
                                )}
                            </span>
                        ))}
                </div>
                <ChatFooter />
            </div>
        </AuthenticatedLayout>
    );
}
