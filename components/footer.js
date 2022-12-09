import React from "react";

function Footer() {
  return (
    <>
      <footer className="px-2 sm:px-4 py-9 mt-9 ">
        <div className="container flex flex-wrap flex-col justify-center items-center mx-auto">
          <div>
            <p className="text-gray-400 text-sm">
              Just a little bit study &copy;
            </p>
            <p className="text-gray-400 text-sm">
              by
              <a className="hover:text-white cursor-pointer">
                {" "}
                Eduardo Augusto
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
