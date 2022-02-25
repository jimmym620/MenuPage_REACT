import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Restaurant Name | Home</title>
                <meta name="keywords" content="food"/>
            </Head>
            <div>
                <h1>Restaurant Name Here</h1>
                <h2>Daily Specials</h2>
                <Link href="/about">
                    <a>Chicken Special</a>
                </Link>
            </div>
        </>
    );
}
