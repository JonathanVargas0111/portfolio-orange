'use client'
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useState } from 'react';

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Skills', path: '#skills' },

]


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }


    return (

        <div className='text-white/70'>
            <div className="hidden md:flex items-start px-4 py-2 mx-auto max-w-xl ">
                <ul className='flex flex-row p-4 space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className='px-4 py-2 hover:scale-105 duration-300'>
                                <Link href={link.path}>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        <a href="#contact" className='group'>
                            <h1 className='text-lg font-semibold text-white/70 cursor-pointer'>Contact Me</h1>
                            <div className='relative'>
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out
                            bg-[#6EF3FF] rounded-full group-hover:w-full
                        ">
                                </div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out
                            bg-[#55A1FF] rounded-full group-hover:w-full
                        ">
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div
                onClick={toggleNav}
                className='md:hidden absolute top-5 right-5 border rounded border-white/70 text-white/70 p-2 z-50'>
                {
                    nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu />
                }
            </div>
            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full z-40 bg-black/90'
            >
                <ul className='text-4xl font-semibold my-24 text-center space-y-8'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </motion.div>
        </div>
    )
}

export default Navbar