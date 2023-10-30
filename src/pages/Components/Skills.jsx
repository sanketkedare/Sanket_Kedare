const Skills = () => {
  return (
    <div class="bg-gradient-to-r from-red-400 via-gray-400 to-yellow-200 border-blue-300  shadow-lg">
      <div id="skills" class="container w-[100%] h-auto py-9 mx-auto ">
        <section class="container flex items-center justify-center w-[100%] py-6  ">
          <div class="flex items-center">
            <svg
              class=" h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
            <svg
              class=" h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
            <h1 class="text-center font-bold p-4 lg:text-3xl">
              Skills & Resume
            </h1>
          </div>
        </section>
        <div class="lg:flex lg:justify-center sm:grid sm:mx-auto sm:grid-cols-1 sm:items-center  lg:w-[90%] w-[100%]">
          <div
            id="skill"
            class="flex px-10 mx-auto my-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[300px] h-[300px]  justify-start items-center rounded-lg shadow-lg"
          >
            <div>
              <h1 class="font-extrabold text-[30px]">Coding</h1>
              <hr />
              <ul>
                <li class="text-[20px]  font-bold  flex items-center  my-2">
                  <img
                    width="48"
                    height="48"
                    src="/icons/js.png"
                    alt="javascript--v1"
                    class="shadow-sm m-2 rounded-full"
                  />
                  JavaScript
                </li>
                <li class="text-[20px]  font-bold flex items-center  my-2">
                  <img
                    width="48"
                    height="48"
                    src="/icons/java.png"
                    alt="java-coffee-cup-logo"
                    class="shadow-sm m-2 rounded-full"
                  />
                  Java
                </li>

                <li class="text-[20px] font-bold flex items-center my-2">
                  <img
                    width="48"
                    height="48"
                    src="/icons/python.png"
                    alt="python--v1"
                    class="shadow-sm m-2 rounded-full"
                  />
                  Python
                </li>
              </ul>
            </div>
          </div>

          <div
            id="skill"
            class="flex px-10 mx-auto my-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[300px] h-[300px]  justify-start items-center rounded-lg shadow-lg"
          >
            <div>
              <h1 class="font-extrabold text-[30px]">Frameworks</h1>
              <hr />
              <ul>
                <li class="text-[20px]  font-bold  flex items-center my-2">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/springboot.png"
                    alt="spring-logo"
                  />{" "}
                  Spring Boot
                </li>

                <li class="text-[20px] font-bold  flex items-center my-2">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/nextjs.png"
                    alt="spring-logo"
                  />{" "}
                  Next Js
                </li>

                <li class="text-[20px] font-bold  flex items-center my-2">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/nodejs.png"
                    alt="spring-logo"
                  />{" "}
                  Node Js
                </li>
              </ul>
            </div>
          </div>

          <div
            id="skill"
            class="flex px-10 mx-auto my-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[300px] h-[300px]  justify-start items-center rounded-lg shadow-lg"
          >
            <div>
              <h1 class="font-extrabold text-[30px]">Databases</h1>
              <hr />
              <ul>
                <li class="text-[20px] font-bold  flex items-center  my-2">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/mysql.png"
                    alt="spring-logo"
                  />
                  MySql
                </li>

                <li class="text-[20px] font-bold  flex items-center  my-2">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/mariadb.png"
                    alt="spring-logo"
                  />
                  Maria DB
                </li>

                <li class="text-[20px] font-bold  flex items-center  my-2">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/mongodb.png"
                    alt="spring-logo"
                  />
                  Mongo DB
                </li>
              </ul>
            </div>
          </div>

          <div
            id="skill"
            class="flex px-10 mx-auto my-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[300px] h-[300px]  justify-start rounded-lg shadow-lg"
          >
            <div>
              <h1 class="font-extrabold text-[30px] mt-3">UI</h1>
              <hr />
              <ol>
                <li class="text-[20px]  font-bold flex items-center  my-5">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/bootstrap.png"
                    alt="spring-logo"
                  />
                  Bootstrap
                </li>
                <li class="text-[20px] font-bold  flex items-center  my-5">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/tailwind.png"
                    alt="spring-logo"
                  />
                  Tailwind
                </li>
              </ol>
            </div>
          </div>

          <div
            id="skill"
            class="flex px-10 mx-auto my-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[300px] h-[300px]  justify-start rounded-lg shadow-lg"
          >
            <div>
              <h1 class="font-extrabold text-[30px] mt-3">JS Libraries</h1>
              <hr />
              <ol>
                <li class="text-[20px]  font-bold flex items-center  my-5">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/reactjs.png"
                    alt="spring-logo"
                  />
                  React Js
                </li>
                <li class="text-[20px] font-bold  flex items-center  my-5">
                  <img
                    class="shadow-sm m-2 rounded-full"
                    width="48"
                    height="48"
                    src="/icons/js.png"
                    alt="spring-logo"
                  />
                  JQuery & Ajax
                </li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
