"use client"
import Image from 'next/image'
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Testimonial() {

     const { ref, inView } = useInView({
        threshold: 0, // Trigger animation when 30% of the component is visible
        triggerOnce: true, // Animate only the first time it comes into view
      });
    
      // Framer Motion Controls
      const controls = useAnimation();
    
      // Trigger animation when in view
      React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }, [controls, inView]);
    
      // Animation Variants
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Stagger the animation of child elements
          },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      };

      const textVariants = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, transition: {delay:1, duration: 0.8, ease: "easeOut" } },
      };

      const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: {delay: 2 , duration: 0.8, ease: "easeOut" } },
      };
    
    //   const buttonVariants = {
    //     hidden: { x: "-100vw" },
    //     visible: { x: 0 ,  transition: { duration: 0.5, ease: "easeOut", type: spring }  }
    // };

  return (
    <div id="testimonials"
    className='h-auto px-6  pb-8 pt-8 '>
        <motion.div 
         ref={ref}
         variants={containerVariants}
         initial="hidden"
         animate= {controls}
        className='mb-16'>
            <motion.h1 
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-5  text-slate-700 "> Testimonials </motion.h1>
            <motion.p 
            variants={textVariants}
            className='font-semibold text-base xl:text-lg text-center leading-6 text-slate-600'>What Our Client Are Saying About Us</motion.p>
         </motion.div>
      <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate= {controls} 
       
      className='grid grid-cols-1 lg:grid-cols-3  xl:grid-cols-3 xl:mx-20 gap-6 md:px-6 lg:gap-10 xl:gap-10'>
        <motion.figure 
        whileHover={{
            scale: 1.1, // Slightly scale up the button
          }}
            transition={{type: 'spring', stiffness: 300,}}

        className="max-w-screen-md shadow-md rounded-xl mb-16 px-6 ">
          <div className="flex items-center mb-4 text-yellow-300 px-6">
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <blockquote className='px-6'>
            <p className="text-base  font-semibold text-slate-700">&quot; Our trip was nothing short of amazing! From hassle-free booking to breathtaking destinations, everything was perfectly planned. The attention to detail and seamless experience made our journey unforgettable. Highly recommend it for anyone looking to explore the world in style!&quot;</p>
        </blockquote>
        <figcaption className="flex px-6 pb-4 items-center mt-6 space-x-2 rtl:space-x-reverse">
            <Image width={200} height={100}  className="w-10 h-10 rounded-full object-cover" src="/test image 1.jpg" alt="profile picture"/>
            <div className="flex items-center  divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-slate-700  ">John Mark</cite>
                <cite className="ps-3 text-slate-700 text-sm ">CEO at Prime Globals</cite>
            </div>
        </figcaption>
    </motion.figure> 
        <motion.figure 
        whileHover={{
            scale: 1.1, // Slightly scale up the button
          }}
            transition={{type: 'spring', stiffness: 300,}}
        className="max-w-screen-md shadow-xl rounded-xl mb-16 px-6 ">
          <div className="flex items-center mb-4 text-yellow-300 px-6">
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <blockquote className='px-6'>
            <p className="text-base   font-semibold text-slate-700">&quot; I couldn&apos;t have asked for a better travel experience! The itinerary was thoughtfully crafted, the accommodations were top-notch, and the guided tours brought every destination to life. Everything was so well-organized, I could just relax and enjoy the adventure. Truly a trip of a lifetime!&quot;</p>
        </blockquote>
        <figcaption className="flex items-center px-6 pb-4 mt-6 space-x-2 rtl:space-x-reverse">
            <Image width={200} height={100}  className="w-10 h-10 rounded-full object-cover" src="/test image 2.jpg" alt="profile picture"/>
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite className="block pe-3 font-medium text-slate-700">Peter Edochie</cite>
                <cite className="ps-3 text-sm text-slate-700">CEO at Bedrock</cite>
            </div>
        </figcaption>
    </motion.figure> 
        <motion.figure 
        whileHover={{
            scale: 1.1, // Slightly scale up the button
          }}
            transition={{type: 'spring', stiffness: 300,}}
        className="max-w-screen-md shadow-xl rounded-xl mb-16 px-6  ">
          <div className="flex items-center mb-4 text-yellow-300 px-6">
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
        <blockquote className='px-6'> 
            <p className="text-base  font-semibold text-slate-700">&quot; Our vacation was absolutely perfect! From the moment we booked to the last day of our trip, everything was smooth and stress-free. The customer service was exceptional, and the local recommendations made us feel like insiders. Can’t wait to embark on our next getaway!&quot;</p>
        </blockquote>
        <figcaption className="flex px-6 pb-4 items-center mt-6 space-x-2 rtl:space-x-reverse">
            <Image width={200} height={100}  className="w-10 h-10 rounded-full object-cover" src="/test image 3.jpg" alt="profile picture"/>
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-slate-700">Rita Dominic</cite>
                <cite className="ps-3 text-sm text-slate-700">CfO at Money Bank</cite>
            </div>
        </figcaption>
    </motion.figure> 
        </motion.div>
      </div>
   
  )
}












