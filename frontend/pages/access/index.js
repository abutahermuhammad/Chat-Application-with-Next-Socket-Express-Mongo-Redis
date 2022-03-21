import { Button, Card, Input, Loading, Text } from "@geist-ui/core";
import { Compass, Loader, Lock } from "@geist-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import Container from "../../views/shared/Container/Container";
import Layout from "../../views/shared/Layout/Layout";

const Access = () => {
    const router = useRouter();
    const { user, loggedin } = useAuth();
    const { connectRoom } = useChat();
    const [password, setPassword] = useState("");
    const [roomID, setRoomID] = useState("");
    const [connecting, setConnecting] = useState(false);

    const connectionHandler = async (e, roomID, password) => {
        setConnecting(true);
        await e.preventDefault();

        const room = {
            id: roomID,
            pass: password,
        };
        connectRoom(room);

        setConnecting(false);
    };

    return router.isFallback ? (
        <Layout>
            <Container>
                <Loader />
            </Container>
        </Layout>
    ) : (
        <>
            <Layout className="mv_login flex justify-center items-center bg-c-1">
                <section className="mv_login-form min-h-fit">
                    <Container className="xl:pt-2 mb-3">
                        <Card className="xl:w-96 md:w-96 shadow-xl">
                            <form
                                onSubmit={(e) =>
                                    connectionHandler(e, roomID, password)
                                }
                                // className="xl:w-96 md:w-96 "
                            >
                                <>
                                    <h4 className="text-3xl text-center mb-8">
                                        Join in a Chat
                                    </h4>
                                    <Input
                                        disabled={connecting}
                                        className="w-full mb-3"
                                        width={"100%"}
                                        icon={<Compass />}
                                        required
                                        // type="email"
                                        name="roomid"
                                        placeholder="e.g. MV-001"
                                        validationMessage="This field is required"
                                        value={roomID}
                                        onChange={(e) =>
                                            setRoomID(e.target.value)
                                        }
                                        onBlur={(e) =>
                                            setRoomID(e.target.value)
                                        }
                                    />

                                    <Input
                                        disabled={connecting}
                                        width={"100%"}
                                        className="w-full mb-4"
                                        icon={<Lock />}
                                        required
                                        name="password"
                                        placeholder="******"
                                        validationMessage="This field is required"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        onBlur={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />

                                    {/* Login Button */}
                                    <Button
                                        disabled={connecting}
                                        className="w-full mb-8"
                                        type="secondary"
                                        htmlType="submit"
                                        // icon={<LogIn />}
                                        onClick={(e) =>
                                            connectionHandler(
                                                e,
                                                roomID,
                                                password
                                            )
                                        }
                                    >
                                        {connecting ? <Loading /> : "Connect"}
                                    </Button>

                                    <Text className="text-center text-sm">
                                        {" "}
                                        To join in a room you have to verify
                                        your access.
                                    </Text>
                                </>
                            </form>
                        </Card>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Access;
