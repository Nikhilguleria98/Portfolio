import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss, SiGraphql, SiTypescript, SiDocker, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={50} />, color: "bg-gradient-to-r from-orange-500 to-orange-900", hover: "hover:shadow-orange-900", level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt size={50} />, color: "bg-gradient-to-r from-blue-500 to-blue-900", hover: "hover:shadow-blue-900", level: "Advanced" },
    { name: "Bootstrap", icon: <FaBootstrap size={50} />, color: "bg-gradient-to-r from-purple-500 to-purple-900", hover: "hover:shadow-purple-900", level: "Intermediate" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} />, color: "bg-gradient-to-r from-teal-500 to-teal-900", hover: "hover:shadow-teal-900", level: "Advanced" },
    { name: "JavaScript", icon: <FaJs size={50} />, color: "bg-gradient-to-r from-yellow-500 to-yellow-900", hover: "hover:shadow-yellow-900", level: "Advanced" },
    { name: "React.js", icon: <FaReact size={50} />, color: "bg-gradient-to-r from-cyan-500 to-cyan-900", hover: "hover:shadow-cyan-900", level: "Advanced" },
    { name: "Next.js", icon: <RiNextjsFill size={50} />, color: "bg-gradient-to-r from-gray-500 to-gray-900", hover: "hover:shadow-gray-900", level: "Beginner" },
    { name: "Node.js", icon: <FaNodeJs size={50} />, color: "bg-gradient-to-r from-green-500 to-green-900", hover: "hover:shadow-green-900", level: "Beginner" },
    { name: "React Router DOM", icon: <FaReact size={50} />, color: "bg-gradient-to-r from-purple-500 to-purple-900", hover: "hover:shadow-purple-900", level: "Intermediate" },
    { name: "React Redux", icon: <TbBrandRedux size={50} />, color: "bg-gradient-to-r from-pink-500 to-pink-900", hover: "hover:shadow-pink-900", level: "Intermediate" },
    { name: "Context API", icon: <FaReact size={50} />, color: "bg-gradient-to-r from-indigo-500 to-indigo-900", hover: "hover:shadow-indigo-900", level: "Intermediate" },

  ];

  return (
    <motion.section
      id="skills"
      className=" py-20 text-black dark:text-white bg-zinc-100 dark:bg-gradient-to-b from-gray-900 to-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-extrabold mb-12 text-transparent bg-clip-text bg-yellow-500">My Skills</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-5"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl shadow-2xl ${skill.color} ${skill.hover} transition-all transform hover:scale-110 hover:shadow-2xl duration-500 cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-white">{skill.name}</h3>
              <p className="text-lg text-white opacity-80">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
