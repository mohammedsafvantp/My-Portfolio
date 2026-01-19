import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className=' bg-black border-gray-200 dark:border-gray-800'>
           <div className='container max-w-7xl mx-auto px-4 py-8'>
             <div className='flex flex-col md:flex-row justify-between items-center'>
             <div className='mb-4 md:mb-0'>
              <Link href="/" className='text-xl font-bold text-primary'>Portfolio</Link>
              <p className='text-sm text-secondary mt-2'>@ {new Date().getFullYear()} Portfolio ,All right reserved</p>
             </div>
             <div className='flex space-x-4 mb-8'>
    <Link href="https://github.com/mohammedsafvantp" className='text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 '>
    <FaGithub/>
    </Link>
    <Link href="https://www.linkedin.com/in/mohammed-safvan-t-p-917199272/" className='text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 '>
    <FaLinkedin/>
    </Link>
    <Link href="https://www.linkedin.com/in/mohammed-safvan-t-p-917199272/" className='text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 '>
    <FaInstagram/>
    </Link>

</div>
             </div>
           </div>
    </footer>
  )
}

export default Footer