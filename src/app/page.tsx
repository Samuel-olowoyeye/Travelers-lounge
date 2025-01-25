import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";



export default function Home() {
  return (
    <div className=" lg:w-full font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[url('/bg-image-1.avif')] h-auto pb-24  bg-center bg-no-repeat bg-cover bg-slate-900 bg-opacity-50 bg-blend-multiply">
        <Navbar />
        <Hero />
      </div>
        <AboutUs/>
        <Services/>
        <Testimonial/>
        <ContactUs/>
        <Footer/>
        <ScrollToTop />
      
    </div>
  );
}
