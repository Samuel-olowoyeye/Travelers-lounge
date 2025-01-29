"use client"
import { ChevronsRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion, spring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {

   // InView Hook to detect when the component is in the viewport
    // InView Hook to detect when the component is in the viewport
     
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
  
    const imageVariants = {
      hidden: { opacity: 0, x:-100 },
      visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" }  },
    };

    const headingVariants = {
      hidden: { opacity: 0 , y: -100},
      visible: { opacity: 1, y: -1,
         transition: 
         { duration: 1.5, ease: "easeOut", type: 'spring' } ,  
        },
    };

    const BoxVariants = {
      hidden: { opacity: 0, x: 10},
      visible: { opacity: 1, x: 0, transition: {delay:1 , duration: 0.5, ease: "easeOut", type: 'spring', }  },
    };
  
    const buttonVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 ,  transition: { delay:1.5, duration: 5, ease: "easeOut", type: spring }  }
    };

  return (
    <div id="about"
      className='block md:block lg:flex xl:flex xl:flex-cols-2 my-16 md:mx-4 xl:my-28 xl:mx-56 xl:space-x-8'>
      <motion.div
      ref={ref}
      variants={imageVariants}
      initial="hidden"
      animate= {controls}
      whileHover={{
        scale: 1.05, // Slightly scale up the button

        transition: { stiffness: 300, type: 'spring' }
      }}
      >
          <Image alt='vacation' src="/about us.jpg" width={600} height={480} className='w-[310px] h-[310px] md:w-full md:px-8 md:h-auto mx-auto lg:w-[600px] lg:h-[480px]  xl:w-[600px] xl:h-[480px] object-cover '/>
      </motion.div>
      <div className='md:w-full lg:w-[500px] xl:w-[500px] px-4 py-6 lg:p-0 xl:p-2'>
          
          <motion.h2 
          ref={ref}
          variants={headingVariants}
          initial="hidden"
          animate= {controls}
          whileHover={{
            scale: 1.01, // Slightly scale up the button
            transition: { stiffness: 300, type: 'spring' }
          }}
          className='mb-3 px-4 pt-2 xl:pt-0 text-2xl font-extrabold leading-none tracking-tight md:text-xl lg:text-xl xl:text-2xl text-slate-700'>
            About Us
          </motion.h2>
          
          
          <motion.ul
            ref={ref} 
            variants={BoxVariants}
            initial="hidden"
            animate= {controls}
            className=' space-y-3 text-slate-600 px-4 py-2 text-base'>
            <motion.li
               whileHover={{
                scale: 1.05, // Slightly scale up the button

                transition: { stiffness: 300, type: 'spring' }
              }}
            >
              Welcome to Traveler&apos;s Lounge! We are your trusted travel partner, 
              dedicated to making your dream journeys a reality. With years of experience 
              in curating unforgettable travel experiences, we pride ourselves on offering 
              personalized packages tailored to your preferences.
            </motion.li>
            <motion.li
            // ref={ref} 
            variants={BoxVariants}
            initial="hidden"
            animate= {controls}
               whileHover={{
                scale: 1.05, // Slightly scale up the button
                transition: { stiffness: 300, type: 'spring' }
              }}
              
            >
                Our team of travel enthusiasts works tirelessly to ensure you explore the 
                world with ease and comfort. From serene beaches to bustling cities, 
                enchanting mountains to cultural landmarks, we bring you closer to the 
                wonders of the globe.
            </motion.li>
            <motion.li
            ref={ref} 
            variants={BoxVariants}
            initial="hidden"
            animate= {controls}
               whileHover={{
                scale: 1.05, // Slightly scale up the button
                transition: { stiffness: 300, type: 'spring' }
              }}
            >
                Let us take care of the details while you focus on creating memories that 
                last a lifetime. Adventure awaits—let&apos;s embark on it together!
            </motion.li>
          </motion.ul>
          <motion.button
          ref={ref} 
          variants={buttonVariants}
          initial="hidden"
          animate= {controls}

          whileHover={{
            scale: 1.05, // Slightly scale up the button
          }}
            transition={{type: 'spring', stiffness: 300,}}
          className='flex text-orange-400 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 my-2 mx-4 '>Learn more <span className='items-center'><ChevronsRight /></span> </motion.button>
      </div>
    </div>
  )
}
