import React from "react";
import Navbar from "./progressBar";

function Header() {
  return (
    <>
      <nav className="px-2 sm:px-4 py-2 w-full">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <div className="w-full md:block md:w-auto">
            <ul className="flex flex-col justify-center items-center p-4 md:flex-row md:space-x-8">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 md:border-0 md:p-0 "
                >
                  <img
                    src="logo.svg"
                    className="h-9 animate-spin-slow"
                    alt="Logo da Square"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/eduardo-augusto-gomes-6a5a491b6/"
                  target="_blank"
                  className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white md:text-base font-bold"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eduardoagusto"
                  target="_blank"
                  className="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white md:text-base font-bold"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Navbar />
    </>
  );
}

export default Header;
