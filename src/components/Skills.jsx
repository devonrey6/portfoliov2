import React from "react";

const Skills = () => {
  return (
    <div className="my-20 w-full md:px-5 xl:px-10 text-white flex items-center">
      {/* <img
        src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,nextjs"
        alt="My Tech Stack"
        className="w-full max-w-md"
      /> */}

      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        {/* left */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            {/* vertical */}
            <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>

            {/* heading */}
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies that I use daily to develop web
            applications. With a strong foundation in frontend, I focus on
            delivering clean, maintainable code and intuitive user experiences.
          </p>
          {/* <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button>Skills</button>
            <button>Tools</button>
          </span> */}
        </div>

        {/* right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {/* icons */}
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">HTML5</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">CSS3</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=javascript"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">JavaScript</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=php"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">PHP</p>
              </div>
            </div>
            {/* --- */}
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">React.js</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">Node.js</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=laravel"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">Laravel</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=next"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">Next.js</p>
              </div>
            </div>
            {/* --------- */}
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">TailwindCSS</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">Bootstrap</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=mysql"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">MySQL</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <img
                    src="https://skillicons.dev/icons?i=postgres"
                    width="32"
                    height="32"
                  />
                </span>
                <p className="text-xs mt-2">Postgres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
