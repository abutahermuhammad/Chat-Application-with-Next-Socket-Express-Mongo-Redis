import AuthProvider from "../contexts/AuthProvider";
import "../styles/main.style.sass";
import "../styles/tailwind.style.css";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
