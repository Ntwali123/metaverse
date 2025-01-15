import Head from "next/head";

import "../styles/globals.css"

const MyApp = ({Component,pageProps}) => (
    <>
    <Head>
        <title>
          David's MetaVersus
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
    </Head>
        <Component {...pageProps} />
    </>
);
export default MyApp;