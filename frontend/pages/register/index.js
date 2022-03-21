import RegisterForm from "../../views/pages/register/RegisterForm/RegisterForm";
import Layout from "../../views/shared/Layout/Layout";

const Register = () => {
    return (
        <>
            <Layout className="mv_login flex justify-center items-center bg-c-1">
                <RegisterForm />
            </Layout>
        </>
    );
};

export default Register;
