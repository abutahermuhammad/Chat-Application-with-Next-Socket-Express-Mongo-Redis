import { useState } from "react";

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

const useChat = () => {
    const [messages, setMessages] = useState(messagedata);
    const [roomID, setRoomID] = useState("");
    const [roomPass, setRoomPass] = useState("");
    const [verifiedUser, setVerifiedUser] = useState(true);

    // Socket Initialization
    // const socket = io.connect("http://localhost:5000");

    // useEffect(() => {
    //     socket.on("message", ({ _id, timestamp, sender, message }) => {
    //         setMessages([...messages, { _id, timestamp, sender, message }]);
    //     });
    // });

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
    const sendNewMessage = (e, senderID, message) => {
        e.preventDefault();

        // Previous Messages
        // let tempMessages = messages;

        // New Message Object
        let newMessage = {
            _id: "asdf".toUpperCase(),
            timestamp: new Date(),
            message,
            user: senderID,
        };

        // Adding new message to the temp stack.
        // tempMessages.push(newMessage);

        // Re-Initializing message list
        // setMessages(tempMessages);
        socket.emit("message", newMessage);
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

export default useChat;
