import React from "react";
import useChat from "../../../../hooks/useChat";

const MessageList = ({ message }) => {
    const { messages } = useChat();
    console.log(messages);
    return (
        <>
            {messages?.map((message, i) =>
                message.user?._id === user?.uid ? (
                    <div
                        key={`${message?._id}${i}`}
                        className="w-full relative inline-flex justify-end items-center"
                    >
                        {/* Date */}
                        <Text span className="text-sm ml-auto text-opacity-50">
                            {new Date(Date()).toLocaleString()}
                        </Text>

                        {/* Message */}
                        <Text className="text-right max-w-1/2 px-3 py-1 my-1">
                            {message?.message}
                        </Text>

                        {/* User Avatar */}
                        <Avatar
                            width="28px"
                            height="28px"
                            src={message.user.img}
                            alt={message.user._id}
                            className="border-2 rounded-full"
                        />
                    </div>
                ) : (
                    <div
                        key={`${message?.timestamp}${message?.user._id}`}
                        className="w-full relative inline-flex justify-start items-center"
                    >
                        {/* User Avatar */}
                        <Avatar
                            width="28px"
                            height="28px"
                            src={message.user.img}
                            alt={message.user._id}
                            className="border-2 rounded-full"
                        />

                        {/* Message */}
                        <Text className="text-left px-2 py-0 mx-2 my-1">
                            {message?.message}
                        </Text>

                        {/* Date */}
                        <Text span className="text-sm">
                            {new Date(message?.timestamp).toLocaleString()}
                        </Text>
                    </div>
                )
            )}
        </>
    );
};

export default React.memo(MessageList);
