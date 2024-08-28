import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
      <div className='mt-12 text-white/70 py-8 px-6 max-w-5xl mx-auto pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Cristian Parra</h1>
        <div className='flex space-x-6 mt-4'>
          <a href='https://www.linkedin.com/in/cristian-parra-290536193/' className='hover:text-gray-300' target='_blank'>
            <FaLinkedin size={24} />
          </a>
          <a href='https://www.instagram.com/cristitosk8/' className='hover:text-gray-300' target='_blank'>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <div className='mt-4 text-white/70 py-8 max-w-5xl mx-auto border-t border-gray-700 pt-4 flex justify-center items-center'>
        <h2 className='text-sm font-bold'>Made with by <a href="https://felipevargas.vercel.app/" className='text-violet-500' target='_blank'>Felipe Vargas</a> </h2>
      </div>
    </div>
  )
}

export default Footer