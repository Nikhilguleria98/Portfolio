import { useEffect, useState } from 'react';

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
    <div id="academic-section" className="p-8 md:p-16 bg-gray-100 rounded-lg shadow-xl text-gray-900 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center tracking-wide uppercase text-gray-800 border-b-2 border-gray-400 pb-4">Academic Timeline</h2>
      <div className="relative flex flex-col  justify-center items-center ">
        <div className="w-1 lg:flex hidden bg-gray-300 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full rounded-lg overflow-hidden">
          {/* <div className="bg-blue-500 w-full transition-all duration-500 ease-in-out" style={{ height: `${progress}%` }}></div> */}
        </div>
        <div className="flex flex-col gap-8 md:gap-12 w-full max-w-4xl relative">
          {academicData.map((item, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} items-center relative` }>
              <div className="bg-white text-gray-900 p-6 md:p-8 rounded-lg shadow-md w-full md:w-80 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">{item.class}</h3>
                <p className="mb-1 text-xs md:text-sm"><strong>Institution:</strong> {item.institution}</p>
                <p className="mb-1 text-xs md:text-sm"><strong>Board/University:</strong> {item.board}</p>
                <p className="mb-1 text-xs md:text-sm"><strong>Year:</strong> {item.year}</p>
                <p className="text-xs md:text-sm"><strong>Marks/CGPA:</strong> {item.marks}</p>
              </div>
              {/* <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-blue-500 rounded-full border-4 border-white shadow-md"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
