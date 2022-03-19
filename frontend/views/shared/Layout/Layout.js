import { Page } from "@geist-ui/core";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ className, children }) => {
    return (
        <>
            <Page>
                {/* Webpage Navigation */}
                <Page.Header className="mv_main-menu">
                    <Navigation />
                </Page.Header>

                {/* Webpage Body Content */}
                <Page.Body>
                    <main
                        className={`mv_page mv_page_normal ${
                            className && className
                        }`}
                    >
                        {children}
                    </main>
                </Page.Body>

                {/* Webpage Footer */}
                <Page.Footer>
                    <Footer />
                </Page.Footer>
            </Page>
        </>
    );
};

export default Layout;
