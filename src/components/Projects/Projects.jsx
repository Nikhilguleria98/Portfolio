import { div, link } from "framer-motion/client";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "Kreativan Technologies",
      img: "./kreativan.png",
      desciption: "A sleek and modern website designed for a digital agency, built with NextJs and TailwindCSS.",
      tags: [
        "NextJs",
        "Tailwind CSS",
        "EmailJs"
      ],
    },
    {
      id: 2,
      name: "Food Website",
      img: "./foodweb.png",
      desciption: "A visually engaging website designed for a food delivery service, highlighting fast delivery and delicious meals.",
      link: "foodwebsite-zeta.vercel.app",
      gitLink: "https://github.com/Nikhilguleria98/Foodwebsite",
      tags: [
        "ReactJs",
        "Context API",
        "Tailwind CSS",
        "EmailJs",
        "framer-motion"
      ],
    },
    {
      id: 3,
      name: "Hotel Website",
      img: "/hotel.png",
      desciption: "An elegant and professional website for a hotel, emphasizing comfort and luxurious experiences for travelers.",
      tags: [
        "ReactJs",
        "Tailwind CSS",
        "In progress",
      ],
    },
    {
      id: 4,
      name: "Country API website",
      img: "./country.png",
      desciption: "An interactive website to explore information about different countries, offering detailed insights and a sleek UI.",
      tags: [
        "Axios",
        "Tailwind CSS",
        "ReactJs",
     
      ],
    },
    // {
    //   id: 5,
    //   name: "Kreativan Technologies",
    //   img: "./manimg.png",
    //   desciption: "nothing this time",
    // },
  ];

  return (
    <>
      <section id="projects">
      <div className="min-h-screen w-full  flex flex-col items-center text-black dark:text-white bg-teal-50 dark:bg-zinc-900">
        {/* Header */}
        <div className="mt-10 px-4 sm:px-8 text-center">
          <h1 className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold">
            Crafting with Passion, Creating with Purpose
          </h1>
        </div>

        {/* Project Cards */}
        <div className="px-[6vw] sm:px-4 max-w-full mt-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {data.map((currElem) => (
              <div
                key={currElem.id}
                className="max-w-[350px] relative  rounded-lg shadow-lg p-4 hover:scale-95 transition-transform duration-300 text-black dark:text-white bg-zinc-200 dark:bg-zinc-700"
              >
                {/* Image */}
                <div className="relative  group">
                  <img
                    src={currElem.img}
                    alt={currElem.name}
                    className="w-full h-full object-contain rounded-md mb-4 "
                  />

                  {/* Overlay with Icons */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                    <div className="flex gap-4">
                      <a
                        href={currElem.link ? `https://${currElem.link}` : "#"}
                        target="_main"
                        className="text-white bg-zinc-800 opacity-75 p-4 rounded-full hover:bg-zinc-600 hover:-translate-y-2 duration-300 transition"
                      >
                        <IoEyeSharp className="text-2xl" />
                      </a>
                      <a
                        href={currElem.gitLink ? currElem.gitLink : "#"}
                        target="_main"
                        className="text-white bg-zinc-800 opacity-75 p-4 rounded-full hover:bg-zinc-600 hover:-translate-y-2 duration-300 transition"
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Text */}
         <div>
         <div>
           <p className="text-lg font-semibold">{currElem.name}</p>
           <p className="text-sm text-black dark:text-white">{currElem.desciption}</p>
           </div>


           <div className="flex flex-wrap gap-2 mt-8 p-3">
  {Array.isArray(currElem.tags) && currElem.tags.length > 0 ? (
    currElem.tags.map((tag, index) => (
      <span
        key={index}
        className="text-xs bg-teal-400 text-gray-700 py-1 px-2 rounded-lg"
      >
        {tag}
      </span>
    ))
  ) : (
    <span>No tags available</span> // Optional fallback message
  )}
</div>

         </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Projects;
