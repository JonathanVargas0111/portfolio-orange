import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel } from "react-icons/fa";
import { DiJqueryLogo, DiMysql } from "react-icons/di";


const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: 'HTML' },
  { icon: <FaCss3Alt size={140} />, label: 'CSS' },
  { icon: <FaJs size={140} />, label: 'JS' },
  { icon: <DiJqueryLogo size={140} />, label: 'Jquery' },
  { icon: <FaLaravel size={140} />, label: 'LARAVEL' },
  { icon: <DiMysql size={140} />, label: 'MySQL' },
]

const Skills = () => {
  return (
    <div className='bg-gradient-to-t from-black to-[#381a5f] py-32'>
      <div className='text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-6xl max-w-md mx-auto font-semibold mb-12 bg-gradient-to-r from-[#55A1FF] to-[#6EF3FF] bg-clip-text text-transparent text-center'>
          What I Do
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className='flex flex-col justify-between items-center bg-white bg-opacity-10 rounded-lg p-6'
            >
              {skill.icon}
              <p className='mt-4 text-lg font-medium'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills