const HomePage = () => {
  return (
    <section class="lg:mt-6 mt-8  pt-8 bg-gradient-to-b from-gray-900 h-[100vh]  to-gray-100 rounded-3xl shadow-xl">

      <div
        id="home"
        class=" h-[100%] w-[100%]  font-medium flex flex-col
                      lg:items-center  justify-evenly 
                       pl-5"
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

<<<<<<< HEAD
            <div class="flex justify-start gap-5 items-center">
              
                <a
                  href="https://www.linkedin.com/in/sanket-kedare-5820401bb/"
                  className="flex justify-center items-center"
                >
=======

          </div>

          <div class="flex justify-center items-center m-auto p-6 rounded-full ">
            <img id="home" src="Extra/Home.png" width="240vw"></img>
          </div>
        </section>
      </div>
      <div class="container">
        <div class="lg:flex items-center justify-center p-6 m-3 ">
          <div class="lg:flex mx-auto justify-center items-center">
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center  p-3 m-4 ">
                <a href="https://www.linkedin.com/in/sanket-kedare-5820401bb/">
>>>>>>> dc0954325b966ba951da038e28360f9e807470b3
                  <img
                    class="shadow-sm rounded-full p-2  border-2 border-black  hover:bg-white"
                    width="50"
                    height="50"
                    src="/icons/linkedin.png"
                    alt="Linedin"
                  />
                </a>
                <a
                  href="https://github.com/sanketkedare"
                  className="flex justify-center items-center  border-2 border-black  rounded-full hover:bg-white "
                >
                  <img
                    class="shadow-sm rounded-full p-2"
                    width="50"
                    height="50"
                    src="/icons/github.png"
                    alt="git"
                  />
                </a>
             
            </div>
          </div>

          <div class="flex justify-center items-center m-auto h-[50vh]">
            <img id="home" src="Extra/Home.png" height="30vh"></img>
          </div>

        </section>
      </div>
    </section>
  );
};

export default HomePage;
