import { div, link } from "framer-motion/client";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "Kreativan Technologies",
      img: "./manimg.png",
      desciption: "nothing this time",
    },
    {
      id: 2,
      name: "Kreativan Technologies",
      img: "./foodweb.png",
      desciption: "nothing this time",
      link:"foodwebsite-zeta.vercel.app",
      gitLink:"https://github.com/Nikhilguleria98/Foodwebsite"
    },
    {
      id: 3,
      name: "Kreativan Technologies",
      img: "./manimg.png",
      desciption: "nothing this time",
    },
    {
      id: 4,
      name: "Kreativan Technologies",
      img: "./manimg.png",
      desciption: "nothing this time",
    },
    {
      id: 5,
      name: "Kreativan Technologies",
      img: "./manimg.png",
      desciption: "nothing this time",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-zinc-800 text-white flex flex-col items-center">
        {/* Header */}
        <div className="mt-10 px-4 sm:px-8 text-center">
          <h1 className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold">
            Crafting with Passion, Creating with Purpose
          </h1>
        </div>

        {/* Project Cards */}
        <div className="w-full px-[10vw] sm:px-4  max-w-screen-lg mt-10 mb-20 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((currElem) => (
              <div
                key={currElem.id}
                className="relative bg-zinc-700 rounded-lg shadow-lg p-4 hover:scale-95 transition-transform duration-300 group"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={currElem.img}
                    alt={currElem.name}
                    className="w-full h-[270px] object-cover rounded-md mb-4"
                  />

                  {/* Overlay with Icons */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                    <div className="flex gap-4">
                      <a
                        href={currElem.link ? `https://${currElem.link}` : "#"} target="_main"
                        className="text-white bg-zinc-800 opacity-75 p-4 rounded-full hover:bg-zinc-600 hover:-translate-y-2 duration-300 transition"
                      >
                        <IoEyeSharp className="text-2xl" />
                      </a>
                      <a
                         href={currElem.link ? `https://${currElem.gitLink}` : "#"} target="_main"
                        className="text-white bg-zinc-800 opacity-75 p-4 rounded-full hover:bg-zinc-600 hover:-translate-y-2 duration-300 transition"
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="text-lg font-semibold">{currElem.name}</p>
                <p className="text-sm text-gray-300">{currElem.desciption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
