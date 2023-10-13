import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}