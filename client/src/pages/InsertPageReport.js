/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function InsertPage() {
  //states for the form fields

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [test, setTest] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const backToReport = () => {
    navigate("/report");
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
      console.log(
        fullName, 
        age, 
        test, 
        mobile, 
        email);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav Bar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Back icon */}
          
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              onClick={backToReport}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SAKURA HOSPITALS
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Form */}
      <form className="max-w-200 mx-60 p-6 bg-white shadow-md rounded-md mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-gray-900 dark:text-black font-bold"
          >
            Full Name
          </label>
          <input
          onChange={(e)=>setFullName(e.target.value)}
            type="text"
            id="name"
            name="name"
            required
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block mb-2 text-sm text-gray-900 dark:text-black font-bold"
          >
            Age
          </label>
          <input
          onChange={(e)=>setAge(e.target.value)}
            type="text"
            id="age"
            name="age"
            required
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="testName"
            className="block mb-2 text-sm text-gray-900 dark:text-black font-bold"
          >
            Test Name
          </label>
          <input
          onChange={(e)=>setTest(e.target.value)}
            type="text"
            id="testNaame"
            name="testName"
            required
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block mb-2 text-sm text-gray-900 dark:text-black font-bold"
          >
            Mobile Number
          </label>
          <input
          onChange={(e)=>setMobile(e.target.value)}
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-gray-900 dark:text-black font-bold"
          >
            E-mail
          </label>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            htmlFor="submit"
            className="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Insert
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="mt-auto p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Sakura Hospitals
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
