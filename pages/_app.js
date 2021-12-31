import Head from "next/head";

import { UserSettings } from "../src/contexts/UserSettings";
import { Layout } from "../src/components/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserSettings>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserSettings>
    </>
  );
}

export default MyApp;
