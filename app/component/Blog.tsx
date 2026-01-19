"use client";
import { article } from 'framer-motion/client'
import React from 'react'
import { blogs } from '../contents/blog'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '../utils/animations';

const Blog = () => {
  return (
    <section className='py-20 container max-w-7xl mx-auto px-4'>
        <motion.h2  {...fadeInUp} className='text-3xl font-bold mb-12 text-center '>Latest Blog Posts</motion.h2>
    <motion.div className='grid gid-cols-1 md:grid-cols-3 gap-8'>
        {
            blogs.map((blog)=>(
                <article  
              {...cardHoverSmall} key={blog.slug} className=' bg-gray-800  dark:bg-dark/50 rounded-lg shadow-md p-6'>
                    <Link href={`/blogs/${blog.slug}`} className='flex flex-col gap-4'>
                    <motion.h3  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }} className='text-xl font-semibold mb-2 hover:text-primary transition-colors'>{blog.title}</motion.h3>
                    </Link>
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} className='text-gray-600  dark:text-gray-300 mb-4'>{blog.excerpt}</motion.p>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                <motion.span whileHover={{ scale: 1.05 }} className='flex items-center'>
                    <FaCalendarAlt className='mr-2'/>
                    {new Date(blog.date).toLocaleDateString()}
                </motion.span>
                <motion.span  whileHover={{ scale: 1.05 }} className='flex items-center'>
                    <FaClock className='mr-2'/>
                    {blog.readTime} min read
                </motion.span>
            </motion.div>
                </article>
            ))
        }
    </motion.div>
    <motion.div  initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }} className='text-center mt-12'>
       <motion.div  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}> 
        <Link href="/blogs" className='inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'>View All Posts</Link>
        </motion.div>
    </motion.div>
    </section>
  )
}

export default Blog