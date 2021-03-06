import RegisterForm from "../../views/pages/register/RegisterForm/RegisterForm";
import Layout from "../../views/shared/Layout/Layout";

const Register = () => {
    return (
        <>
            <Layout
                className="mv_login flex justify-center pt-24 bg-c-1"
                loginRedirect={true}
            >
                <RegisterForm />
            </Layout>
        </>
    );
};

export default Register;
