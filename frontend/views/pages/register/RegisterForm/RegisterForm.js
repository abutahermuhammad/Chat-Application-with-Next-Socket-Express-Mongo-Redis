import { Alert, Button, Spinner, TextInput } from "evergreen-ui";
import Link from "next/link";
import { useState } from "react";
import Container from "../../../shared/Container/Container";

const RegisterForm = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // States
    const [loging, setLoging] = useState(false);
    const [gLoging, setGLoging] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();

        setLoging(true);
        console.log(image, name, email);
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
                    <form
                        className="xl:w-2/6 md:w-3/5 p-7 shadow-xl "
                        onSubmit={loginHandler}
                    >
                        {success && (
                            <Alert
                                intent="success"
                                title="Successfully signed in!"
                                marginBottom={20}
                            />
                        )}

                        {error && (
                            <Alert
                                intent="danger"
                                title="Something wrong. Can not sign in now!"
                                marginBottom={20}
                            />
                        )}

                        {success ? (
                            <div className="xl:py-16 md:py-10 sm:py-7 flex flex-col items-center justify-between">
                                <Spinner className="mb-3" size={25} />
                                <p>Redirecting to profile page</p>
                            </div>
                        ) : (
                            <>
                                <TextInput
                                    disabled={loging}
                                    style={{ width: "100%" }}
                                    className="w-full mb-4"
                                    isInvalid={false}
                                    required
                                    name="fullname"
                                    label="Ful name"
                                    placeholder="e.g. John Doe"
                                    validationMessage="This field is required"
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={(e) => setName(e.target.value)}
                                />

                                <TextInput
                                    disabled={loging}
                                    style={{ width: "100%" }}
                                    className="w-full mb-3"
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
                </Container>
            </section>
        </>
    );
};

export default RegisterForm;
