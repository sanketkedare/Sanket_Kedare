const HomePage = () => {
  return (
    <section class="lg:mt-6 mt-12  pt-8 bg-gradient-to-r from-orange-500 via-red-200  to-green-500 rounded-3xl shadow-xl">
      <div
        id="home"
        class=" lg:h-[500px] w-[100%] mx-auto font-medium flex flex-col
                      lg:items-center  justify-center 
                      sm: h-[500px] pl-5"
      >
        <section class="lg:grid lg:grid-cols-2">
          <div class="lg:w-[100%]">
            <p class="text-3xl font-bold lg:text-[30px] sm: text-[15px]">
              Hello, I'm
            </p>

            <p class="text-bold  text-red-800  lg:text-[100px] sm: text-[40px] ">
              Sanket Kedare
            </p>

            <p class="lg:text-3xl text-black lg:text-[40px] font-semibold sm: text-[20px]">
              Full Stack Web Developer
            </p>


            <div class="flex w-full justify-start items-center lg:py-5 pl-0">
                <img src="Extra/location.png" alt="location" width={"45vh"}  class="lg:pr-3 pr-4 sm:py-3 sm:p-3"/>
                <h1 class="lg:text-2xl text-sm ml-0">
                  Hyderabad, Telangana
                </h1>
            </div>


          </div>

          <div class="flex justify-center items-center m-auto p-4 ">
            <img id="home" src="Extra/home.png" width="350vw"></img>
          </div>
        </section>
      </div>
      <div class="container">
        <div class="lg:flex items-center justify-center p-6 m-3 ">
          <div class="lg:flex mx-auto justify-center items-center">
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center  p-3 m-4 ">
                <a href="https://www.linkedin.com/in/sanket-kedare-5820401bb/">
                  <img
                    class="shadow-sm rounded-full p-2"
                    width="90"
                    height="90"
                    src="/icons/linkedin.png"
                    alt="Linedin"
                  />
                </a>
              </div>

              <div class="flex justify-center items-center  p-3 m-4">
                <a href="https://github.com/sanketkedare">
                  <img
                    class="shadow-sm rounded-full p-2"
                    width="90"
                    height="90"
                    src="/icons/github.png"
                    alt="git"
                  />
                </a>
              </div>
            </div>

            <div
              class="flex justify-center items-center p-3 px-2 m-4 border-2 rounded-2xl border-black text-base font-bold
                        hover:bg-white"
            >
              <img
                class="shadow-sm px-3"
                width="48"
                height="48"
                src="/icons/gmail.png"
                alt="gmail"
              />
              sanketkedare200@gmail.com
            </div>

            <div
              class="flex justify-center items-center  p-3 m-4 border-2 rounded-2xl border-black text-lg font-bold
                        hover:bg-white"
            >
              <img
                class="shadow-sm px-3"
                width="48"
                height="48"
                src="/icons/whatsapp.png"
                alt="gmail"
              />
              +91-8624851910
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
