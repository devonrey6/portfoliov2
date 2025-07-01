import React from "react";
import HERO_IMG from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="py-20 text-white px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* col1 */}
      <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
        <img
          src={HERO_IMG}
          alt="aboutme"
          className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* col2 */}
      <div className="w-full md:w-7/12 text-center md:text-left relative">
        {/* vertical */}
        <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 rotate-0  md:rotate-[-90deg] text-sm tracking-widest">
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-[2px] bg-white"></div>
            <p>MORE ABOUT</p>
          </div>
        </div>

        {/* main head */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
          A Passionate <br /> Web Developer
        </h2>

        {/* desc */}
        <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          I'm John Doe, a passionate web developer navigating both the old and
          new sides of the industry. Eager to grow, I’m currently focused on
          mastering modern JavaScript frameworks like Node.js, React, and
          Next.js. With each project, I strive to become a well-rounded and
          capable full-stack developer.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href=""
            className="bg-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600/30 text-center"
          >
            See Projects
          </a>
          <a
            href=""
            className="border border-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600/10 text-center"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
