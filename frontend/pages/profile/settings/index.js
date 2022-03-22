import {
    Avatar,
    Button,
    Fieldset,
    Grid,
    Input,
    Snippet,
    Text,
} from "@geist-ui/core";
import { UserX } from "@geist-ui/icons";
import useAuth from "../../../hooks/useAuth";
import { textToUrl } from "../../../utils/text.utils";
import Container from "../../../views/shared/Container/Container";
import Layout from "../../../views/shared/Layout/Layout";

const ProfileSettings = () => {
    const { user, loggedin } = useAuth();

    return (
        <>
            <>
                <Layout className="mv_user-settings" login={true}>
                    <section className="mt-24">
                        <Container className="xl:pb-10 md:pb-10 sm:pb-7">
                            <Text h1 className="text-4xl font-medium">
                                Account Settings
                            </Text>
                        </Container>

                        <Container className="">
                            <div className="mv_user-avatar">
                                <Fieldset className="mb-6">
                                    <Fieldset.Content>
                                        <Grid.Container
                                            gap={2}
                                            justify="space-between"
                                        >
                                            <Grid
                                                xl={16}
                                                md={16}
                                                sm={24}
                                                direction="column"
                                            >
                                                <Fieldset.Title h4 my={0}>
                                                    Your Avatar
                                                </Fieldset.Title>
                                                <Fieldset.Subtitle>
                                                    Click on the avatar to
                                                    upload a custom one from
                                                    your files.
                                                </Fieldset.Subtitle>
                                            </Grid>

                                            <Grid>
                                                <Avatar
                                                    width="80px"
                                                    height="80px"
                                                    title={user.displayName}
                                                    src={user?.photoURL}
                                                />
                                            </Grid>
                                        </Grid.Container>
                                    </Fieldset.Content>

                                    <Fieldset.Footer className="flex justify-between items-center">
                                        <Text>
                                            You can not change your avatar.
                                        </Text>
                                        <Button
                                            className="font-bold"
                                            auto
                                            scale={2 / 3}
                                            disabled
                                        >
                                            Save
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset>
                            </div>

                            <div className="mv_username">
                                <Fieldset className="mb-6">
                                    <Fieldset.Title h4 my={0}>
                                        Your Username
                                    </Fieldset.Title>
                                    <Fieldset.Subtitle>
                                        This is your URL namespace within Miah
                                        Vai.
                                    </Fieldset.Subtitle>
                                    <Input
                                        label="username"
                                        placeholder={textToUrl(
                                            user.displayName
                                        )}
                                    />

                                    <Fieldset.Footer className="flex justify-between items-center">
                                        <Text>
                                            Please use 48 characters at maximum.
                                        </Text>
                                        <Button
                                            auto
                                            type="secondary"
                                            className="font-bold"
                                            scale={2 / 3}
                                        >
                                            Save
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset>
                            </div>

                            <div className="mv_name">
                                <Fieldset className="mb-6">
                                    <Fieldset.Title h4 my={0}>
                                        Your Name
                                    </Fieldset.Title>
                                    <Fieldset.Subtitle>
                                        Please enter your full name, or a
                                        display name you are comfortable with.
                                    </Fieldset.Subtitle>
                                    <Input
                                        label="Name"
                                        placeholder={user.displayName}
                                    />

                                    <Fieldset.Footer className="flex justify-between items-center">
                                        <Text>
                                            Please use 48 characters at maximum.
                                        </Text>
                                        <Button
                                            className="font-bold"
                                            auto
                                            scale={2 / 3}
                                        >
                                            Save
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset>
                            </div>

                            <div className="mv_user-email">
                                <Fieldset className="mb-6">
                                    <Fieldset.Title h4 my={0}>
                                        Your Email
                                    </Fieldset.Title>
                                    <Fieldset.Subtitle>
                                        Please enter the email address you want
                                        to use to log in with Miah vai.
                                    </Fieldset.Subtitle>
                                    <Input
                                        label="Email"
                                        placeholder={user.email}
                                    />

                                    <Fieldset.Footer className="flex justify-between items-center">
                                        <Text>
                                            We will email you to verify the
                                            change.
                                        </Text>
                                        <Button
                                            className="font-bold"
                                            auto
                                            scale={2 / 3}
                                        >
                                            Save
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset>
                            </div>

                            <div className="mv_user-id">
                                <Fieldset className="mb-6">
                                    <Fieldset.Title h4 my={0}>
                                        Your ID
                                    </Fieldset.Title>
                                    <Fieldset.Subtitle>
                                        This is your user ID within Miah Vai.
                                    </Fieldset.Subtitle>
                                    <Snippet text={user.uid} width="300px" />

                                    <Fieldset.Footer className="">
                                        <Text>
                                            Used when interacting with the
                                            Vercel API.
                                        </Text>
                                    </Fieldset.Footer>
                                </Fieldset>
                            </div>

                            <div className="mv_user-delete">
                                <Fieldset
                                    className="xl:mb-12 md:mb-12"
                                    CardType="error"
                                    fiel
                                >
                                    <Fieldset.Content
                                        itemType="error"
                                        px="24px"
                                        py="24px"
                                    >
                                        <Fieldset.Title h4 my={0}>
                                            Delete Personal Account
                                        </Fieldset.Title>
                                        <Fieldset.Subtitle my="12px">
                                            Permanently remove your Personal
                                            Account and all of its contents from
                                            the Miah Vai platform. This action
                                            is not reversible, so please
                                            continue with caution.
                                        </Fieldset.Subtitle>
                                    </Fieldset.Content>

                                    <Fieldset.Footer
                                        py="12px"
                                        className="flex justify-end items-center py-3"
                                    >
                                        <Button
                                            auto
                                            className="font-bold"
                                            icon={<UserX />}
                                            type="error"
                                        >
                                            Delete personal account
                                        </Button>
                                    </Fieldset.Footer>
                                </Fieldset>
                            </div>
                        </Container>
                    </section>
                </Layout>
            </>
        </>
    );
};

export default ProfileSettings;
