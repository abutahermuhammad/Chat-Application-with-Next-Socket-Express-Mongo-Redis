import { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { ChatContext } from "../contexts/ChatProvider";

const messagedata = [
    {
        _id: "asdfasdf",
        message: "Hi",
        user: "other",
        timestamp: "1647765432549",
    },
    {
        _id: "asdf46asdf",
        message: "Hello",
        user: "rdRucfXsQZgXHAgFNlENnxqgFey1",
        timestamp: "1647765432556",
    },
    {
        _id: "asdfa36sdf",
        message: "How are you doing?",
        user: "rdRucfXsQZgXHAgFNlENnxqgFey1",
        timestamp: "1647765432578",
    },
    {
        _id: "asdfa23sdf",
        message: "I'm doing great",
        user: "other",
        timestamp: "1647765432589",
    },
    {
        _id: "asdfasd24f",
        message: "What about you?",
        user: "other",
        timestamp: "1647765432599",
    },
];

/**
 * Socket Initialization
 *
 * Initialing Socket outside of the component to avoid unnecessary rendering.
 */
const socket = io.connect("http://localhost:5000");

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [roomID, setRoomID] = useState("");
    const [roomPass, setRoomPass] = useState("");
    const [verifiedUser, setVerifiedUser] = useState(true);

    /**
     * This hook runs socket event after first page load.
     */
    useEffect(() => {
        socket.on("message", (message) => {
            // let tempStack = messages;
            // console.log("Old STACK", tempStack);
            // console.log("NEW MESSAGE", messages);
            // tempStack.push(message);
            setMessages([...messages, message]);
            // console.log("NEW STACK", tempStack);
            updateLocalStorage([...messages, message]);
        });
    });
    useEffect(() => {
        console.log("Re-run");
    }, []);

    console.log("MESSAGE STACK", messages);

    useEffect(() => {
        let messages = JSON.parse(localStorage.getItem("mesages"));

        if (messages) setMessages(messages);
    }, []);
    // useEffect(() => {
    //     localStorage.setItem("mesages", JSON.stringify(messages) || []);
    // }, [messages.length]);

    const updateLocalStorage = (msg) => {
        localStorage.setItem("mesages", JSON.stringify(msg));
    };

    /**
     * Connect to new room
     * @param {*} e
     * @param {*} senderID
     * @param {*} message
     */
    const connectRoom = (room) => {
        console.log(room);
    };

    /**
     *
     * @param {*} e
     * @param {*} message
     */
    const sendNewMessage = async (
        e,
        timestamp,
        senderId,
        senderPhoto,
        message
    ) => {
        e.preventDefault();

        // New Message Object
        let newMessage = {
            _id: "asdf".toUpperCase(),
            timestamp,
            user: {
                _id: senderId,
                img: senderPhoto,
            },
            message,
        };
        // console.log(newMessage);
        await socket.emit("message", newMessage);
    };

    return {
        messages,
        connectRoom,
        sendNewMessage,
        roomPass,
        setRoomPass,
        verifiedUser,
    };
};

const useChat = () => {
    return useContext(ChatContext);
};
export default useChat;
