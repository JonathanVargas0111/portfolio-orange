'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import project from '../assets/project.jpg'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'



const projects = [
  {
    title: 'Toryskateshop',
    desc: 'Developed an online store using WordPress and WooCommerce with a custom product filter built with jQuery.',
    devstack: 'WordPress, WooCommerce, jQuery, JS, MySQL',
    link: "https://toryskateshop.com/",
    git: "",
    src: project5
  },
  {
    title: 'Lapelastore',
    desc: 'Created a responsive business website using WordPress with custom animations handled by jQuery.',
    devstack: 'WordPress, jQuery, JS, MySQL',
    link: "https://lapelastore.com/",
    git: "",
    src: project2
  },
  {
    title: 'hai.com',
    desc: 'Designed and developed a multi-author blog platform on WordPress with an integrated comment system.',
    devstack: 'WordPress, jQuery, PHP, MySQL',
    link: "https://hai.com.co/?v=8fab2b569f00",
    git: "",
    src: project3
  },
  {
    title: 'Inventory Management System',
    desc: 'Built a custom inventory management system using Laravel for the backend and jQuery for dynamic frontend interactions.',
    devstack: 'Laravel, jQuery, JS, MySQL',
    link: "#",
    git: "#",
    src: project4
  },
]
const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 px-2 mt-40' id='portfolio'>

      <h1 className='text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 bg-gradient-to-r from-[#55A1FF] to-[#6EF3FF] bg-clip-text text-transparent'>
        Projects
      </h1>

      <div className='md:max-w-[1000px] mx-auto mt-40 space-y-24'>
        {
          projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-12 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse gap-12' : 'md:flex-row'}`}
            >
              <div className='space-y-2 mx-w-[350px]'>
                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                <h2 className='text-4xl'>{project.title}</h2>
                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                <p className='text-xl text-[#55A1FF] font-semibold'>{project.devstack}</p>
                <div className='w-64 h-[1px] bg-gray-400 my-4 flex gap-6'>
                  {
                    project.link ? <a href={project.link} target='_blank'>Link</a> : ""
                  }
                  {
                    project.git ? <a href={project.git}>Git</a> : ""
                  }
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <Image src={project.src} alt={project.title}
                  className='h-[400px] w-auto object-cover border rounded border-gray-700'
                ></Image>
              </div>

            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio