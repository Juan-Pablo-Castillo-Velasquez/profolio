import Card from "./Card";
import { IoChevronUpSharp } from "react-icons/io5";
import Data from "./Data";
import { useState, useEffect } from "react";
import Profile from "./profile";
import Services from "./Services";
import Footer from "./fotter";
import Experience from "./Experience";
import { Slide } from "react-awesome-reveal";
import { FaIcons } from "react-icons/fa";

export default function Home() {
  const NavtoNav = () => {
    const navtoNav = document.getElementById('NavtoNavxd');
    const colors = ["linear-gradient(to right, #ff7e5f, #feb47b)", "linear-gradient(to right, #1d976c, #93f9b9)"];
const currentColorIndex = 0; // Cambia este índice según tu preferencia de color
    if (navtoNav) {
      navtoNav.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'services' not found");
    }
  };

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["text-pink-700", "text-blue-500", "text-green-600"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex flex-col min-h-screen relative">
      <div
        className="bg-cover bg-center flex-1"
        
      >
        <div id="NavtoNavxd" className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
        <div className="flex flex-col justify-center items-center text-center p-4 mt-10 sm:p-8 h-full relative ">
  <Slide>
  <h1
    className={`font-extrabold text-4xl sm:text-6xl mb-2 ${colors[currentColorIndex]}`}
  >
    WELCOME TO MY
    <strong  id="webProfile" className='text-black font-bold'> WEB PORTFOLIO{"</>"}</strong>
  </h1>
  <p className="text-lg text-gray-200 mb-8">
  <span>A</span>
  <span style={{ color: '#4285F4' }}> showcase</span>
  <span> of my work and skills. Explore </span>
  <span style={{ color: '#0F9D58' }}>the services</span>
  <span style={{ color: '#DB4437' }}> I offer below.</span>
  <span style={{ color: '#FFA500' }}>⭐</span>
</p>


  </Slide>
          <div className="flex flex-col sm:flex-row items-center"></div>
          <Profile />
          <Experience />

         
            <h1
              id="services"
              className="text-center text-6xl font-bold opacity-85 mb-2 mt-10"
            >
              Services{" "}
            </h1>
            <Services />
        
          <Data />
          <h1 className="text-5xl font-bold opacity-80">See more projects </h1>
          <Card />
        </div>
        
        <button
          onClick={NavtoNav}
          className="fixed bottom-12 right-10 bg-white text-black px-4 py-2 rounded  p-5 hover:transition-all duration-300 ease-out transform hover:translate-y-2 hover:bg-gray-700 hover:text-white"
        >
          <IoChevronUpSharp />
        </button>
      </div>
      <Footer />
    </div>
  );
}
