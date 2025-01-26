import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AcademicSection() {
  const academicData = [
    {
      class: "M.C.A",
      institution: "Sri Sai University Palampur",
      board: "Sri Sai University Palampur",
      year: "Pursuing (4th Semester)",
      marks: "8.37 (Tentative)"
    },
    {
      class: "B.Sc",
      institution: "WRS Govt. College Dehri",
      board: "H.P.U",
      year: "2021",
      marks: "7.17"
    },
    {
      class: "+2",
      institution: "Govt. Sen. Sec. School Matlahar",
      board: "H.P.B.S.E",
      year: "2018",
      marks: "79.6%"
    },
    {
      class: "10th",
      institution: "Govt. Sen. Sec. School Matlahar",
      board: "H.P.B.S.E",
      year: "2016",
      marks: "82.4%"
    }
  ];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('academic-section');
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        const progressPercentage = ((scrollPosition - sectionTop) / sectionHeight) * 100;
        setProgress(Math.min(Math.max(progressPercentage, 0), 100));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      id="academic-section"
      className="p-8 md:p-16 text-black dark:text-white bg-teal-50 dark:bg-zinc-900 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[6vh] sm:text-[8vh] md:text-[4vw] font-bold mb-12 text-center tracking-wide uppercase border-b-2 border-gray-600 pb-4">
        Academic Timeline
      </h2>
      <div className="relative flex flex-col items-center">
        <div className="w-1 bg-gray-500 dark:bg-gray-400 absolute left-1/2 transform -translate-x-1/2 h-full rounded-lg overflow-hidden hidden lg:flex">
          <div
            className="bg-teal-400 dark:bg-teal-400 w-full transition-all duration-500 ease-in-out"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
        <div className="flex flex-col gap-12 w-full max-w-4xl relative">
          {academicData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex ${
                index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
              } items-center relative`}
              initial={{ opacity: 0, y: 50 }} // Slide from bottom
              whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
              viewport={{ once: false, amount: 0.5 }} // Repeats animation when in view
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-black dark:text-white bg-teal-50 dark:bg-zinc-800 p-6 md:p-8 rounded-lg shadow-lg w-full lg:w-96 border-l-4 border-teal-500 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-teal-400">
                  {item.class}
                </h3>
                <p className="mb-1 text-sm">
                  <strong>Institution:</strong> {item.institution}
                </p>
                <p className="mb-1 text-sm">
                  <strong>Board/University:</strong> {item.board}
                </p>
                <p className="mb-1 text-sm">
                  <strong>Year:</strong> {item.year}
                </p>
                <p className="text-sm">
                  <strong>Marks/CGPA:</strong> {item.marks}
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-50 dark:bg-teal-600 rounded-full border-4 dark:border-zinc-900 border-gray-300 shadow-md hidden lg:flex"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
