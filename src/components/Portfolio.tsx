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
    desc: 'HAI, an innovative platform offering personalized resources for dietary health, with a multi-author blog and ecommerce features',
    devstack: 'WordPress, jQuery, WooCommerce, MySQL',
    link: "https://hai.com.co/?v=8fab2b569f00",
    git: "",
    src: project3
  },
  {
    title: 'tory-rifa-misteriosa',
    desc: 'Developed a mysterious raffle app with NextJS and Tailwind CSS for styling. Users can buy tickets and a winner is randomly selected.',
    devstack: 'NextJs, JS, Tailwind CSS',
    link: "https://tory-rifa-misteriosa.vercel.app/",
    git: "https://github.com/cristiansk8/tory-rifa-misteriosa",
    src: project4
  },
]
const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] pt-40 pb-18  px-2' id='portfolio'>

      <h1 className='text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 bg-gradient-to-r from-[#55A1FF] to-[#6EF3FF] bg-clip-text text-transparent'>
        Projects
      </h1>

      <div className='md:max-w-[1000px] mx-auto mt-36 space-y-24'>
        {
          projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-12 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse gap-12' : 'md:flex-row gap-12'}`}
            >
              <div className='space-y-2 mx-w-[350px]'>
                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                <h2 className='text-4xl'>{project.title}</h2>
                <p className='text-lg text-white/70 break-words py-4'>{project.desc}</p>
                <p className='text-lg text-[#55A1FF] font-semibold'>{project.devstack}</p>
                <div className='w-64 h-[1px] bg-gray-400 my-4 flex gap-6'>
                  {
                    project.link ? <a href={project.link} target='_blank' className='mt-2'>Link</a> : ""
                  }
                  {
                    project.git ? <a href={project.git} target='_blank' className='mt-2'>Git</a> : ""
                  }
                </div>
              </div>
              <div className='flex justify-center items-center w-full'>
                <a href={project.link} target='_blank'>
                  <Image src={project.src} alt={project.title}
                    className='h-[400px] w-auto object-cover border rounded border-gray-700'
                  ></Image>
                </a>
              </div>

            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio