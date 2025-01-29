import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaBook } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

export default function AcademicSection() {
  const academicData = [
    {
      class: "M.C.A",
      institution: "Sri Sai University Palampur",
      board: "Sri Sai University Palampur",
      year: "Pursuing (4th Semester)",
      marks: "8.37 (Tentative)",
      icon: <FaGraduationCap size={35} className="text-teal-500" />
    },
    {
      class: "B.Sc",
      institution: "WRS Govt. College Dehri",
      board: "H.P.U",
      year: "2021",
      marks: "7.17",
      icon: <FaUniversity size={35} className="text-teal-500" />
    },
    {
      class: "+2",
      institution: "Govt. Sen. Sec. School Matlahar",
      board: "H.P.B.S.E",
      year: "2018",
      marks: "79.6%",
      icon: <FaBook size={35} className="text-teal-500" />
    },
    {
      class: "10th",
      institution: "Govt. Sen. Sec. School Matlahar",
      board: "H.P.B.S.E",
      year: "2016",
      marks: "82.4%",
      icon: <FaBook size={35} className="text-teal-500" />
    }
  ];

  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("academic-section");
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        const progressPercentage = ((scrollPosition - sectionTop) / sectionHeight) * 100;
        setProgress(Math.min(Math.max(progressPercentage, 0), 100));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="academic-section"
      className="p-8 md:p-16 text-black dark:text-white bg-zinc-100 dark:bg-gradient-to-b from-gray-900 to-black relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-500">
        Academic Timeline
      </h2>
      <div className="relative flex flex-col items-center">
        {/* Timeline Background */}
        <div className="w-1 bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700 absolute left-1/2 transform -translate-x-1/2 h-full rounded-lg overflow-hidden hidden lg:flex">
          <div
            className="bg-teal-500 dark:bg-teal-500 w-full transition-all duration-500 ease-in-out"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
        <div className="flex flex-col gap-12 w-full max-w-4xl relative">
          {academicData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"} items-center relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-r from-teal-300 to-teal-600 dark:bg-gradient-to-r dark:from-teal-700 dark:to-teal-800 p-6 md:p-8 rounded-xl shadow-lg w-full lg:w-96 border-l-8 border-teal-400 hover:shadow-2xl transition-shadow  hover:scale-105 duration-500">
                <div className="flex items-center gap-6 mb-4">
                  {item.icon}
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{item.class}</h3>
                </div>
                <p className="mb-1 text-sm text-white opacity-90">
                  <strong>Institution:</strong> {item.institution}
                </p>
                <p className="mb-1 text-sm text-white opacity-90">
                  <strong>Board/University:</strong> {item.board}
                </p>
                <p className="mb-1 text-sm text-white opacity-90">
                  <strong>Year:</strong> {item.year}
                </p>
                <p className="text-sm text-white opacity-90">
                  <strong>Marks/CGPA:</strong> {item.marks}
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 dark:bg-teal-700 rounded-full border-4 dark:border-zinc-900 border-gray-300 shadow-xl hidden lg:flex"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
