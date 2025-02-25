import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col items-center gap-16 lg:1/2 sm:w-1/2">
        <h1 className="text-7xl text-white font-bold text-center">
          Explore homes that fit your dreams.
        </h1>
        <div className="flex gap-10 text-white font-bold">
          <button className="py-2 px-8 rounded-md border-2 border-white">
            Projects
          </button>
          <button className="bg-blue-500 py-2 px-8 rounded-md">
            Contach Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
