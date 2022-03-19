import { CssBaseline, GeistProvider } from "@geist-ui/core";
import AuthProvider from "../contexts/AuthProvider";
import "../styles/main.styles.sass";
// import "../styles/output.styles.css";
import "../styles/tailwind.styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <GeistProvider>
                <CssBaseline />
                <Component {...pageProps} />
            </GeistProvider>
        </AuthProvider>
    );
}

export default MyApp;
