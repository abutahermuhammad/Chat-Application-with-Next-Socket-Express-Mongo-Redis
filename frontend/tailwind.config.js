module.exports = {
    // prefix: "mv_",
    // darkMode: "media",
    mode: "jit",
    important: true,
    purge: [
        "./pages/**/**/**/*.{js,ts,jsx,tsx}",
        "./views/**/**/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            white: "#FFFFFF",
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            yellow: "#ffc82c",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            spacing: {
                cscreen: "calc(100vh - 120px)",
            },
        },
    },
    Plugin: [],
    // corePlugins: {
    //     preflight: false,
    // },
};
