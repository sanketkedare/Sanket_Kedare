import React from "react";
import Education from "./Education";

const About = () => {
  return (
    <div class="mt-2 bg-gradient-to-r from-red-400 via-gray-400 to-yellow-200 border-blue-300 rounded-t-2xl shadow-lg">
      <div
        id="about"
        class="flex text-center items-center w-[100%] h-auto "
      >
        <div class="lg:grid grid-cols-1 mt-4 mx-auto ">
          <div class="flex py-5 mx-auto mt-5 w-[85%] justify-center items-center">
            <div class="text-black bg-gradient-to-r from-violet-300 via-amber-250 to-fuchsia-300  h-full justify-center items-center p-4 rounded-2xl shadow-lg hover:shadow-lg transition duration-300">
              <section class="text-justify  text-black lg:text-2xl p-4">
                Hi there,
                <br />
                <br />
                "Welcome to my portfolio. I am a web development enthusiast.
                Starting from Java full-stack development, I never expected that
                web development and playing with its tools would become my hobby
                in the future. I have created some projects based on Java and
                its framework Spring Boot.
                <br />
                <br />
                I love coding and DSA. Currently, I am more focused on learning
                MERN full-stack web development. It's very interesting...
                <br />
                <br />
                Happy Journey... Enjoy my work on this site..."
                <br />
                <br />
                <br />
                <section class="container w-[60vw] mx-auto">
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
                      Education{" "}
                    </h1>
                  </div>
                </section>
                <Education />
                <br />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
