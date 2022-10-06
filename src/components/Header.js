import React, { useEffect, useRef, useState } from "react";

import QwordsLogo from "../asset/img/qwords-white.png";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavMenu, setIsNavMenu] = useState(false);

  const executeScrollProduct = () =>  document.getElementById('product-section').scrollIntoView({ behavior: 'smooth'})    
  const executeScrollFeatures = () =>  document.getElementById('features-section').scrollIntoView({ behavior: 'smooth'})    
  const executeScrollTestimonials = () =>  document.getElementById('testimonials-section').scrollIntoView({ behavior: 'smooth'})    

  const handleClickOutside = () => {
    setIsNavMenu(false);
  };

  const useOutsideClick = (callback) => {
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

  const ref = useOutsideClick(handleClickOutside);

  const OpenMenu = () => {
    setIsMobile(true);
};

const openNavMenu = () => {
    if(isNavMenu) return setIsNavMenu(false)
    else setIsNavMenu(true);
};

  return (
    <>
      <header>
        <div className="relative bg-white">
          <div className="mx-auto w-full px-4 sm:px-6">
            <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={QwordsLogo}
                    alt="Qwords Hosting"
                  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  onClick={OpenMenu}
                >
                  <span className="sr-only">Open menu</span>
                  {/* <!-- Heroicon name: outline/bars-3 --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden space-x-10 md:flex">
                <div className="relative">
                  <button
                    type="button"
                    className="group inline-flex items-center rounded-md bg-white"
                    aria-expanded="false"
                    onClick={openNavMenu}
                    ref={ref}
                  >
                    <span className="text-gray-500 text-sm font-bold hover:text-gray-900">
                      Services
                    </span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className={`absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 ${isNavMenu ? 'block' : 'hidden'}`}>
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Lorem Ipsum
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Lorem Ipsum
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Lorem Ipsum
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Lorem Ipsum
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Lorem Ipsum
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                          </div>
                        </a>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeScrollProduct}
                  className="text-sm font-bold text-gray-500 hover:text-gray-900"
                >
                  Products
                </button>
                <button
                  onClick={executeScrollFeatures}
                  className="text-sm font-bold text-gray-500 hover:text-gray-900"
                >
                  Features
                </button>
                <button
                  onClick={executeScrollTestimonials}
                  className="text-sm font-bold text-gray-500 hover:text-gray-900"
                >
                  Testimonials
                </button>
              </nav>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="text-gray-900 group inline-flex items-center rounded-md bg-white text-sm font-bold hover:text-gray-700"
                >
                  <span>Contact Us</span>
                  <svg
                    className="ml-4"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`absolute inset-x-0 top-0 origin-top-right transform p-0 transition z-10 ${
              isMobile ? "block" : "hidden"
            }`}
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={QwordsLogo}
                    alt="Qwords Hosting"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setIsMobile(!isMobile)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Lorem Ipsum
                      </span>
                    </a>

                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Lorem Ipsum
                      </span>
                    </a>

                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Lorem Ipsum
                      </span>
                    </a>

                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Lorem Ipsum
                      </span>
                    </a>

                    <a
                      href="#"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Lorem Ipsum
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <button
                    onClick={executeScrollProduct}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Products
                  </button>

                  <button
                    onClick={executeScrollFeatures}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Features
                  </button>

                  <button
                    onClick={executeScrollTestimonials}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Testimonials
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
