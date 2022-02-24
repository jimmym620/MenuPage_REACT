import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <h1>Pending Restaurant</h1>
            <h2>Daily Specials</h2>
            <Link href="/about">
                <a>Chicken Special</a>
            </Link>
        </div>
    );
}
