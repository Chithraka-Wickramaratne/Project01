import React from 'react'

export default function LoginPage() {
    return (
        <div className="dark min-h-screen flex flex-col ">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse"></a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default"></div>
                </div>
            </nav>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-black text-center mt-5 mb-5">
                SAKURA HOSPITALS
            </h1>

            <div className="flex flex-1 flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-10">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/HospitalImage.jpg`}
                        alt="Hospital"
                        className="rounded-3xl border-4 border-blue-500 shadow-lg w-full h-auto object-cover transform transition-transform duration-500 hover:translate-x-3 hover:translate-y-3"
                    />
                </div>

                {/* Login Form Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-10">
                    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Login Here</h2>
                        <form>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*****@gmail.com" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700">Login</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600 mt-auto">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Sakura Hospitals
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </div>
    );
}
