import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "Kreativan Technologies",
      img: "./kreativan.png",
      description:
        "A sleek and modern website designed for a digital agency, built with NextJs and TailwindCSS.",
      tags: ["NextJs", "Tailwind CSS", "EmailJs"],
    },
    {
      id: 2,
      name: "Food Website",
      img: "./foodweb.png",
      description:
        "A visually engaging website designed for a food delivery service, highlighting fast delivery and delicious meals.",
      link: "foodwebsite-zeta.vercel.app",
      gitLink: "https://github.com/Nikhilguleria98/Foodwebsite",
      tags: ["ReactJs", "Context API", "Tailwind CSS", "EmailJs", "framer-motion"],
    },
    {
      id: 3,
      name: "Hotel Website",
      img: "/hotel.png",
      description:
        "An elegant and professional website for a hotel, emphasizing comfort and luxurious experiences for travelers.",
      tags: ["ReactJs", "Tailwind CSS", "In progress"],
    },
    {
      id: 4,
      name: "Country API website",
      img: "./country.png",
      description:
        "An interactive website to explore information about different countries, offering detailed insights and a sleek UI.",
      tags: ["Axios", "Tailwind CSS", "ReactJs"],
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 1, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <section id="work" ref={ref}>
        <motion.div
          className="min-h-screen w-full flex flex-col items-center text-black dark:text-white bg-teal-50 dark:bg-zinc-800 pt-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls} // Controlled by useAnimation
        >
          {/* Header */}
          <motion.div
            className="mt-10 px-4 sm:px-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold">
              Our Creative Projects
            </h1>
          </motion.div>

          {/* Project Cards */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 px-[6vw] sm:px-4 mt-10 py-10">
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                className="max-w-[350px] relative rounded-lg shadow-lg p-6 bg-zinc-200 dark:bg-zinc-700 hover:cursor-pointer"
                variants={cardVariants} // Each card animation
                custom={index} // Customize delay for each card
              >
                {/* Image */}
                <div className="relative group overflow-hidden rounded-lg hover:scale-105 duration-300">
                  <motion.img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-md mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Overlay with Icons */}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={`https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-zinc-800 p-3 rounded-full hover:bg-zinc-600 transition-transform transform hover:scale-110 duration-300 hover:-translate-y-2"
                        >
                          <IoEyeSharp className="text-xl" />
                        </a>
                      )}
                      {project.gitLink && (
                        <a
                          href={project.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-zinc-800 p-3 rounded-full hover:bg-zinc-600 transition-transform transform hover:scale-110 duration-300 hover:-translate-y-2"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <motion.div
                  variants={contentVariants} // Slide-in animation for text
                  className="mt-4"
                >
                  <p className="text-lg font-semibold">{project.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </motion.div>

                {/* Tags */}
                <motion.div
                  variants={contentVariants} // Slide-in animation for tags
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-teal-400 text-gray-700 py-1 px-2 rounded-lg"
                      variants={tagVariants}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
