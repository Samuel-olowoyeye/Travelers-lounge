"use client"
import React, { useState} from 'react';
import { AlignJustify, X, MapPin } from 'lucide-react';
import { motion, spring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useFormik } from 'formik';
import { logInValidateSchema } from '@/schemas/LoginValidateSchema';
import toast from 'react-hot-toast';





export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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

  const navList = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About us", href: "about" },
    { id: 3, title: "Services", href: "services" },
    { id: 4, title: "Testimonials", href: "testimonials" },
    { id: 5, title: "Contact", href: "contact" },
  ];

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { duration: 1, type: spring },
    },
  };

  
      {/* Use Formik for form validation and handling */}
      const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: logInValidateSchema,  // Use the Yup schema
        onSubmit : (values) => {
          console.log("Form Submitted:", values);
          resetForm(); // Reset the form after successful submission
          toast.success("Login Successful")
          closeModal(); // Optionally close the modal after form submission
        },
      });

       {/* Reset form when modal is closed */}
            React.useEffect(() => {
              if (!isModalOpen) {
                resetForm(); // Reset form values
              }
            }, [isModalOpen, resetForm]);
    

  return (
    <motion.div
      ref={ref}
      variants={navVariants}
      initial="hidden"
      animate={controls}
      className="xl:px-56 px-2 md:px-6 lg:px-16 w-full text-slate-700 py-8 relative"
    >
      <div className=" flex justify-between bg-transparent items-center shadow-md rounded-full py-2 px-8">
        <h1 className="flex text-center space-x-1 text-md md:text-xl xl:text-xl">
          <MapPin className="mr-0.5 items-center" />
          Traveler&apos;s Lounge
        </h1>

      
        <ul>
            <div className="hidden lg:flex lg:justify-around lg:text-base lg:space-x-6 xl:flex xl:text-base xl:justify-around xl:space-x-10 items-center">
              {navList.map((list) => (
                <motion.li
                  key={list.id}
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: 'spring', stiffness: 700 }}
                  className="relative group"
                >
                  <Link
                      to={list.href}
                      smooth={true}
                      duration={500}
                      offset={-100}> 
                      {/* // Offset for fixed navbar */}
                  {list.title}
                  <div className="absolute w-full h-0.5 bg-orange-500/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </Link>
                </motion.li>
              ))}
            </div>
        </ul>
        <button
          className="xl:hidden lg:hidden text-slate-700 pr-2"
          onClick={toggleMenu}
        >
          {menuOpen ? <X /> : <AlignJustify />}
        </button>

        <motion.button
          whileHover={{ scale: 1.1, originX: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={openModal} // Open modal on click
          className="hidden lg:block xl:block text-base items-center bg-orange-500 hover:bg-orange-400  py-1.5 px-4 rounded-full"
        >
          Log in
        </motion.button>

        {/* Mobile Dropdown Menu */}
        <ul
          className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-1000 ease-in-out ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          {navList.map((item, i) => (
            <Link key={i} href={item.href} onClick={closeMenu}>
              <li className="py-3 px-6 border-b">{item.title}</li>
            </Link>
          ))}
          <button
            onClick={() => {
              closeMenu();
              openModal();
            }}
            className="block w-full text-center mb-6 py-3 mt-2 bg-orange-500 hover:bg-orange-400 text-white rounded-md"
          >
            Log in
          </button>
        </ul>
      </div>

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
              Sign in to your account
            </h3>
            <button
              className="absolute top-2 right-2 text-slate-600 hover:text-slate-700"
              onClick={closeModal}
            >
              <X />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4 py-1">
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
                  className="bg-gray-100 border border-slate-500 rounded-lg w-full p-2 text-slate-700 text-base placeholder:text-base "
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
              <motion.button
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white text-lg py-2 rounded-lg"
              >
                Login to your account
              </motion.button>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
}