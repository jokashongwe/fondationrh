import React, { useState, useEffect } from "react";

// import header logo
import LogoWhite from "../assets/images/logo-white.png";
import LogoDark from "../assets/images/logo-dark.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header className="header">
      <div
        className={`${header ? "bg-white py-1 shadow-lg" : "bg-transparent py-1"
          } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* header menu */}
          <div className={`${header ? "text-primary w-full" : "text-white w-full"}`}>
            {/* <ul className="flex items-center gap-x-6 font-tertiary text-[15px] uppercase tracking-[1.5px] lg:gap-x-8">
              <a href="/about" className="transition hover:text-accent">
                A Propos
              </a>
              <a href="/rooms" className="transition hover:text-accent">
                Services
              </a>
              <a href="/restaurants" className="transition hover:text-accent">
                Gallérie
              </a>
              <a href="/spa" className="transition hover:text-accent">
                évènements
              </a>
              <a href="/contact" className="transition hover:text-accent">
                Contact
              </a>
              <button className="btn btn-primary btn-sm mx-auto rounded-lg">
                Faire un don
              </button>
            </ul> */}


            <nav >
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {header ? (
                  <img src={LogoDark} alt="header logo" className="w-[120px]" />
                ) : (
                  <img src={LogoWhite} alt="header logo" className="w-[120px]" />
                )}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Ouvrir le menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a href="/" className={`text-tertiary`}>Accueil</a>
                    </li>
                    <li>
                      <a href="#" className={` uppercase py-2 px-3 ${header ? "text-gray-900": "text-white"} text-tertiary  md:border-0 md:hover:text-yellow-700 md:p-0`}>A PROPOS</a>
                    </li>
                    <li>
                      <a href="#" className={` uppercase py-2 px-3 ${header ? "text-gray-900": "text-white"} text-tertiary  md:border-0 md:hover:text-yellow-700 md:p-0`}>NOS AXES</a>
                    </li>
                    <li>
                      <a href="#" className={` uppercase py-2 px-3 ${header ? "text-gray-900": "text-white"} text-tertiary  md:border-0 md:hover:text-yellow-700 md:p-0`}>Gallérie Photos</a>
                    </li>
                    <li>
                      <a href="#" className={` uppercase py-2 px-3 ${header ? "text-gray-900": "text-white"} text-tertiary  md:border-0 md:hover:text-yellow-700 md:p-0`}>évènements</a>
                    </li>
                    <li>
                      <a href="#" className={` uppercase py-2 px-3 ${header ? "text-gray-900": "text-white"} text-tertiary  md:border-0 md:hover:text-yellow-700 md:p-0`}>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
