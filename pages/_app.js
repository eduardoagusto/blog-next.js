import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Square</title>
        <link rel="icon" href="./logo.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <main className="my-6 mx-auto p-6 rounded prose md:prose-lg xl:prose-xl">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
