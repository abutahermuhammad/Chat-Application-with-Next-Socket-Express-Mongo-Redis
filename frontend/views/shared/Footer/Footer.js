import { Text } from "@geist-ui/core";

const Footer = () => {
    return (
        <footer className="py-4 fixed right-0 left-0 bottom-0">
            <Text className="text-center text-sm">
                All rights reserved. Made with love by{" "}
                <a href="https://at-mah.vercel.app" target="_blank">
                    Abu Taher Muhammad
                </a>
            </Text>
        </footer>
    );
};

export default Footer;
