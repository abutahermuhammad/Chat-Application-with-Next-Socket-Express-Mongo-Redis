import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import LoginForm from "../../views/pages/login/LoginForm/LoginForm";
import Layout from "../../views/shared/Layout/Layout";

const Login = () => {
    const router = useRouter();
    const { user, loggedin } = useAuth();

    return (
        <>
            <Layout
                className="mv_login flex justify-center pt-24 bg-c-1"
                loginRedirect={true}
            >
                <LoginForm />
            </Layout>
        </>
    );
};

export default Login;
