import Link from "next/link";
import {CgArrowLongLeft} from "react-icons/cg";

const BackButton = () => {
    return (
        <Link href="/dishes" >
            <a className="item-menu-btn">
                <CgArrowLongLeft />
            </a>
        </Link>
    );
};

export default BackButton;
