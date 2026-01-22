"use client";
import React from 'react'
import { FaCode, FaGraduationCap, FaLaptop, FaLaptopCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '../utils/animations'

const about = () => {
  return (
    <div className='container max-auto max-w-7xl py-12'>
        <motion.h1  {...fadeInDown} className='text-4xl font-bold mb-8 text-center'>About Me</motion.h1>
        <motion.section  {...fadeInUp} className='mb-16'>
            <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.With a strong foundation in both fronntend and backend technologies,I create seamless user experiences and robust server-side solutions</p>
        </motion.section>
        <motion.section {...fadeIn}
        transition={{ delay: 0.2 }} className='mb-16'>
         <motion.h2 variants={staggerContainer}
          initial="initial"
          animate="animate" className='section-title'>Skills</motion.h2>
         <motion.div variants={staggerContainer}
          initial="initial"
          animate="animate"  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <motion.div  
            {...cardHover} className=' bg-gray-800 dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col  duration-300'>
            <FaCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
                <li>React / Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>Tailwind CSS</li>
                <li>BootStrap</li>
                <li>HTML5 / CSS</li>
            </ul>
          </motion.div>

           <motion.div  
            {...cardHover} className=' bg-gray-800 dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col  duration-300 '>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Postman</li>
                <li>SQL</li>
            </ul>
          </motion.div>
            <motion.div 
            {...cardHover} className=' bg-gray-800 dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col  duration-300 '>
            <FaGraduationCap className='h-8 w-8 text-primary mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
                <li>Git/GitHub</li>
                <li>Vercel</li>
                <li>Netlify</li>
                <li>Render</li>
                <li>React Toastify</li>
            </ul>
          </motion.div>
         </motion.div>
        </motion.section>
        <motion.section   {...fadeIn}
        transition={{ delay: 0.4 }} className='mb-16'>
            <motion.h2  {...fadeInUp} className='section-title'>Experiences</motion.h2>
            <motion.div  variants={staggerContainer}
          initial="initial"
          animate="animate" className='max-w-3xl  max-auto space-y-8  '>
               <motion.div  
            {...cardHoverSmall} className=' bg-gray-800 dark:bg-dark/50 p-6 rounded-lg shadow-md '>
                <h3 className='text-xl font-semibold mb-2 '>ME(A)RN Stack Developer Intern</h3>
                <p className='text-primary mb-2'>Luminar Technolab • May 2025 - Dec 2025</p>
                <ul className='text-secondary space-y-2 list-disc list-inside'>
                    <li>Built appsusing MERN and MEAN stacks</li>
                    <li>Worked with Node,React,Angular,JavaScript,Typescript</li>
                    <li>Followed best practices in component-based architecture and responsive UI design</li>
                </ul>
               </motion.div>
            </motion.div>
            
        </motion.section>
         <motion.section  {...fadeIn}
        transition={{ delay: 0.6 }} className='mb-16'>
            <motion.h2 {...fadeInUp} className='section-title'>Education</motion.h2>
            <motion.div  variants={staggerContainer}
          initial="initial"
          animate="animate" className='max-w-3xl max-auto space-y-8 '>
               <motion.div  
            {...cardHoverSmall} className=' bg-gray-800 dark:bg-dark/50 p-6 rounded-lg shadow-md '>
                <h3 className='text-xl font-semibold mb-2 '>Bachelor of Technology in Computer Science</h3>
                <p className='text-primary mb-2'>APJ Abdul Kalam Technological University • 2021 - 2025</p>
                <p className='text-secondary'>Graduate with Honors. Focused on software engineering and web development</p>
               </motion.div>
            </motion.div>
            
        </motion.section>
       </div>
  )
}

export default about