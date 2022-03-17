import RegisterForm from "../../views/pages/register/RegisterForm/RegisterForm";
import Layout from "../../views/shared/Layout/Layout";

const Register = () => {
    return (
        <>
            <Layout className="mv_login">
                <RegisterForm />
            </Layout>
        </>
    );
};

export default Register;
