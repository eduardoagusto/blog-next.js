import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { ScrollToTop } from "../components/returnoToTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col min-h-screen h-64">
        <Head>
          <title>Square</title>
          <link
            rel="shortcut icon"
            href="./logo.svg?v=2"
            type="image/x-icon"
          ></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap" />
        </Head>
        <Header />
        <ScrollToTop />
        <main className="mb-7 mx-auto p-6 rounded prose md:prose-lg xl:prose-xl flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
