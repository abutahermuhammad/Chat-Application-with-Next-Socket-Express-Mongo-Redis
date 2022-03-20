import { Button, Card, Input } from "@geist-ui/core";
import { Lock, Mail } from "@geist-ui/icons";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";

const LoginForm = () => {
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // States
    const [loging, setLoging] = useState(false);
    const [gLoging, setGLoging] = useState(false);
    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    const {
        loggedin,
        user,
        error,
        success,
        signinWith0Handler,
        signinWithFormHandler,
    } = useAuth();

    const loginHandler = async (e, email, password) => {
        setLoging(true);
        await e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        await signinWithFormHandler(user);
        setLoging(false);
    };

    const Handler0Auth = (method) => {
        signinWithFormHandler();
    };

    return (
        <>
            <section className="mv_login-form min-h-fit">
                <Container className="xl:pt-12 md:pt-10 sm:pt-7">
                    <h4 className="text-6xl text-center mb-5">Log in</h4>
                </Container>

                <Container className="flex justify-center items-center xl:pt-2">
                    <Card className="xl:w-2/6 md:w-3/5 ">
                        <form
                            onSubmit={(e) => loginHandler(e, email, password)}
                        >
                            {success && (
                                <Card type="success" marginBottom={20}>
                                    <Text>{success}</Text>
                                </Card>
                            )}

                            {error && (
                                <Note type="danger" marginBottom={20}>
                                    <Text>{error}</Text>
                                </Note>
                            )}

                            {loggedin && user.email ? (
                                <div className="xl:py-16 md:py-10 sm:py-7 flex flex-col items-center justify-between">
                                    <Loading className="mb-3" />
                                    <p>Redirecting to profile page</p>
                                </div>
                            ) : (
                                <>
                                    <Input
                                        disabled={loging}
                                        className="w-full mb-3"
                                        width={"100%"}
                                        icon={<Mail />}
                                        required
                                        // type="email"
                                        name="email"
                                        placeholder="e.g. example@email.com"
                                        validationMessage="This field is required"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        onBlur={(e) => setEmail(e.target.value)}
                                    />

                                    <Input
                                        disabled={loging}
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
                                        disabled={loging}
                                        className="w-full mb-3"
                                        type="secondary"
                                        // icon={<LogIn />}
                                    >
                                        {loging ? <Loading /> : "Sign in"}
                                    </Button>

                                    {/* Sign in with google */}
                                    <Button
                                        disabled={gLoging}
                                        className="w-full mb-5"
                                        onClick={() => {
                                            setGLoging(true);
                                            signinWith0Handler("google");
                                        }}
                                    >
                                        {gLoging ? (
                                            <Loading />
                                        ) : (
                                            "Login with Gmail"
                                        )}
                                    </Button>

                                    <p className="text-center">
                                        Are you a new user?{" "}
                                        <Link href="/register">
                                            <a>Register an account</a>
                                        </Link>
                                    </p>
                                </>
                            )}
                        </form>
                    </Card>
                </Container>
            </section>
        </>
    );
};

export default LoginForm;
