import useAuth from "../../../hooks/useAuth";
import Container from "../../../views/shared/Container/Container";
import Layout from "../../../views/shared/Layout/Layout";

const ProfileSettings = () => {
    const { user, loggedin } = useAuth();

    return (
        <>
            <Layout>
                <section>
                    <Container className="xl:py-12 md:py-10 sm:py-7">
                        <h4 className="text-6xl">{user.displayName}</h4>
                    </Container>

                    <Container className="">
                        <div className="card w-full px-7 py-2 border border-slate-300 hover:border-slate-400 rounded-lg">
                            <h4 className="text-xl font-medium">
                                Your Username
                            </h4>
                            <p className="my-3">
                                This is your URL namespace within Miah Vai.
                            </p>
                            <p>
                                <span>Username: </span>
                                {user.displayName}
                            </p>
                        </div>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default ProfileSettings;
