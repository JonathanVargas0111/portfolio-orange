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
    <div>Portfolio</div>
  )
}

export default Portfolio