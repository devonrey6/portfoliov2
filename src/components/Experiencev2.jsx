import React from "react";
import { EXPERIENCES } from "../constants/data";

const Experiencev2 = () => {
  return (
    <div className="p-4">
      <div className="relative text-center">
        <div className="absolute left-[40%] -top-6  rotate-0   text-sm tracking-widest">
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-[2px] bg-white"></div>
            <p className="text-white">History</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10 text-white">
          Experiences
        </h2>
      </div>

      {/* <h2 className="my-20 text-center text-4xl text-white">Experience</h2> */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-gray-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-bold text-white">
                {experience.role} - <span>{experience.company}</span>
              </h3>
              <p className="mb-4 text-gray-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencev2;
