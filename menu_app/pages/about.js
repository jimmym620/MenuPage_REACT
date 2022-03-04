import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Restaurant Name | About </title>
                <meta name="keywords" content="food" />
            </Head>
            <div className="main-container white-box">
                <h1>About us</h1>
                <p>This restaurant was opened in 1969 by John Smith</p>
            </div>
        </>
    );
};

export default About;
