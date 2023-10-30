import React from "react";

const Education = () => {
  return (
    <section>
      <div class="flex justify-center my-4 lg:text-2xl">
        <div class="lg:flex items-center w-[80%]">
          <div class="container p-8 mt-4 shadow-2xl rounded-xl">
            <div class="flex py-2 items-center ">
              <img src="Extra/Bamu.png" alt="Bamu" width="40vw" class="" />
              <h1 class="font-bold ml-4">
                Dr. Babasaheb Ambedkar Marathwada University, Aurangabad,
                Maharashtra
              </h1>
            </div>

            <h2 class="font-extrabold text-red-950 lg:text-4xl block py-4">Bachelor of Engineering</h2>
            <h2>
              Mahatma Basweshwar Education Society's College Of Engineering,
              Ambajogai, Dist. Beed, Maharashtra.
            </h2>
            <h3>2017 - 2020</h3>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-4 lg:text-2xl">
        <div class="lg:flex items-center w-[80%]">
          <div class="container p-8 mt-4 shadow-2xl rounded-xl">
            <div class="flex py-2 items-center ">
              <img src="Extra/msbte.png" alt="Bamu" width="40vw" class="" />
              <h1 class="font-bold ml-4">
                Maharashtra State Board of Technical Education.
              </h1>
            </div>

            <h2 class="font-extrabold text-red-950 lg:text-4xl block py-4">Diploma in Engineering</h2>
            <h2>
              Government Polytechnic Hingoli, Dist. Hingoli, Maharashtra.
            </h2>
            <h3>2014 - 2017</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
