import React from "react";

const useAllChats = async (recipientId) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URI}/chats/?recipientId=${recipientId}`,
        {
            headers: {
                Accept: "Application/json",
            },
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const chatsData = await response.json();
    const chats = chatsData;

    // console.log(chats);
    return [chats];
};

export default useAllChats;
