import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gradient-to-r from-violet-500 via-red-500 to-fuchsia-500 shadow-lg bottom-0">
      <div class="flex items-center justify-center w-full max-w-screen-xl mx-auto p-4 md:py-8">        
        <div class="flex lg:text-xl text-black sm:text-center justify-center items-center">
          <img
            src="/logo.png"
            width={"100px"}
            alt="logo"
            class="bg-fixed b-0"
          />
          Sanket Kedare © 2023. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
