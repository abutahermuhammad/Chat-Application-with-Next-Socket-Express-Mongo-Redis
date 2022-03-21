import { useContext, useState } from "react";
import { SettingsContext } from "../contexts/SettingsProvider";

export const Settings = () => {
    const [theme, setTheme] = useState("dark");

    return { theme, setTheme };
};

const useSettings = () => {
    return useContext(SettingsContext);
};
export default useSettings;
