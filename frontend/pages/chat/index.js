/** @format */

import useFirebase from "../../hooks/useFirebase";
import ChatBox from "../../views/pages/chat/ChatBox/ChatBox";
import Layout from "../../views/shared/Layout/Layout";

export const Chat = () => {
    const { user, signinWith0Handler } = useFirebase();

    return (
        <>
            <Layout className="mv_page-chat flex items-center" login={true}>
                {/* ChatBox */}
                <ChatBox />
            </Layout>
        </>
    );
};

export default Chat;
