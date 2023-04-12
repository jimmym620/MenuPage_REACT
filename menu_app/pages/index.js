import Head from "next/head";
import Link from "next/link";
import dishes from "../data/dish-data.json";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>John Smith's | Home</title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="main-container">
                <h2>Daily Specials</h2>
                {dishes.menu
                    .filter((item) => item.name == "spinach lasagne")
                    .map((filteredItem) => {
                        return (
                            <div key={filteredItem.name}>
                                <h3 className="capitalise">
                                    {filteredItem.name}
                                </h3>
                                <h4>{filteredItem.price}</h4>
                                <Image
                                    src={filteredItem.thumbnail}
                                    alt={filteredItem.altText}
                                    width={210}
                                    height={135}
                                />
                            </div>
                        );
                    })}

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
