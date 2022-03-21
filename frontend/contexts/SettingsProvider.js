import { createContext } from "react";
import { Settings } from "../hooks/useSettings";

// Creating Auth Context
export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    // Firebase State
    const settings = Settings();

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
