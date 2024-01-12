import React, { useState } from "react";
import { node } from "prop-types";

export const GlobalContext = React.createContext(null);
export const GlobalProvider = ({ children }) => {
    const [csrfToken, setCsrfToken] = useState(null);
    const [openRightSidebar, setOpenRightSidebar] = useState(true);
    const [activeChatPerson, setActiveChatPerson] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [sender, setSender] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messagePage, setMessagePage] = useState(1);
    const data = {
        csrfToken,
        setCsrfToken,
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
        messagePage,
        setMessagePage,
    };
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: node,
};
