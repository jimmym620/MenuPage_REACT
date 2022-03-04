import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Restaurant Name | Home</title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="main-container white-box">
                <h1>Restaurant Name Here</h1>
                <h2>Daily Specials</h2>

                <p>Spinach Lasagne</p>
                <h3>Soup of the day</h3>
                <p>Pumpkin soup</p>
            </div>
        </>
    );
}
