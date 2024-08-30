import Image from 'next/image'
import React from 'react'

import phone from '@/assets/phone.png'
import mail from '@/assets/mail.png'


const Contact = () => {
    return (
        <div className='bg-gradient-to-t from-black  to-black py-8'>
            <div className='lg:max-w-5xl mx-auto flex flex-col lg:flex-row text-white/70 p-8
                    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 items-center
                    ' id='contact'>
                <div className='fles justify-center items-center'>
                    <ul className='space-y-4'>
                        <li className='flex items-center'>
                            <Image src={phone} alt='phone' className='h-[60px] sm:h-[110px] w-auto mr-6' />
                            <p>+989 989 89 99</p>
                        </li>
                        <li className='flex items-center'>
                            <Image src={mail} alt='phone' className='h-[60px] sm:h-[110px] w-auto mr-6' />
                            <p>crisskate8@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className='bg-white/10 p-6 rounded-xl max-w-2xl'>
                    <h2 className='text-5xl font-bold text-[#55A1FF] mb-4 '>Let´s connect</h2>
                    <p className='text-white/70 mb-6'>Send me a message and lets schedule a call</p>
                    <form className='space-y-4' action="">
                        <div className='grid md:grid-cols-2 gap-4'>
                            <input type="text" className='bg-black/70 rounded-xl p-3 focus:online-none focus:ring-2 focus-ring-orange-400'
                                placeholder='First Name' />
                            <input type="text" className='bg-black/70 rounded-xl p-3 focus:online-none focus:ring-2 focus-ring-orange-400'
                                placeholder='Last Name' />
                            <input type="text" className='bg-black/70 rounded-xl p-3 focus:online-none focus:ring-2 focus-ring-orange-400'
                                placeholder='Email' />
                            <input type="text" className='bg-black/70 rounded-xl p-3 focus:online-none focus:ring-2 focus-ring-orange-400'
                                placeholder='Phone' />
                        </div>
                        <textarea className='bg-black/70 w-full rounded-xl p-3 focus:online-none focus:ring-2 focus-ring-orange-400'
                            placeholder='Your Message' />
                        <button className='bg-[#55A1FF] hover:bg-[#6EF3FF] hover:text-slate-700 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'> Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact