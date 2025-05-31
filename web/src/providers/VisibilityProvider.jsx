import { useNuiEvent } from "@/hooks/useNuiEvents";
import { fetchNui } from "@/utils/fetchNui";
import { isEnvBrowser } from "@/utils/misc";
import React, { createContext, useContext, useEffect, useState } from "react";


const VisibilityCtx = createContext(null);

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    useNuiEvent("setVisible", setVisible);

    // Handle pressing escape/backspace
    useEffect(() => {
        // Only attach listener when we are visible
        if (!visible) return;

        const keyHandler = (e) => {
            if (["Backspace", "Escape"].includes(e.code)) {
                if (!isEnvBrowser()) fetchNui("hideFrame");
                else setVisible(!visible);
            }
        };

        window.addEventListener("keydown", keyHandler);

        return () => window.removeEventListener("keydown", keyHandler);
    }, [visible]);

    return (
        <VisibilityCtx.Provider
            value={{
                visible,
                setVisible,
            }}
        >
            <div style={{ visibility: visible ? "visible" : "hidden", height: "100%" }}>{children}</div>
        </VisibilityCtx.Provider>
    );
};

export const useVisibility = () => useContext(VisibilityCtx);
