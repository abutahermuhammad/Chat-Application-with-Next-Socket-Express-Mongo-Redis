const useSettings = () => {
    const [theme, setTheme] = useState("dark");

    return { theme, setTheme };
};

export default useSettings;
