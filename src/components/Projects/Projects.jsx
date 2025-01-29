import { motion, useAnimation } from "framer-motion"; // Add this import
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "Kreativan Technologies",
      img: "./kreativan.png",
      description:
        "A sleek and modern website designed for a digital agency, built with NextJs and TailwindCSS.",
      tags: ["NextJs", "Tailwind CSS", "EmailJs"],
      link: "https://kreativan.com",
      gitLink: "https://github.com/Nikhilguleria98/Kreativan",
    },
    {
      id: 2,
      name: "Food Website",
      img: "./foodweb.png",
      description:
        "A visually engaging website designed for a food delivery service, highlighting fast delivery and delicious meals.",
      link: "https://foodwebsite-zeta.vercel.app",
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    hidden: { opacity: 0, y: 10 },
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
    <section id="work" ref={ref} className="py-16 bg-zinc-100 dark:bg-black">
      <motion.div
        className="min-h-screen w-full flex flex-col items-center text-black dark:text-white px-6 sm:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400">
            Our Creative Projects
          </h1>
        </motion.div>

        {/* Project Cards */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              className="max-w-xs mx-auto bg-zinc-200 dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
              variants={cardVariants}
              custom={index}
            >
              <div className="relative group">
                {/* Image */}
                <motion.img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Overlay with Icons */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                >
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-110 duration-300"
                      >
                        <IoEyeSharp className="text-xl" />
                      </a>
                    )}
                    {project.gitLink && (
                      <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-zinc-800 p-3 rounded-full hover:bg-zinc-600 transition-transform transform hover:scale-110 duration-300"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Text Content */}
              <motion.div
                className="p-6"
                variants={contentVariants}
              >
                <p className="text-xl font-semibold text-teal-300">{project.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-teal-400 text-white py-1 px-2 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
