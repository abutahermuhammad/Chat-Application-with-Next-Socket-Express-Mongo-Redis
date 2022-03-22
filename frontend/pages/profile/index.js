import { Card, Grid, Image, Text } from "@geist-ui/core";
import useAuth from "../../hooks/useAuth";
import Container from "../../views/shared/Container/Container";
import Layout from "../../views/shared/Layout/Layout";

const Profile = () => {
    const { user, loggedin } = useAuth();

    return (
        <>
            <Layout className="mv_page-profile" login={true}>
                <section className=" mt-24 mb-4">
                    <Container className="xl:pb-10 md:pb-10 sm:pb-7">
                        <Text h1 className="text-4xl font-medium">
                            Personal Profile
                        </Text>
                    </Container>

                    <Container className="">
                        <Card>
                            <Grid.Container gap={3}>
                                <Grid lg={6} md={6} sm={24}>
                                    <Image
                                        width="180px"
                                        height="180px"
                                        title={user.displayName}
                                        src={user?.photoURL}
                                    />
                                </Grid>

                                <Grid lg={18} md={18} sm={24}>
                                    <div>
                                        {/* Name */}
                                        <Text
                                            h4
                                            className="font-medium text-2xl mb-2"
                                        >
                                            {user.displayName}
                                        </Text>

                                        {/* Phone */}
                                        {user.phone && (
                                            <Text className="mb-1">
                                                Phone: {user.phone}
                                            </Text>
                                        )}

                                        {/* Email */}
                                        <Text className="mb-1">
                                            Email: {user.email}
                                        </Text>

                                        {/* User GUID */}
                                        <Text className="mb-1 float-right">
                                            GUID: {user.uid?.toUpperCase()}
                                        </Text>
                                    </div>
                                </Grid>
                            </Grid.Container>
                        </Card>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Profile;
