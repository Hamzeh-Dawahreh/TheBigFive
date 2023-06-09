import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import md5 from "md5";
import "../assets/Styles/navbar.css";
export default function Navbar() {
  const [userData, setData] = useState(null);
  const [userAvatar, setAvatar] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (userData) {
      const emailHash = md5(userData.email); // Calculate the MD5 hash of the email
      const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`; // Gravatar URL with the email hash
      console.log(gravatarUrl); // Use this URL to display the avatar image
      setAvatar(gravatarUrl);
    }
  }, [userData]);

  return (
    <>
      <nav className="bg-transparent border-gray-200 dark:bg-transparent   w-full bg-opacity-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" flex gap-5">
            <Link to="/" className="logo-container flex items-center sm:w-auto">
              <img
                src="../src/assets/Images/logo.svg"
                className="h-8 mr-3"
                alt="LOGO"
              />
              <span className="self-center text-2xl  whitespace-nowrap dark:text-white sm:w-auto sm:text-base md:text-2xl">
                Students{" "}
                <span className="text-gray-500 font-thin sm:text-base md:text-2xl">
                  Inc.
                </span>
              </span>
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="search-input bg-[#252A40] w-full sm:w-64 px-4 py-2 rounded-lg border-none"
              />
              <img
                src="../src/assets/Images/search.png"
                alt="Search"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 sm:w-auto cursor-pointer"
              />
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="ul-container  w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="text-black tracking-wider font-light flex flex-col md:items-center sm:items-start   p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700  dark:text-black ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Career Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Major Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  School Library
                </a>
              </li>
              <li>
                <img
                  src="../src/assets/Images/bell.png"
                  alt=""
                  className="cursor-pointer"
                />
              </li>
              <li>
                <div className="flex">
                  <img
                    src={userAvatar}
                    alt=""
                    className="w-8 h-8 rounded-full mt-2"
                  />
                  <div className="flex flex-col ml-4 text-white">
                    <small className="text-[#55597D] font-light">WELCOME</small>
                    {userData && <>{userData.name} ▼</>}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
