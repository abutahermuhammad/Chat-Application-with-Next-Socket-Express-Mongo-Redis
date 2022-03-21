import { CssBaseline, GeistProvider } from "@geist-ui/core";
import AuthProvider from "../contexts/AuthProvider";
import SettingsProvider from "../contexts/SettingsProvider";
import "../styles/main.styles.sass";
// import "../styles/output.styles.css";
import "../styles/tailwind.styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <SettingsProvider>
                <GeistProvider>
                    <CssBaseline />
                    <Component {...pageProps} />
                </GeistProvider>
            </SettingsProvider>
        </AuthProvider>
    );
}

export default MyApp;
