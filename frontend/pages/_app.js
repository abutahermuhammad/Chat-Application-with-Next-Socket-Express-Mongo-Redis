import AuthProvider from "../contexts/AuthProvider";
import "../styles/main.styles.sass";
import "../styles/output.styles.css";
import "../styles/tailwind.styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
