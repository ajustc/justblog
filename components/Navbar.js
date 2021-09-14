import { useState } from "react";
import Container from "./Container";
import Link from "next/link";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button
              onClick={() => {
                setOffcanvas(!offcanvas);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12">
            <Link href="/">
              <a className="group flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 group-hover:bg-gray-700 rounded flex items-center justify-center mr-4 shadow-2xl">
                  J
                </div>
                Just
              </a>
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button
              onClick={() => {
                setSearch(!search);
              }}
            >
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-7/12 w-full p-10 lg:p-0 bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none transition-all fixed lg:static top-0 h-full lg:h-auto ${
              offcanvas ? "left-0" : "-left-full"
            }`}
          >
            <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => {
                  setOffcanvas(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">UI Design</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Font-End</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a className="hover:underline">Back-End</a>
                </Link>
              </li>
              <li>
                <a
                  className="hover:underline cursor-pointer flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    <li>
                      <Link href="posts">
                        <a className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">
                          Internet
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="posts">
                        <a className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">
                          Books
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="posts">
                        <a className="flex py-3 px-6 hover:bg-gray-700/60">
                          Open Source
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${
              search ? "top-8" : "-top-40"
            }`}
          >
            <button
              className="absolute top-4 right-12 lg:hidden"
              onClick={() => {
                setSearch(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <input
              list="myproject"
              className="bg-gray-700 py-4 pl-12 pr-4 w-full lg:rounded-full rounded-lg"
              placeHolder="Search..."
              style={{
                backgroundImage: `url(
                    "data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.1'%3E%3Cpath d='M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.25 12.25L9.71252 9.71246' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E%0A"
                  )`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "20px",
              }}
            />
            <datalist id="myproject">
              <option value="Web Development"></option>
              <option value="Mobile Development"></option>
            </datalist>
          </div>
        </div>
      </Container>
    </nav>
  );
}
