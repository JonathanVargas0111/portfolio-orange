import React from 'react'
import { FaHtml5,FaCss3Alt,FaJs,FaLaravel  } from "react-icons/fa";
import {DiJqueryLogo , DiMysql } from "react-icons/di";


const skillIcons = [
  {icon: <FaHtml5 size={140}/>, label:'HTML'},
  {icon:<FaCss3Alt size={140}/>, label:'CSS'},
  {icon:<FaJs size={140}/>, label:'JS'},
  {icon: <DiJqueryLogo size={140}/>, label:'Jquery'},
  {icon:<FaLaravel size={140}/>, label:'LARAVEL'},
  {icon:<DiMysql size={140}/>, label:'MySQL'},
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>

      <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-7 bg-gradient-to-r from-[#55A1FF] to-[#6EF3FF] bg-clip-text text-transparent'>
          What I Do
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {
              skillIcons.map((skill, index)=>(
                <div 
                key={index}
                className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center'>
                  {
                    skill.icon
                  }
                  <p className='mt-1'> {skill.label} </p>
                </div>
              ))
            }

        </div>
      </div>

    </div>
  )
}

export default Skills