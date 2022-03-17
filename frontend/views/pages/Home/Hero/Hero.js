import Link from "next/link";
import Container from "../../../shared/Container/Container";

const Hero = () => {
    return (
        <>
            <section className="mv_home-hero">
                <Container className="xl:py-32 xs:py-6">
                    <h2 className="text-6xl pb-4">Welcome to Miah Vai chat</h2>
                    <p className="text-xl xl:w-3/5 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>

                    <Link href="/login">
                        <a className="border border-slate-500 py-1 px-5 rounded shadow-sm hover:shadow-lg">
                            Login
                        </a>
                    </Link>
                </Container>
            </section>
        </>
    );
};

export default Hero;
