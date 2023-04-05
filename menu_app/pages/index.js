import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>John Smith's | Home</title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="main-container">
                <h2>Daily Specials</h2>

                <p>Spinach Lasagne</p>
                <h2>Soup of the day</h2>
                <p>Pumpkin soup</p>
                <Link href="/dishes">
                    <a>
                        <h1>See our menu here</h1>
                    </a>
                </Link>
            </div>
        </>
    );
}
