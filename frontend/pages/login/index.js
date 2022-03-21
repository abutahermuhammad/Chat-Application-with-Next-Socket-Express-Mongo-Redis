import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import LoginForm from "../../views/pages/login/LoginForm/LoginForm";
import Layout from "../../views/shared/Layout/Layout";

const Login = () => {
    const router = useRouter();
    const { user, loggedin } = useAuth();

    return loggedin && user.email ? (
        router.back()
    ) : (
        <>
            <Layout className="mv_login flex justify-center items-center bg-c-1">
                <LoginForm />
            </Layout>
        </>
    );
};

export default Login;
