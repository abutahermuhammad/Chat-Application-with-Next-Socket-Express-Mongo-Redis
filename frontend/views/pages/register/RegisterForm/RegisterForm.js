import { Button, Card, Input, Spinner } from "@geist-ui/core";
import { Lock, Mail, User } from "@geist-ui/icons";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Container from "../../../shared/Container/Container";

const RegisterForm = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // States
    const [loging, setLoging] = useState(false);
    const [gLoging, setGLoging] = useState(false);
    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    const {
        loggedin,
        user,
        message,
        error,
        success,
        signinWith0Handler,
        signupWithFormHandler,
    } = useAuth();

    const registerHandler = (e, name, email, password) => {
        e.preventDefault();
        setLoging(true);

        const user = {
            name: name,
            email: email,
            password: password,
        };
        signupWithFormHandler(user);
        setLoging(false);
    };

    return (
        <>
            <section className="mv_login-form min-h-fit">
                <Container className="xl:pt-12">
                    <h4 className="text-6xl text-center mb-5">
                        Create a new account
                    </h4>
                </Container>

                <Container className="flex justify-center items-center xl:pt-2">
                    <Card className="xl:w-2/6 md:w-3/5 shadow-xl ">
                        <form
                            onSubmit={(e) =>
                                registerHandler(e, name, email, password)
                            }
                        >
                            {success && (
                                <Note
                                    type="success"
                                    title={success}
                                    marginBottom={20}
                                />
                            )}

                            {error && (
                                <Note
                                    type="danger"
                                    title={error}
                                    marginBottom={20}
                                />
                            )}
                            {message && (
                                <Note
                                    type="danger"
                                    title={message}
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
                                    <Input
                                        disabled={loging}
                                        width="100%"
                                        className="w-full mb-4"
                                        required
                                        icon={<User />}
                                        name="fullname"
                                        placeholder="e.g. John Doe"
                                        validationMessage="This field is required"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        onBlur={(e) => setName(e.target.value)}
                                    />

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
                                        {loging ? (
                                            <Spinner size={16} />
                                        ) : (
                                            "Register"
                                        )}
                                    </Button>

                                    {/* Sign in with google */}
                                    <Button
                                        disabled={gLoging}
                                        className="w-full mb-5"
                                    >
                                        {gLoging ? (
                                            <Spinner size={16} />
                                        ) : (
                                            "Login with Gmail"
                                        )}
                                    </Button>

                                    <p className="text-center">
                                        Are you an old user?{" "}
                                        <Link href="/login">
                                            <a>sign in</a>
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

export default RegisterForm;
