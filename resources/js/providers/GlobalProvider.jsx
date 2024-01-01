import React, { useState } from "react";

export const GlobalContext = React.createContext(null);
import { node } from "prop-types";
export const GlobalProvider = ({ children }) => {
    const [openRightSidebar, setOpenRightSidebar] = useState(true);
    const [activeChatPerson, setActiveChatPerson] = useState(1);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const data = {
        openRightSidebar,
        setOpenRightSidebar,
        activeChatPerson,
        setActiveChatPerson,
        loggedInUser,
        setLoggedInUser,
    };
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: node,
};
