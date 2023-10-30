//Navbar Components
import "flowbite";
import { Button, Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <>
      <nav class="bg-dark border-gray-200 shadow-lg shadow-black-400 ">
        <div
          class=" shadow-slate-950 flex flex-wrap items-center justify-between fixed w-[100%] py-3 px-8 
                      bg-gradient-to-r from-orange-500 via-red-200  to-green-500 text-white rounded-b-2xl"
        >
          <div class="flex items-center">
            <img width="48" height="48" src="/portfolio.png" alt="port"  />
            <span class="self-center text-2xl font-extrabold text-black whitespace-nowrap p-4">
              Sanket Kedare
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <div
            class="hidden w-full md:block md:w-auto text-xl"
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Button
                  class="block py-2 pl-3 pr-4 text-black font-bold rounded 
                     hover:bg-gray-100 md:hover:bg-transparent 
                      md:border-0 
                     md:hover:text-blue-700 
                      md:p-0 dark:text-white 
                     md:dark:hover:text-blue-500 
                     dark:hover:bg-gray-700 
                     dark:hover:text-white 
                     md:dark:hover:bg-transparent"
                >
                  <Link
                    activeclass="active"
                    to="home"
                    spy={true}
                    offset={-100}
                    duration={500}
                  >
                    Home
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  class="block py-2 pl-3 pr-4 text-black font-bold rounded 
                     hover:bg-gray-100 md:hover:bg-transparent 
                      md:border-0 
                     md:hover:text-blue-700 
                      md:p-0 dark:text-white 
                     md:dark:hover:text-blue-500 
                     dark:hover:bg-gray-700 
                     dark:hover:text-white 
                     md:dark:hover:bg-transparent"
                >
                  <Link
                    activeclass="active"
                    to="about"
                    spy={true}
                    offset={-40}
                    duration={500}
                  >
                    About me
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  class="block py-2 pl-3 pr-4 text-black font-bold rounded 
                             hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                             md:hover:text-blue-700 md:p-0 dark:text-white 
                             md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                             dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link
                    activeclass="active"
                    to="skills"
                    spy={true}
                    offset={-100}
                    duration={500}
                  >
                    Skills
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  class="block py-2 pl-3 pr-4 text-black font-bold rounded 
                             hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                             md:hover:text-blue-700 md:p-0 dark:text-white 
                             md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                             dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link
                    activeclass="active"
                    to="resume"
                    spy={true}
                    offset={-150}
                    duration={500}
                  >
                    Resume
                  </Link>
                </Button>
              </li>

              <li>
                <Button
                  class="block py-2 pl-3 pr-4 text-black font-bold rounded 
                             hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                             md:hover:text-blue-700 md:p-0 dark:text-white 
                             md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                             dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link
                    activeclass="active"
                    to="work"
                    spy={true}
                    offset={-80}
                    duration={500}
                  >
                    Work
                  </Link>
                </Button>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
