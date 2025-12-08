import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Projects = () => {
 const data = [
  {
    id: 1,
    name: "JSB",
    img: "./jsb.png",
    description:
      "A modern, professional, and fully responsive website built for JSB, showcasing its diverse business verticals including logistics, farming, and enterprise solutions. The site focuses on a clean layout, clear service categorization, and seamless navigation to highlight JSB’s multi-industry expertise.",
    tags: ["ReactJs", "Tailwind CSS"],
    link: "/jsb-three.vercel.app/",
    gitLink: "https://github.com/Nikhilguleria98/JSB",
  },
  {
    id: 1,
    name: "Armations Electric",
    img: "./Armations.png",
    description:
      "A professional and responsive site built for an electrical service provider, focusing on clean design, service highlights, and contact functionality.",
    tags: ["NextJs", "Tailwind CSS", "EmailJs"],
    link: "armations.vercel.app/",
    gitLink: "https://github.com/KreativanTechnologies/Armations",
  },
{
  id: 2,
  name: "Himalayan Khadu",
  img: "./himalayan khadu.png",
  description:
    "A travel booking website tailored for the Himalayan region, offering curated experiences, homestays, and adventure packages with a seamless and scenic interface.",
  tags: ["NextJs", "Tailwind CSS", "EmailJs"],
  link: "himalyankhadu.com/",
  gitLink: "https://github.com/KreativanTechnologies/HimalayanKhadu",
},

  {
    id: 4,
    name: "Kreativan Technologies",
    img: "./kreativan.png",
    description:
      "An agency website showcasing IT services, client success stories, and portfolio, developed using a modern tech stack for a seamless user journey.",
    tags: ["NextJs", "Tailwind CSS", "EmailJs"],
    link: "kreativantech.com/",
    gitLink: "https://github.com/KreativanTechnologies/Kt_web_next",
  },
  {
    id: 5,
    name: "Food Website",
    img: "./foodweb.png",
    description:
      "An interactive food ordering interface built with vibrant visuals, motion effects, and category filtering to enhance the user’s appetite and UX.",
    link: "foodwebsite-zeta.vercel.app",
    gitLink: "https://github.com/Nikhilguleria98/Foodwebsite",
    tags: ["ReactJs", "Context API", "Tailwind CSS", "EmailJs", "framer-motion"],
  },
  {
    id: 6,
    name: "Hotel Website",
    img: "/hotel.png",
    description:
      "A premium hotel booking platform with a minimal yet luxurious look, integrating room listings, testimonials, and booking features in progress.",
    tags: ["ReactJs", "Tailwind CSS", "In progress"],
    link: "hotel-website-orpin-seven.vercel.app",
    gitLink: "https://github.com/Nikhilguleria98/Hotel-Website",
  },
  {
    id: 7,
    name: "Country API Website",
    img: "./country.png",
    description:
      "A country explorer app using live API data to display key facts, flags, and demographics with an elegant UI and efficient search experience.",
    tags: ["Axios", "Tailwind CSS", "ReactJs"],
    link: "country-api-alpha-ten.vercel.app",
    gitLink: "https://github.com/Nikhilguleria98/CountryAPI",
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
          className="min-h-screen w-full flex flex-col items-center text-black dark:text-white bg-zinc-100 dark:bg-gradient-to-b from-gray-900 to-black pt-10"
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
            <h1 className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold text-yellow-500">
              Our Creative Projects
            </h1>
          </motion.div>

          {/* Project Cards */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 px-[6vw] sm:px-4  py-10">
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                className="max-w-[350px] relative rounded-lg shadow-lg p-6 bg-zinc-200 dark:bg-zinc-900 hover:cursor-pointer"
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
                          className="text-white bg-zinc-800 p-3 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-110 duration-300 hover:-translate-y-2"
                        >
                          <IoEyeSharp className="text-xl" />
                        </a>
                      )}
                      {project.gitLink && (
                        <a
                          href={project.gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-zinc-800 p-3 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-110 duration-300 hover:-translate-y-2"
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
                      className="text-xs bg-yellow-500 text-black py-1 px-2 rounded-lg"
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
