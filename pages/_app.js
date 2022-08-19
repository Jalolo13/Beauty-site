/* eslint-disable @next/next/no-page-custom-font */

import Head from "next/head";
import Layout from "../components/Layout";
import "swiper/css/bundle";
import "../styles/globals.sass";

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
