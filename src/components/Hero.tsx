'use client'
import React from 'react'
import Image from "next/image"
import cursor from '../assets/icon1.png'
import lightning from '../assets/icon2.png'
import { motion } from 'framer-motion'
import profilepic from '../assets/profilepic.png'

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-slate-950">
            <div className='hidden md:block absolute rounded-[60%] w-[3000px] h-[1200px] top-[520px] left-[50%] -translate-x-1/2 
                bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            </div>
            <div className='relative'>
                <div className='text-4xl sm:text-8xl font-bold text-center'>
                    <h1 className='text-[#6EF3FF]'>Hi, I am </h1>
                    <h1 className='text-[#55A1FF]'>Cristian Parra</h1>
                </div>
                <motion.div
                    className='hidden xl:block absolute xl:left-[220px] 2xl:left-[250px] top-[170px]' 
                    drag
                >
                    <Image
                        src={cursor}
                        height="190"
                        width="190"
                        alt='cursor'
                        draggable='false'
                    />
                </motion.div>
                <motion.div
                    className='hidden xl:block absolute xl:right-[190px] 2xl:right-[220px] top-[20px]' 
                    drag
                >
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt='cursor'
                        draggable='false'
                        className=''
                    />
                </motion.div>
                <p className='text-center text-lg md:text-xl max-w-xl mx-auto mt-8 text-white/80'>
                I am a full-stack developer focused on creating websites that provide the best experience fro users.
            </p>
            <Image
                src={profilepic}
                alt='picture cristian parra'
                className='h-auto md:h-60 2xl:h-72 w-auto mx-auto'
            />
            </div>
            
        </div>

    )
}

export default Hero