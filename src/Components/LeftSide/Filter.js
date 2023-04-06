import React, { useState } from 'react';

const Filter = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className=" w-10 bg-blue-400">
   
                      
                          <div className=" ">
                            <button
                              aria-label="Open Menu"
                              title="Open Menu"
                              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline focus:bg-deep-purple-50"
                              onClick={() => setIsMenuOpen(true)}
                            >
                              <svg className="w-5 " viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                              </svg>
                            </button>
                            {isMenuOpen && (
                              <div className=" relative pl-5 top-0 right-0 w-4/7  ">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <a
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                      >
                                      
                                      <h2 className='text-2xl text-white'>KUKS FRESH</h2>
                                       
                                      </a>
                                    </div>
                                    <div className='text-white'>
                                      <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="  lg:flex p-2 -mt-2  transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <nav>
                                    <ul className="space-y-4 text-white">
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Home
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/services"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                         Services
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/blog"
                                          aria-label="Product pricing"
                                          title="Product pricing"
                                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Blog
                                        </a>
                                      </li>
                                      
                                      <li>
                                        <a
                                          href="/login"
                                          aria-label="login"
                                          title="login"
                                          className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Signin
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/signup"
                                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide   transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-rose-500 text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                          aria-label="Sign up"
                                          title="Sign up"
                                        >
                                          Sign up
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            )}
                          </div>
                          </div>
           
    );
};

export default Filter;