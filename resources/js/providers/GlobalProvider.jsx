import React, { useState } from "react";

export const GlobalContext = React.createContext(null);
import { node } from "prop-types";
export const GlobalProvider = ({ children }) => {
    const [openRightSidebar, setOpenRightSidebar] = useState(true);
    const [activeChatPerson, setActiveChatPerson] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [sender, setSender] = useState(null);
    const [messages, setMessages] = useState([]);
    const data = {
        openRightSidebar,
        setOpenRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        loggedInUser,
        setLoggedInUser,
        sender,
        setSender,
        messages,
        setMessages,
    };
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: node,
};
