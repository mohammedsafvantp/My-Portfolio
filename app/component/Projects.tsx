"use client";
import React from 'react'
import { projects } from '../contents/projects'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '../utils/animations'


const Projects = () => {
  return (
    <section className='py-20 container max-w-7xl mx-auto px-4'>
        <motion.h2    className='text-3xl font-bold mb-12 text-center' {...fadeInUp}>Featured Projects</motion.h2>
<motion.div variants={staggerContainer} initial="initial"  animate="animate" className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
    {
        projects.map((project)=>(
          <motion.article variants={fadeInUp}  key={project.title} className=' bg-gray-800 dark:bg-dark/50 rounded-lg shadow-md p-6'  {...cardHoverSmall}>
            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden' 
            >
                <Image src={project.image} fill alt={project.title}  className='object-cover '  sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'  />
            </div>
            <motion.h3 className='text-xl font-semibold mb-2'   whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>{project.title}</motion.h3>
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</motion.p>
            <motion.div   initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} className='flex flex-wrap gap-2 mb-4'>
                {
                    project.technologies.map((tech)=>(
                      <motion.span  whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} key={tech} className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>{tech}</motion.span>
                    ))
                }
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }} className='flex gap-4 mt-2'>
                <motion.a whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }} href={project.githubLink} target='' className='flex items-centet gap-2 text-secondary hover:text-primary transition-colors'>
                <FaGithub className='w-5 h-5'/><span>Code</span>
                </motion.a>
                <motion.a  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }} href={project.demoLink} target='' className='flex items-centet gap-2 text-secondary hover:text-primary transition-colors'>
                <FaExternalLinkAlt className='w-4 h-4'/><span>Live Demo</span>
                </motion.a>
            </motion.div>
            </motion.article>
        ))
    }
</motion.div>
    </section>
  )
}

export default Projects