"use client"
import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useFormik } from 'formik';
import { contactValidationSchema } from '@/schemas/contactValidateSchema';
import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';


export default function ContactUs() {

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
  
      const headingVariants = {
        hidden: { opacity: 0 , y: -50},
        visible: { opacity: 1, y: 0,
           transition: 
           { duration: 1, ease: "easeOut", type: 'spring' } ,  
          },
      };


      const textVariants = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, transition: {delay:1, duration: 2, ease: "easeOut" } },
      };


      const formVariants = {
        hidden: { opacity: 0 , y: 100},
        visible: { opacity: 1, y: 0,
           transition: 
           {delay:1.5,  duration: 1, ease: "easeOut", type: 'spring' } ,  
          },
      };

        // Use Formik for form validation and handling
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { values, errors, handleBlur, handleChange, handleSubmit,touched, resetForm } = useFormik({
            initialValues: {
              name: "",
              email: "",
              phone: "",
              message: "",
            },
            validationSchema: contactValidationSchema,  // Use the Yup schema
      
             onSubmit : (values, { resetForm }) => {
              console.log("Form Submitted:", values);
              toast.success("Appointment Booked Successfully");
              resetForm(); // Reset the form after successful submission
            },
          });

     

  return (
    
      <div id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-16">
            <motion.h1
              ref={ref}
              variants={headingVariants}
              initial="hidden"
              animate= {controls}
              whileHover={{
                scale: 1.1, // Slightly scale up the button
    
                transition: { stiffness: 300, type: 'spring' }
              }}
            className="text-3xl font-bold text-center text-slate-700 mb-6">
              Contact Us
            </motion.h1>
            <motion.p
              ref={ref} 
              variants={textVariants}
              initial="hidden"
              animate= {controls}
              className='font-semibold text-base xl:text-lg text-center leading-6 text-slate-600 mb-6 '>
                Ready to embark on your next trip? Book an Appointment with us Today!!!
              </motion.p>

            <motion.form 
            onSubmit={handleSubmit}
            ref={ref}
            variants={formVariants}
            initial="hidden"
            animate= {controls}
            
            className='px-4 py-3 md:px-8 md:py-4 lg:px-16 lg:py-8 shadow-lg xl:mx-[350px] rounded-xl xl:px-16 xl:py-8 '>

              <div className="mt-5">
                  <label htmlFor="name" className="block py-2.5  text-md font-semibold text-slate-600">
                    Full Name
                </label>
                <input 
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}              
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
                {errors.name &&  <div className="text-red-500 text-sm">{errors.name}</div>}
              </div>

              <div className="mt-4">
                  <label htmlFor="name" className="block pb-2.5 text-md font-semibold text-slate-600">
                    Email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}               
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>

              <div className="mt-4  ">
                  <label htmlFor="name" className="block pb-2.5 text-md font-semibold text-slate-600">
                    Phone Number
                </label>
                <input 
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}                
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400"
                />
                {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
              </div>

              <div className="mt-4 ">
                  <label htmlFor="name" className="block pb-2.5 text-md font-semibold text-slate-600">
                    Drop your message
                </label>
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}  
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full px-4 text-xl border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400 ">
              </textarea>
              {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
              </div>

              <div className="mt-4 mb-6 ">
                  <motion.button
                    whileHover={{
                      scale: 1.02, // Slightly scale up the button
          
                      transition: { stiffness: 300, type: 'spring' }
                    }}
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-orange-500 rounded-xl hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Send Message
                  </motion.button>
           </div>
        </motion.form>
    </div>
    </div>
  )
}





















