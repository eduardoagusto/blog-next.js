import React from "react";

function Header() {
  return (
    <>
      <nav class="px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap justify-center items-center content-center mx-auto">
          <a href="/" class="flex items-center">
            <img src="./logo.svg" class="h-6 sm:h-9" alt="Logo" />
          </a>

          <div class=" w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col justify-center items-center p-4 md:ml-3 md:flex-row md:space-x-8 md:text-md font-bold place-items-center">
              {/* <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  About Me
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.linkedin.com/in/eduardo-augusto-gomes-6a5a491b6/"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eduardoagusto"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  GitHub
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0 text-gray-400 hover:text-white"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
