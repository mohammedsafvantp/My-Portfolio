"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { fadeIn, fadeInUp } from '../utils/animations';


const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
        <div className='max-w-xl mx-w-7xl mx-auto px-4'>
          
<motion.h1 {...fadeInUp} transition={{delay:0.3}}
 className='text-4xl md:text-6xl font-bold mb-6'>Hi,I&apos;m <motion.span {...fadeIn} transition={{delay:0.8}}className='text-primary'>Mohammed Safvan TP</motion.span></motion.h1>
<motion.p {...fadeInUp} transition={{delay:0.5}} className='text-xl md:text-2xl text-gray-600 dark:*:text-gray-300 mb-8'>Mearn Full Stack Developer | Frontend Developer | Open Source Contributer</motion.p>
<motion.div className='flex justify-center space-x-4 mb-8'  {...fadeInUp}
            transition={{ delay: 0.5 }}>
    <motion.a href="https://github.com/mohammedsafvantp" className='text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 '  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
    <FaGithub/>
    </motion.a>
    <motion.a href="https://www.linkedin.com/in/mohammed-safvan-t-p-917199272/" className='text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 '  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
    <FaLinkedin/>
    </motion.a>
    <motion.a href="https://www.linkedin.com/in/mohammed-safvan-t-p-917199272/" className='text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 '  whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
    <FaInstagram/>
    </motion.a>

</motion.div>
<motion.div 
              whileTap={{ scale: 0.95 }} className='flex flex-col md:flex-row justify-center gap-4'>
    <motion.a {...fadeInUp} transition={{delay: 0.5}} whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} href="/projects" className='bg-primary inline-block w-fit md:w-auto px-8 py-3 rounded hover:bg-primary/80 transition-colors text-white'>View Projects</motion.a>

    <motion.a {...fadeInUp} transition={{delay: 0.5}} whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} href="/contact" className='bg-gray-500 text-gray-800 inline-block w-fit md:w-auto px-8 py-3 rounded transition-colors hover:text-white hover:bg-gray-800'>Contact Me</motion.a>

</motion.div>
        </div>
    </section>
  )
}

export default Hero