import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/bowl.jpg" width={120} height={120} />
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
        </nav>
    );
};

export default Navbar;
