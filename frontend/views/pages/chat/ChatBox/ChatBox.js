import { Avatar, Button, Card, Fieldset, Input, Text } from "@geist-ui/core";
import { Send } from "@geist-ui/icons";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useChat from "../../../../hooks/useChat";
import Container from "../../../shared/Container/Container";

const ChatBox = () => {
    const { user } = useAuth();
    const { messages, sendNewMessage } = useChat();
    const [thisMessage, setThisMessage] = useState("");

    // Chat Renderer
    const chatRender = () => {
        return messages?.map((message, i) =>
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
        );
    };

    return (
        <>
            <section className="mv_chatbox mt-24 mb-4 w-full">
                <Container>
                    <Fieldset>
                        <Fieldset.Content>
                            <Fieldset.Title>ChatBox</Fieldset.Title>
                            <Fieldset.Subtitle>
                                Conversations will be removed within 1 hour
                            </Fieldset.Subtitle>

                            <Card className="mv_chat-area">
                                <Card.Body className="xl:h-[20rem] lg:h-[20rem]">
                                    {chatRender()}
                                </Card.Body>

                                <Card.Footer>
                                    <form
                                        className="w-full flex justify-between items-center"
                                        onSubmit={(e) => {
                                            sendNewMessage(
                                                e,
                                                Date(),
                                                user.uid,
                                                user.photoURL,
                                                thisMessage
                                            );
                                            setThisMessage("");
                                        }}
                                    >
                                        <Input
                                            placeholder="Your message"
                                            padding="9px"
                                            // className="w-75"
                                            width="100%"
                                            pl="0"
                                            value={thisMessage}
                                            onChange={(e) =>
                                                setThisMessage(e.target.value)
                                            }
                                            required
                                        />

                                        <Button
                                            // onClick={(e) => {
                                            //     sendNewMessage(
                                            //         e,
                                            //         Date(),
                                            //         user.uid,
                                            //         user.photoURL,
                                            //         thisMessage
                                            //     );
                                            //     setThisMessage("");
                                            // }}
                                            htmlType="submit"
                                            type="secondary"
                                            icon={<Send />}
                                        />
                                    </form>
                                </Card.Footer>
                            </Card>
                        </Fieldset.Content>
                    </Fieldset>
                </Container>
            </section>
        </>
    );
};

export default ChatBox;
