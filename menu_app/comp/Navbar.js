import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <section className="links">
                <div className="logo">
                    <Image src="/bowl.jpg" width={60} height={60} />
                </div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/dishes">
                    <a>Menu</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </section>
            <section className="headings">
                <h1>John Smith's</h1>
                <h1>International Cuisine</h1>
            </section>
        </nav>
    );
};

export default Navbar;
