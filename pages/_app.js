import Head from "next/head";
import "tailwindcss/tailwind.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Square</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav class="px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap justify-center items-center content-center  mx-auto">
          <a href="/" class="flex items-center">
            <img src="./logo.svg" class="h-6 sm:h-9" alt="Logo" />
          </a>

          <div class=" w-full md:block md:w-auto  " id="navbar-default">
            <ul class="flex flex-col justify-center items-center p-4 md:ml-3 md:flex-row md:space-x-8  md:text-md font-bold place-items-center">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="my-6 mx-auto p-6  bg-stone-800 rounded prose md:prose-lg xl:prose-xl">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
