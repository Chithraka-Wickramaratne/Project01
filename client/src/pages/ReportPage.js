import React from "react";

export default function ReportPage() {
  return (
    <div>
      {/* Nav Bar*/}

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SAKURA HOSPITALS
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Patients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Employee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Medical Staff
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-black text-center mt-5 mb-5">
        SAKURA HOSPITALS
      </h1>

      {/* Table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto max-w-6xl mt-8">
    <table class="w-full text-sm text-left rtl:text-right text-black h-1/2">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-950 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">Full Name</th>
                <th scope="col" class="px-6 py-3">Age</th>
                <th scope="col" class="px-6 py-3">Test</th>
                <th scope="col" class="px-6 py-3">ID</th>
                <th scope="col" class="px-6 py-3">Mobile</th>
                <th scope="col" class="px-6 py-3">E-mail</th>
                <th scope="col" class="px-6 py-3">Report</th>
            </tr>
        </thead>
        <tbody class="bg-gray-100">
            <tr class="border-b">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                Saman Perera 
                </th>
                <td class="px-6 py-4">54</td>
                <td class="px-6 py-4">Abdominal CT Scan</td>
                <td class="px-6 py-4">001</td>
                <td class="px-6 py-4">071-6754321</td>
                <td class="px-6 py-4">samanperera@gmail.com</td>
                <td class="px-6 py-4">
                  {/* Download Pdf */}
                  <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Download Report
                </a>
                </td>
            </tr>
            <tr class="border-b">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                  Nimal Hettiarachchi  
                </th>
                <td class="px-6 py-4">47</td>
                <td class="px-6 py-4">Heart MRI</td>
                <td class="px-6 py-4">002</td>
                <td class="px-6 py-4">076-8953723</td>
                <td class="px-6 py-4">nimalhettiarachchi@gmail.com</td>
                <td class="px-6 py-4">
                  {/* Download Pdf */}
                  <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Download Report
                </a>
                </td>
            </tr>
            <tr class="border-b">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                  Kamal Amarasiri
                </th>
                <td class="px-6 py-4">36</td>
                <td class="px-6 py-4">PET Scan</td>
                <td class="px-6 py-4">003</td>
                <td class="px-6 py-4">078-3651377</td>
                <td class="px-6 py-4">kamalamarasiri@gmail.com</td>
                <td class="px-6 py-4">
                  {/* Download Pdf */}
                  <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Download Report
                </a>
                </td>
            </tr>
            <tr class="border-b">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                   Amal Bogahawatte 
                </th>
                <td class="px-6 py-4">29</td>
                <td class="px-6 py-4">Vitamin A Blood Test</td>
                <td class="px-6 py-4">004</td>
                <td class="px-6 py-4">074-3753957</td>
                <td class="px-6 py-4">amalbogahawatte@gmail.com</td>
                <td class="px-6 py-4">
                  {/* Download Pdf */}
                  <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Download Report
                </a>
                </td>
            </tr>
        </tbody>
    </table>

</div>
{/* Buttons*/}
<div className="flex justify-center items-center mt-10">
  <table className="text-sm text-left rtl:text-right text-black">
    <tr>
    <td>
  <button
    type="button"
    className="py-2.5 px-12 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none dark:bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-gray-200 dark:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    Add
  </button>
</td>
<td>
  <button
    type="button"
    className="py-2.5 px-10 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none dark:bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-gray-200 dark:text-gray-900 dark:border-gray-600 text- dark:hover:text-white dark:hover:bg-gray-700"
  >
    Search
  </button>
</td>
<td>
  <button
    type="button"
    className="py-2.5 px-10 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none dark:bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 bg-gray-200 dark:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    Update
  </button>
</td>
<td>
  <button
    type="button"
    className="py-2.5 px-10 me-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    Delete
  </button>
</td>

    </tr>
  </table>
</div>


    </div>
  );
}
