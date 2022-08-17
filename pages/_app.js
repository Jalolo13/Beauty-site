/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Annetka Hair</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
