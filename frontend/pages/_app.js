import { CssBaseline, GeistProvider } from "@geist-ui/core";
import AuthProvider from "../contexts/AuthProvider";
import { ChatContext } from "../contexts/ChatProvider";
import SettingsProvider from "../contexts/SettingsProvider";
import { Chat } from "../hooks/useChat";
import "../styles/main.styles.sass";
// import "../styles/output.styles.css";
import "../styles/tailwind.styles.css";

function MyApp({ Component, pageProps }) {
    const chatComponent = Chat();

    return (
        <AuthProvider>
            <SettingsProvider>
                <ChatContext.Provider value={chatComponent}>
                    <GeistProvider>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </GeistProvider>
                </ChatContext.Provider>
            </SettingsProvider>
        </AuthProvider>
    );
}

export default MyApp;
