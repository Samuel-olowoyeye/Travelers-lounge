"use client"
import React from 'react'
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Services() {

    const { ref, inView } = useInView({
            threshold: 0.3, // Trigger animation when 30% of the component is visible
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

          const servicesVariants = {
            hidden: { opacity: 0,  },
            visible: { opacity: 1, transition: {delay:1, duration: 1.5, ease: "easeOut" } },
          };

  return (
    <div id="services" className="bg-gray-100 py-16 px-2 md:px-4 lg:px-6 xl:px-10">
            <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate= {controls}
            className="container mx-auto px-6">
                <motion.h1 
                variants={itemVariants}
                className="text-2xl font-bold text-center text-slate-700 mb-8">Our Services</motion.h1>
                <motion.div 
                variants={servicesVariants}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <motion.div 
                    whileHover={{
                        scale: 1.05, // Slightly scale up the button
                      }}
                        transition={{type: 'spring', stiffness: 300,}}
                    className="bg-white shadow-md rounded-xl p-6 text-center ">
                        <Image
                            src="/flight booking.jpg"
                            alt="Flight Booking"
                            width={300}
                            height={150}
                            className="rounded-md mb-4 object-cover w-full h-40"
                        />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">Flight Booking</h3>
                        <p className="text-gray-600 text-base">Enjoy seamless flight booking services with exclusive deals and discounts tailored for you.</p>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.05, // Slightly scale up the button
                      }}
                        transition={{type: 'spring', stiffness: 300,}}
                    className="bg-white shadow-md rounded-xl p-6 text-center ">
                        <Image
                            src="/hotel.jpg"
                            alt="Hotel Reservations"
                            width={300}
                            height={150}
                            className="rounded-md mb-4 object-cover w-full h-40"
                        />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">Hotel Reservations</h3>
                        <p className="text-gray-600 text-base">Find and book comfortable stays with our wide range of hotel options at the best rates.</p>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.05, // Slightly scale up the button
                      }}
                        transition={{type: 'spring', stiffness: 300,}}
                    className="bg-white shadow-md rounded-xl p-6 text-center ">
                        <Image
                            src="/tour.jpg"
                            alt="Tour Packages"
                            width={300}
                            height={150}
                            className="rounded-md mb-4 object-cover w-full h-40"
                        />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">Tour Packages</h3>
                        <p className="text-gray-600 text-base">Explore our curated tour packages designed to give you memorable travel experiences.</p>
                    </motion.div>
                    <motion.div 
                    whileHover={{
                        scale: 1.05, // Slightly scale up the button
                      }}
                        transition={{type: 'spring', stiffness: 300,}}
                    className="bg-white shadow-md rounded-xl p-6 text-center ">
                        <Image
                            src="/travel-insurance.jpg"
                            alt="Travel Insurance"
                            width={300}
                            height={150}
                            className="rounded-md mb-4 object-contain w-full h-40"
                        />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">Travel Insurance</h3>
                        <p className="text-gray-600 text-base">Travel worry-free with comprehensive insurance plans that cover all your needs.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.05, // Slightly scale up the button
                          }}
                            transition={{type: 'spring', stiffness: 300,}}
                    className="bg-white shadow-md rounded-xl p-6 text-center ">
                        <Image
                            src="/health insurance.jpg"
                            alt="Travel Insurance"
                            width={300}
                            height={150}
                            className="rounded-md mb-4 object-cover w-full h-40"
                        />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">Health Insurance</h3>
                        <p className="text-gray-600 text-base">Stay protected and stress-free with comprehensive health insurance plans that cover all your medical needs.</p>
                    </motion.div>
                    <motion.div 
                        whileHover={{
                            scale: 1.05, // Slightly scale up the button
                          }}
                            transition={{type: 'spring', stiffness: 300,}}
                    className="bg-white shadow-md rounded-xl p-6 text-center ">
                        <Image
                            src="/accommodation.jpg"
                            alt="Accommodation"
                            width={300}
                            height={150}
                            className="rounded-md mb-4 object-cover w-full h-40"
                        />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">Accommodation</h3>
                        <p className="text-gray-600 text-base">Unwind in accommodations designed for your ultimate comfort.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
  )
}
