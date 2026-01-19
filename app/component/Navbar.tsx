"use client"
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { use, useState } from 'react'


const Navbar = () => {
   
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState<boolean>(false)
    const pathname =usePathname();
    const toggleMobileMenu =()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems =[
        {href:"/",label: "Home"},
        {href:"/about",label: "About"},
        {href:"/projects",label: "Projects"},
        {href:"/blogs",label: "Blogs"},
        {href:"/contact",label: "Contact"},
        // {href:"/resume",label: "Resume"}

    ]
  return (
    <nav className='fixed w-full bg-gray-800  dark:bg-gray/80 backdrop:blur-sm z-50'>
        <div className='container max-w-7xl mx-auto px-4'>
            <div className='flex items-center justify-between py-4'>
                <Link href="/" className='text-xl font-bold text-primary'>Portfolio</Link>
            
            <div className='hidden md:flex items-center space-x-8'>
                {
                    menuItems.map((item)=>{
                        const isActive =pathname === item.href;
                        return(
                            
                        <Link key={item.href} href={item.href} className={`hover:text-primary transition-colors ${isActive ? 'font-semibold text-primary':''}`}>{item.label}</Link>
                        )
                    
})

                    
                }
               
            </div>
            <motion.button  whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className='md:hidden p-2 rounded-lg p-2 hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer' onClick={toggleMobileMenu}>
                {
                    isMobileMenuOpen ? (<XMarkIcon className='w-8 h-8'/>) :(<Bars3Icon className='w-8 h-8'/>)
                }
            </motion.button>
        </div>

       <AnimatePresence>
            {
                isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }} className='md:hidden'>
                        <div className='py-4 space-y-4'>
                             {
                        menuItems.map((item,index)=>(
                           
                           
                         <motion.div key={index} initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }} onClick={toggleMobileMenu} className='px-4'>
                                    
                                <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
                         </motion.div>
                            
                        ))
    
    
                        
                    }
                    
                        </div>
                    </motion.div>
                )
            }
       </AnimatePresence>
          
        </div>
    </nav>
  )
}

export default Navbar