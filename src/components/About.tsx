'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import aboutImg from '../assets/profilepic.png';
import book from '../assets/book.png';
import pc from '../assets/pc.png';
import card from '../assets/card.png';
import finance from '../assets/finance.png';

// Textos en inglés y español
const texts = {
  en: {
    title: 'About Me',
    education: {
      title: 'Education',
      description: 'I have a degree in Systems Engineering, specializing in WordPress, Laravel, and jQuery'
    },
    problemSolving: {
      title: 'Problem-Solving',
      description: 'I tackle challenges with a structured, logical approach to deliver effective solutions.'
    },
    experience: {
      title: 'Experience',
      description: 'I’ve worked on a variety of web development projects across different industries.'
    },
    technicalSkills: {
      title: 'Technical Skills',
      description: 'As a Fullstack Web Developer, I excel in WordPress, Laravel, and jQuery. I create responsive websites with robust backend solutions.'
    },
    languageButton: 'Switch to Spanish'
  },
  es: {
    title: 'Sobre Mí',
    education: {
      title: 'Educación',
      description: 'Tengo estudios en ingeniería de sistemas, especializado en WordPress, Laravel y jQuery'
    },
    problemSolving: {
      title: 'Solución Problemas',
      description: 'Enfrento desafíos con un enfoque lógico para ofrecer soluciones efectivas.'
    },
    experience: {
      title: 'Experiencia',
      description: 'He trabajado en una variedad de proyectos de desarrollo web en diferentes industrias.'
    },
    technicalSkills: {
      title: 'Habilidades Técnicas',
      description: 'Como Desarrollador Web Fullstack, me especializo en WordPress, Laravel y jQuery. Creo sitios web responsivos con soluciones backend robustas.'
    },
    languageButton: 'Cambiar a Inglés'
  }
};

type Language = 'en' | 'es';

const About = () => {
  const [language, setLanguage] = useState('es'); // Estado para el idioma actual

  // Función para alternar el idioma
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const languageKey: Language = 'en'; 
  const aboutText = texts[languageKey];

  return (
    <div className='px-2 max-w-[1200px]  lg:mx-auto' id='about'>
      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 bg-gradient-to-r from-[#55A1FF] to-[#6EF3FF] bg-clip-text text-transparent'>
        {aboutText.title}
      </h1>

      <div className='grid lg:grid-cols-8 gap-6 place-items-center'>


        <div className='w-full lg:col-span-5 relative bg-white/10 backdrop-blur-sm
        border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#55A1FF] via-purple-700
          to-[#6EF3FF] opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 gap-2'>
            <Image src={book} alt='book' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>{aboutText.education.title}</h2>
              <p className='text-lg text-white/70 mt-2'>{aboutText.education.description}</p>
            </div>
          </div>
        </div>

        <div className='w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg
        border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#55A1FF] via-purple-700
          to-[#6EF3FF] opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={pc} alt='pc' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>{aboutText.problemSolving.title}</h2>
              <p className='text-lg text-white/70 mt-2'>{aboutText.problemSolving.description}</p>
            </div>
          </div>
        </div>

        <div className='w-full lg:col-span-3 relative bg-white/10 backdrop-blur-lg
        border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#55A1FF] via-purple-700
          to-[#6EF3FF] opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={card} alt='card' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>{aboutText.experience.title}</h2>
              <p className='text-lg text-white/70 mt-2'>{aboutText.experience.description}</p>
            </div>
          </div>
        </div>

        <div className='w-full lg:col-span-5 relative bg-white/10 backdrop-blur-lg
        border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-[#55A1FF] via-purple-700
          to-[#6EF3FF] opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6 gap-2'>
            <Image src={finance} alt='finance' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>{aboutText.technicalSkills.title}</h2>
              <p className='text-lg text-white/70 mt-2'>{aboutText.technicalSkills.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para cambiar idioma */}
      <button
        className='mt-6 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg'
        onClick={toggleLanguage}
      >
        {aboutText.languageButton}
      </button>
    </div>
  );
};

export default About;
