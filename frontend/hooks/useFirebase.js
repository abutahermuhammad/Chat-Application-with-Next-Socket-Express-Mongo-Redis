import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    getIdToken,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { initializeAuthentication } from "../config/firebase.config";

// Firebase Authentication Initializing.
initializeAuthentication();

const useFirebase = () => {
    const [loggedin, setLoggedin] = useState(false);
    const [role, setRole] = useState("admin");
    const [user, setUser] = useState({}); // User state
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("df");
    const [message, setMessage] = useState("df"); // Warning message state.
    // User Auth
    const auth = getAuth();

    /**
     * Auth0 Handler
     */
    const signinWith0Handler = (type) => {
        let provider0;

        if (type === "google") {
            provider0 = new GoogleAuthProvider(); // Google Provider
        } else if (type === "github") {
            provider0 = new GithubAuthProvider(); // Github Provider
        } else if (type === "facebook") {
            provider0 = new FacebookAuthProvider(); // Facebook Provider
        }

        // Sign in with popup
        signInWithPopup(auth, provider0)
            .then(async (result) => {
                setUser(result.user);
                saveUser(
                    result?.user?.uid,
                    result?.user?.displayName,
                    result?.user?.email,
                    result?.user?.photoURL
                );
                setLoggedin(true);
                userRoleUpdate(result.user.email);
                // Messages
                setError("");
                setSuccess("Successfully signed in!");
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);
            });
    };

    /**
     * Signin Form Handler
     */
    const signinWithFormHandler = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((result) => {
                setUser(result.user);
                setLoggedin(true);
                userRoleUpdate(result.user.email);
                setError("");
                setSuccess("Signed in successfully");
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);
            });
    };

    /**
     * Signup Form Handler
     */
    const signupWithFormHandler = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((result) => {
                accountUpdateHandler(values); // Updating the account
                saveUser(
                    result?.user?.uid,
                    result?.user?.displayName,
                    result?.user?.email,
                    result?.user?.photoURL
                ); // Saving user data to the database.
                setUser(result.user); // Updating the user state.
                setLoggedin(true); // Updating the logged in state.
                userRoleUpdate(result.user.email);
                setError("");
                setSuccess("Account created successfully");
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);
            });
    };

    /**
     * Account Info Update
     */
    const accountUpdateHandler = (values) => {
        const info = {
            displayName: values.displayName,
        };

        updateProfile(auth.currentUser, info);
    };

    /**
     * Sign out Handler
     */
    const signoutHandler = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setLoggedin(false);
                setError("");
                setSuccess("Successfully Sign out");
            })
            .catch((error) => {
                setSuccess(error.message);
                setError("");
            });
    };

    /**
     * saveUser
     *
     * @param {*} values
     */
    const saveUser = (uid, displayName, email, photoURL) => {
        const user = {
            displayName,
            email,
            photoURL,
            guid: uid,
            role: "visitor",
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("_token")}`,
            },
            body: JSON.stringify(user),
        });
    };

    /**
     * userRoleUpdate
     *
     * @param {*} values
     */
    const userRoleUpdate = (email) => {
        console.log(email);
        fetch(`${process.env.REACT_APP_API_URI}/user?email=${email}&limit=1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("_token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("roleD", data);
                if (data[0]?.role === "admin") {
                    setRole("admin");
                } else {
                    setRole("visitor");
                }

                console.log("role", role);
            })
            .catch((err) => console.log("erros: ", err));
    };

    /**
     * User Auth State Observer
     */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user).then((idToken) =>
                    localStorage.setItem("_token", idToken)
                ); // Getting & Saving IdToken.

                // Updateing the user.
                setUser(user);
                setLoggedin(true);
            } else {
                setUser({});
                localStorage.removeItem("_token");
                setLoggedin(false);
            }
        });

        return () => unsubscribe;
    }, []);

    // Function Return
    return {
        auth,
        user,
        loggedin,
        role,
        message,
        error,
        success,
        signupWithFormHandler,
        signinWithFormHandler,
        signinWith0Handler,
        signoutHandler,
    };
};

export default useFirebase;
