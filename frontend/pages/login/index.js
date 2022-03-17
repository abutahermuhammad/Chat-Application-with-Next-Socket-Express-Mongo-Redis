import LoginForm from "../../views/pages/login/LoginForm/LoginForm";
import Layout from "../../views/shared/Layout/Layout";

const Login = () => {
    return (
        <>
            <Layout className="mv_login">
                <LoginForm />
            </Layout>
        </>
    );
};

export default Login;
