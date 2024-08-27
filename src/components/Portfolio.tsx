'use client'
import React from 'react'
import Image from 'next/image'
import {motion}  from 'framer-motion'
import project from '../assets/proj1.jpg'
import project1 from '../assets/proj2.jpg'

const projects = [
    {
      title: 'E-commerce Store',
      desc: 'Developed an online store using WordPress and WooCommerce with a custom product filter built with jQuery.',
      devstack: 'WordPress, WooCommerce, jQuery, JS, MySQL',
      link: "#",
      git: "#",
      src: project1
    },
    {
      title: 'Business Website',
      desc: 'Created a responsive business website using WordPress with custom animations handled by jQuery.',
      devstack: 'WordPress, jQuery, JS, MySQL',
      link: "#",
      git: "#",
      src: project
    },
    {
      title: 'Blog Platform',
      desc: 'Designed and developed a multi-author blog platform on WordPress with an integrated comment system.',
      devstack: 'WordPress, jQuery, PHP, MySQL',
      link: "#",
      git: "#",
      src: project1
    },
    {
      title: 'Inventory Management System',
      desc: 'Built a custom inventory management system using Laravel for the backend and jQuery for dynamic frontend interactions.',
      devstack: 'Laravel, jQuery, JS, MySQL',
      link: "#",
      git: "#",
      src: project
    },
    {
      title: 'Portfolio Website',
      desc: 'Developed a personal portfolio website using WordPress with a focus on performance and SEO optimization.',
      devstack: 'WordPress, jQuery, JS, MySQL',
      link: "#",
      git: "#",
      src: project1
    },
    {
      title: 'Data Dashboard',
      desc: 'Created a data visualization dashboard using Laravel for backend data processing and MongoDB for data storage.',
      devstack: 'Laravel, jQuery, MongoDB, JS',
      link: "#",
      git: "#",
      src: project
    }
  ]
  



const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='portfolio'>
      
      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 bg-gradient-to-r from-[#55A1FF] to-[#6EF3FF] bg-clip-text text-transparent'>
        Portfolio
      </h1>
      
      <div className='max-w-[1000px] mx-auto space-y-24'>
        {
          projects.map((project, index)=>(
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`flex ${index % 2 === 1 ? 'flex-col-reverse md:flex-row-reverse gap-12':'flex-col md:flex-row'}`}
            >

              <div className='space-y-2 mx-w-[550px]'>
                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                <h2 className='text-4xl'>{project.title}</h2>
                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                <p className='text-xl text-[#55A1FF] font-semibold'>{project.devstack}</p>
                <div className='w-64 h-[1px] bg-gray-400 my-4'>

                </div>
              </div>

              <div className='flex justify-center items-center'>
                <Image src={project.src} alt={project.title}
                    className='h-[400px] w-auto object-cover'
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