const HomePage = () => {
  return (
    <section class="lg:mt-6 mt-8  pt-8 bg-gradient-to-b from-gray-900  to-gray-100 rounded-3xl shadow-xl">
      <div
        id="home"
        class=" lg:h-[500px] w-[100%]  font-medium flex flex-col
                      lg:items-center  justify-evenly 
                      sm: h-[500px] pl-5"
      >
        <section class="lg:grid lg:grid-cols-2 justify-around">
          <div class="lg:w-[100%]">
            <p class="text-2xl text-white font-bold lg:text-[30px] sm: text-[15px]">
              Hello, I'm
            </p>

            <p class="text-bold  text-white  lg:text-[80px] sm: text-[40px] ">
              Sanket Kedare
            </p>

            <p class="lg:text-3xl text-black lg:text-[30px] font-semibold sm: text-[20px]">
              Full Stack Web Developer
            </p>

            <div class="flex w-full justify-start items-center lg:py-5 pl-0">
              <img
                src="Extra/location.png"
                alt="location"
                width={"45vh"}
                class="lg:pr-3 pr-4 sm:py-3 sm:p-3"
              />
              <h1 class="lg:text-xl text-sm ml-0">Hyderabad, Telangana</h1>
            </div>
          </div>

          <div class="flex justify-center items-center m-auto">
            <img id="home" src="Extra/Home.png" width="270vw"></img>
          </div>
        </section>
      </div>
      <div class="flex justify-around">
        <div class="lg:flex items-center justify-around">
          <div class="lg:flex justify-start items-center">
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center  px-2 border-2 border-black  rounded-2xl hover:bg-white">
                <a
                  href="https://www.linkedin.com/in/sanket-kedare-5820401bb/"
                  className="flex justify-center items-center"
                >
                  <img
                    class="shadow-sm rounded-full p-2"
                    width="50"
                    height="50"
                    src="/icons/linkedin.png"
                    alt="Linedin"
                  />
                  <h1 className="text-lg font-bold">LinkedIN</h1>
                </a>
              </div>

              <div class="flex justify-center items-center px-3 m-4  border-2 border-black  rounded-2xl hover:bg-white">
                <a href="https://github.com/sanketkedare" className="flex justify-center items-center ">
                  <img
                    class="shadow-sm rounded-full p-2"
                    width="50"
                    height="50"
                    src="/icons/github.png"
                    alt="git"
                  /><h1 className="text-lg font-bold">Github</h1>
                </a>                  

              </div>
            </div>

            <div
              class="flex justify-around items-center p-3  m-4 border-2 rounded-2xl border-black text-lg font-bold
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
