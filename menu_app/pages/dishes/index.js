import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import MenuCategory from "../../comp/MenuCategory";

const Dishes = () => {
    return (
        <>
            <Head>
                <title>Restaurant Name | Menu </title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="menu-container">
                <h1 className="menu-title">Our menu</h1>
                <div className="menu-content">
                    <MenuCategory cat="food" />
                    <MenuCategory cat="drink" />
                </div>
            </div>
        </>
    );
};

export default Dishes;
