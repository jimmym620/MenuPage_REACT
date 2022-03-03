import Link from "next/link";

const BackButton = () => {
    return (
        <Link href="/dishes">
            <a className="item-menu-btn">Back</a>
        </Link>
    );
};

export default BackButton;
