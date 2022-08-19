/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.sass";
import "swiper/css/bundle";

import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Annetka Hair</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
