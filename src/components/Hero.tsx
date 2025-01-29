"use client"
import Link from "next/link";
import React,{ useState } from "react";
import { motion, spring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import { signInValidateSchema } from '@/schemas/signInValidateSchema';
import { useFormik } from "formik";
import toast from "react-hot-toast";


export default function Hero() {

    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility


    const openModal = () => setIsModalOpen(true); // Open modal
    const closeModal = () => setIsModalOpen(false); // Close modal
      

    // Prevent scrolling when modal is open
      React.useEffect(() => {
        if (isModalOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
      }, [isModalOpen]);

    // InView Hook to detect when the component is in the viewport
  // InView Hook to detect when the component is in the viewport
   
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger animation when 30% of the component is visible
    triggerOnce: false, // Animate only the first time it comes into view
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0 ,  transition: { duration: 0.5, ease: "easeOut", type: spring }  }
  };

  
    // Use Formik for form validation and handling
    const { values, errors, handleBlur, handleChange, handleSubmit, validateForm, resetForm } = useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: signInValidateSchema,
      validateOnChange: false, // Disable validation on change
      validateOnBlur: false,   // Use the Yup schema

       onSubmit : async (values, { resetForm }) => {

        // Manually trigger validation before submission
        const errors = await validateForm();

        if (Object.keys(errors).length === 0) {
          console.log("Form Submitted:", values);
          resetForm(); // Reset the form after successful submission
          // toast.success("Appointment booked Successfully");
          toast.success("Account Created Successfully")
        } else {
          console.log("Form has errors:", errors);
        }

        

        closeModal(); // Optionally close the modal after form submission
      },
    });

    // Reset form when modal is closed
      React.useEffect(() => {
        if (!isModalOpen) {
          resetForm(); // Reset form values
        }
      }, [isModalOpen, resetForm]);

  

  return (
    <motion.div 
      ref={ref}
      className="xl:mx-56 my-40 text-center"
      variants={containerVariants}
      initial="hidden"
      animate= {controls}
    >
      {/* Heading */}
      <motion.h1
        className="xl:w-full md:px-6 md:pt-10 xl:pt-0 px-4 mb-4 mx-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:text-5xl xl:text-[54px] dark:text-white"
        variants={itemVariants}
      >
        Find your next adventure with us.
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="xl:w-full px-2 mb-6 text-base sm:text-xl font-normal text-gray-500 xl:text-xl sm:px-16 xl:px-44 dark:text-gray-400"
        variants={itemVariants}
      >
        Here At Traveler&apos;s Lounge, we focus on destinations where culture,
        adventure, and unforgettable experiences come together to create
        journeys that last a lifetime.
      </motion.p>

      {/* Button */}
      <motion.div 
      variants={buttonVariants}
      whileHover={{
        scale: 1.1, // Slightly scale up the button
      }}
        transition={{type: 'spring', stiffness: 300,}}
        
      >
        <Link
        onClick={openModal} // Open modal on click
          href="#"
          className="inline-flex  items-center justify-center px-5 py-3 text-sm sm:text-base font-medium text-center text-white bg-orange-500 rounded-xl hover:bg-orange-400 focus:ring-4 focus:ring-orange-500 dark:focus:ring-orange-500"
        >
          Get started
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
         </motion.div>

         {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex justify-center items-center "
          onClick={closeModal} // Close modal when clicking on overlay
        >
          <div
            className="relative p-6 w-full mx-4 max-w-md max-h-full text-2xl text-white rounded-lg shadow bg-slate-50 "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h3 className="flex items-center justify-between mb-6 p-4 md:p-5 border-b rounded-t border-gray-600 text-slate-700 font-bold">
              Create your account
            </h3>
            <button
              className="absolute top-2 right-2 text-slate-600 hover:text-slate-700"
              onClick={closeModal}
            >
              <X />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4 py-1 text-start">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm  text-slate-700 font-semibold"
                >
                  Email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  id="email" 
                  className="bg-gray-100 border border-slate-500 rounded-lg w-full p-2 text-slate-700 text-base placeholder:text-base"
                  placeholder="name@company.com"
                />
                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm  text-slate-700 font-semibold "
                >
                  Password
                </label>
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  id="password"
                  className="bg-gray-100 border border-slate-500 rounded-lg w-full p-2 text-slate-700 text-base mb-2 placeholder:text-base"
                  placeholder="••••••••"
                />
                {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm  text-slate-700 font-semibold "
                >
                  Confirm Password
                </label>
                <input
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  id="confirmPassword"
                  className="bg-gray-100 border border-slate-500 rounded-lg w-full p-2 text-slate-700 text-base mb-2 placeholder:text-base"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
              </div>
              <motion.button
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
                type="submit"
                className="w-full -mx-1 bg-orange-600 hover:bg-orange-500 text-white text-lg py-2 rounded-lg"
              >
                Register new account 
              </motion.button>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
}

