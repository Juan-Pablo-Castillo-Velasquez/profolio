// Navbar.js
import { Link } from 'react-router-dom';
import { FaGithub,FaDiscord,FaStar,FaBars,FaLinkedin   } from "react-icons/fa";
import { useState } from 'react';
  function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const scrollToServices = () => {
      const servicesSection = document.getElementById('services');
      
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error("Element with ID 'services' not found");
      }
    };
    

    const scrollToExperience = () => {
      const ExperienceSection = document.getElementById('ExperiencetoExperience');
      
      if (ExperienceSection) {
        ExperienceSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error("Element with ID 'Experience' not found");
      }
    };


    const scrollToProjects= () => {
      const Projects = document.getElementById('Projects');
      
      if (Projects) {
        Projects.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error("Element with ID 'Projects' not found");
      }
    };
    
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);

  };
       

  return (
<div style={{ zIndex: 1000, backgroundImage: 'linear-gradient(to top, rgba(20, 6, 44, 0.945), rgba(6, 2, 17, 0.952))', backgroundSize: 'cover' }} className='sticky top-0 bg-blue-900 flex flex-col md:flex-row p-2 items-center justify-between mb-4 mt-7'>
 


      <div className="flex items-center space-x-4">
        <button className="border border-gray-200 rounded-3xl p-2 text-lg">
          <strong>V 2.91</strong>
        </button>
       <a href='https://www.linkedin.com/in/juan-pablo-castillo-86542a214/'>
       <button className="p-2">
          <FaLinkedin  size={40} />
        </button>
       </a>
        <p className='font-bold '><strong>Juanpablo2007k@</strong></p>
      </div>
      <div className='md:hidden'>
        {/* Botón de menú para dispositivos móviles */}
        <button className='text-gray-200 text-lg ml-2' onClick={toggleMenu}>
          <FaBars size={30} />
        </button>
      </div>
      <nav className={`text-center flex flex-col list-none space-x-4 items-center md:flex ${menuVisible ? 'block' : 'hidden'} md:space-x-4 md:flex-row md:mb-0`}>
        <li className='font-bold text-gray-400 text-2xl hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-1 mb-2 md:mb-0'>
          <Link to="/">Home</Link>
        </li>
        <li className='font-bold text-gray-400 text-2xl hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-1 mb-2 md:mb-0'>
          <button onClick={scrollToServices}><p className='font-bold'>services</p></button>
        </li>
        <li className='font-bold text-gray-400 text-2xl hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-1 mb-2 md:mb-0'>
          <button onClick={scrollToExperience}><p className='font-bold'>experience</p></button>
        </li>
        <li className='font-bold text-gray-400 text-2xl hover:transition all duration-300 transform ease-out hover:text-gray-400 hover:translate-y-1 mb-2 md:mb-0'>
      
          <button onClick={scrollToProjects}><p className='font-bold'>projects</p></button>

        </li>
       
      </nav>
      <div className='md:flex space-x-4 items-center hidden'>
        {/* Agrega los botones adicionales aquí */}
        <button className='border border-gray-500 rounded-3xl p-3 text-2xl hover:transition-all duration-300 ease-out transform hover:translate-x-3'><FaStar /></button>
<a href='https://github.com/Juan-Pablo-Castillo-Velasquez'><button className='border border-gray-500 rounded-3xl p-3 text-2xl hover:transition-all duration-300 ease-out transform hover:translate-x-3'><FaGithub /></button></a>
       <a href='https://discord.com/channels/@me'> <button className='border border-gray-500 rounded-3xl p-3 text-2xl hover:transition-all duration-300 ease-out transform hover:translate-x-3'><FaDiscord /></button></a>
        <a href='https://wa.me/qr/KCU5V5VTL6SEE1'><button className=' bg-green-400 text-white rounded-3xl p-2 text-1xl hover:transition-all duration-300 ease-out transform hover:translate-x-1 hover:bg-gray-700'>WhatSaap</button></a>
       
      </div>
    </div>
      );
    }
  
  export default Navbar;
  
