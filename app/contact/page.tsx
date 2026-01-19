"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '../utils/animations'

interface FormData {
  name:string;
  email:string;
  message:string;
}
    type FormStatus ="idle" | "loading" |"success" | "error";

const contact = () => {
  
    const  [FormData,setFormData] = useState<FormData>({
      name:"",
      email:"",
      message:""
    })

const [status,setStatus] =useState("idle");
const handleSubmit =async(e:React.FormEvent)=>{
   e.preventDefault();
   setStatus("loading")
   try{
     const response =await fetch("/api/contact",{
      method:"POST",
      headers:{
        "content-type" :"application/json"
      },
      body:JSON.stringify(FormData)
     })
     if(!response.ok){
      throw new Error("Failed to send message")
     }
    setStatus("success")
     setFormData({
      name:"",
      email: "",
      message:""

     })
   }
   catch (error){
       setStatus("error")
   }
}
const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
  setFormData(prev=>({
    ...prev,
    [e.target.name]:e.target.value
  
}))
}
const [error,setError] =useState<string | null>(null);
  return (
    <div className='container max-w-7xl mx-auto py-12'>
        <motion.h1  {...fadeInUp} className='text-4xl font-bold mb-8 text-center'>Contact Me</motion.h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div {...slideInLeft} className='space-y-8'>
           <motion.div {...fadeInUp}>
              <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
              <p className='text-secondary md:w-2/3'>I&apos;m always open to discussing new projects, creative ideas, or oppertunities to be part of your vision</p>
           </motion.div>
         
          <motion.div variants={fadeIn}
            initial="initial"
            animate="animate" className='space-y-4'>
              <motion.div  variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }} className='flex items-center gap-4'>
                <FaEnvelope className='w-6 h-6 text-primary'/>
                <div>
                    <h3>Email</h3>
                    <Link href="mailto:hello@codetutorbd.com" className='text-secondary'>mohammedsafvantp@gmail.com
                    </Link>
                </div>
          </motion.div>
          </motion.div>
          <div className='space-y-4'>
              <motion.div variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }} className='flex items-center gap-4'>
                <FaPhone className='w-6 h-6 text-primary'/>
                <div>
                    <h3>Phone</h3>
                    <Link href="" className='text-secondary'>+91 7034207597
                    </Link>
                </div>
          </motion.div>
          </div>
          <div className='space-y-4'>
              <motion.div variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }} className='flex items-center gap-4'>
                <FaMapLocation className='w-6 h-6 text-primary'/>
                <div>
                    <h3>Location</h3>
                    <Link href="mailto:hello@codetutorbd.com" className='text-secondary'>Pattambi,Palakkad,kerala,India
                    </Link>
                </div>
          </motion.div>
          </div>
        </motion.div>
        <motion.div {...slideInRight} className='bg-gray-800  dark:bg-dark/50 p-6 rounded-lg shadow-md'>
             <motion.form variants={fadeIn}
            initial="initial"
            animate="animate" onSubmit={handleSubmit} className='space-y-6'>
                  <motion.div variants={fadeInUp}>
                    <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                    <input required value={FormData.name} onChange={handleChange} type="text" id='name' name='name' placeholder='Enter Your Name' className='w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-800 dark:border-gray-700  dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'/>
                  </motion.div>
                   <motion.div variants={fadeInUp}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input required value={FormData.email} onChange={handleChange} type="email" id='email' name='email' placeholder='Enter Your Email' className='bg-gray-800 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700  dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'/>
                  </motion.div>
                   <motion.div variants={fadeInUp}>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} required value={FormData.message} onChange={handleChange} id='message' name='message' placeholder='Enter Your Message' className='w-full px-4 py-2 rounded-md border bg-gray-800 border-gray-300 dark:border-gray-700  dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'/>
                  </motion.div>
                  <motion.button whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }} type="submit" className='btn w-full btn-primary text-white py-2 rounded-md hover:bg-primary/80 transition duration-300 ease-in-out'>
                    {
                      status === 'loading' ? "sending..." : "Send Message"
                    }
                  </motion.button>
                  {
                    status === "success" && (
                      <motion.p initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }} className='text-center text-green-500'>Message sent Successfully!</motion.p>
                    )
                  }
                  {
                    status === "error" && (
                      <motion.p  initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }} className='text-center text-red-500'>Failed to send message. please try again</motion.p>
                    )
                  }
             </motion.form>
        </motion.div>
         </div>
    </div>
  )
}

export default contact