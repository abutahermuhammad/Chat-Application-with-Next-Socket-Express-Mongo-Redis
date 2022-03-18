import { Alert, Button, Spinner, TextInput } from "evergreen-ui";
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
                    <form
                        className="xl:w-2/6 md:w-3/5 p-7 shadow-xl "
                        onSubmit={(e) => loginHandler(e, email, password)}
                    >
                        {success && (
                            <Alert
                                intent="success"
                                title={success}
                                marginBottom={20}
                            />
                        )}

                        {error && (
                            <Alert
                                intent="danger"
                                title={error}
                                marginBottom={20}
                            />
                        )}

                        {loggedin && user.email ? (
                            <div className="xl:py-16 md:py-10 sm:py-7 flex flex-col items-center justify-between">
                                <Spinner className="mb-3" size={25} />
                                <p>Redirecting to profile page</p>
                            </div>
                        ) : (
                            <>
                                <TextInput
                                    disabled={loging}
                                    style={{ width: "100%" }}
                                    className="w-full p-2 text-base mb-3"
                                    isInvalid={false}
                                    required
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="e.g. example@email.com"
                                    validationMessage="This field is required"
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={(e) => setEmail(e.target.value)}
                                />

                                <TextInput
                                    disabled={loging}
                                    style={{ width: "100%" }}
                                    className="w-full mb-4"
                                    isInvalid={false}
                                    required
                                    type="password"
                                    name="password"
                                    label="Password"
                                    placeholder="******"
                                    validationMessage="This field is required"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    onBlur={(e) => setPassword(e.target.value)}
                                />

                                {/* Login Button */}
                                <Button
                                    disabled={loging}
                                    className="w-full mb-3"
                                    type="submit"
                                >
                                    {loging ? <Spinner size={16} /> : "Sign in"}
                                </Button>

                                {/* Sign in with google */}
                                <Button
                                    disabled={gLoging}
                                    className="w-full mb-5 font-bold"
                                    onClick={() => {
                                        setGLoging(true);
                                        signinWith0Handler("google");
                                    }}
                                >
                                    {gLoging ? (
                                        <Spinner size={16} />
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
                </Container>
            </section>
        </>
    );
};

export default LoginForm;
