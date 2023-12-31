import React, { useState } from "react";

export const GlobalContext = React.createContext(null);
import { node } from "prop-types";
export const GlobalProvider = ({ children }) => {
    const [openRightSidebar, setOpenRightSidebar] = useState(false);
    const data = {
        openRightSidebar,
        setOpenRightSidebar,
    };
    return (
        <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: node,
};
