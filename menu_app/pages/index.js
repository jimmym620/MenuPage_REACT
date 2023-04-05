import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Restaurant Name | Home</title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="main-container white-box">
                <h1>Restaurant Name</h1>
                <h2>Daily Specials</h2>

                <p>Spinach Lasagne</p>
                <h3>Soup of the day</h3>
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
