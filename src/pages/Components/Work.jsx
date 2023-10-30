//Work Component
import React from "react";

import Projects from "./Projects.json"

const Work = () => {
  return (
    <section
      id="work"
      class=" w-[100%] h-auto mx-auto py-15
        bg-gradient-to-r from-violet-500 via-slate-400 to-fuchsia-500
        border-blue-300 rounded-lg shadow-lg"
    >
      <div class="flex justify-center items-center my-5 pt-5">
        <section class="font-bold lg:text-[30px] sm:text-[30px] md:text-[25px]">
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
              My Projects
            </h1>
          </div>
        </section>
      </div>

      <div class="flex justify-center  items-center my-5 py-5 lg:w-[75%] w-[90%] lg:mx-auto">
        <div class="conatiner w-[90%] m-auto">
          {Projects.map((item, index) => (
            <div
              key={item.title}
              class="container bg-gradient-to-r from-gray-400 via-gray-300 to-purple-200  shadow-lg rounded-xl w-full p-3 m-4"
            >
              <div class="grid lg:grid-cols-2 grid-cols-1 p-3 ">
                <section class="container lg:h-[400Px] ">
                  <div class="flex items-center my-auto ">
                    <h1 class="sm:mt-5">
                      <a href={item.gitLink}>
                        <button
                          type="button"
                          class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                        >
                          <svg
                            class="w-4 h-4 mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Code
                        </button>
                      </a>
                    </h1>
                    <h1 class="lg:h-[20%] h-[10%] flex items-center justify-center font-bold lg:text-2xl ">
                      {item.title}
                    </h1>
                  </div>

                  <h1 class="h-[35%] lg:p-4 flex items-center justify-center lg:font-bold lg:text-lg text-sm text-justify">
                    "{item.description}"
                  </h1>
                  <div class="lg:h-[40%] h-[50%] grid lg:grid-cols-4 grid-cols-3 justify-evenly items-center lg:space-x-3">
                    {item.skills.map((skill, skillIndex) => (
                      <h1 key={skillIndex} class="my-auto">
                        <button
                          type="button"
                          class=" text-white 
                                 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50 
                                 lg:font-semibold rounded-lg text-sm px-2 py-2.5 text-center m-2 w-full"
                        >
                          {skill}
                        </button>
                      </h1>
                    ))}
                  </div>
                </section>
                <section class="flex justify-center items-center shadow-inner-2xl rounded-4xl w-[100%] h-auto p-5">
                  <img src={item.imageUrl} alt={item.title} />
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
