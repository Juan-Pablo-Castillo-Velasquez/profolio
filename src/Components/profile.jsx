import { useState, useEffect } from 'react';
import Technologies from "./Tecnologies";
import { motion } from 'framer-motion';
import { FaUserTie } from "react-icons/fa";

export default function Profile() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const rotateImage = () => {
      setRotation((prevRotation) => (prevRotation + 0.1) % 15);
      animationFrameId = requestAnimationFrame(rotateImage);
    };

    rotateImage();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {/* Profile */}
      <motion.div
        className="flex flex-wrap items-center mt-10 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap items-center mt-10 mb-20">
          <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
            <motion.h1
              className="font-extrabold text-4xl sm:text-6xl mb-4 relative z-10 opacity-86 flex items-center"
              whileHover={{ scale: 1.1 }}
            >
               My profile<FaUserTie className="ml-2" />
            </motion.h1>
            <motion.p
              className="relative text-left z-10 font-bold opacity-70"
              whileHover={{ scale: 1.05 }}
            >
              <strong className='text-3xl text-gray-100'>+6</strong> months of experience, <strong className='text-yellow-500 font-bold'>I contributed to projects for Open LMS </strong>, showcasing proactivity and responsibility. I excel in teamwork, being a committed and communicative professional. I am seeking new opportunities to apply and expand my skills.
            </motion.p>
            <Technologies />
            <div className="absolute -left-2 top-20 transform -translate-y-1/2 w-16 h-16 bg-pink-500 rounded-full"></div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              {isHovered ? (
                <div className="rounded-full overflow-hidden relative">
                  {/* Imagen */}
                  <img
                    src="https://pbs.twimg.com/profile_images/1500729405798293507/zUAfWFXg_400x400.jpg"
                    alt="Profile"
                    className="max-w-xs transform rotate-x-0 rotate-y-0 rotate-z-0 hover:rotate-x-12 hover:rotate-y-12 hover:rotate-z-12 transition-transform duration-600 "
                    style={{ transform: `rotateX(${rotation}deg) rotateY(${rotation}deg) rotateZ(${rotation}deg)` }}
                  />

                  {/* Texto centrado */}
                  <p className="absolute opacity-75 inset-0 flex items-center justify-center text-white font-bold hover:transition-all duration-300 transform  ease-in-out hover:translate-y-9">
                    <a href='https://www.linkedin.com/in/juan-pablo-castillo-86542a214/' className='text-3xl font-bold'>View profile</a>
                  </p>
                </div>
              ) : (
                <div className="rounded-full overflow-hidden">
                  <img
                    src="https://media.licdn.com/dms/image/D4E03AQG7KvwLOICSJA/profile-displayphoto-shrink_800_800/0/1704599773143?e=1710374400&v=beta&t=mbwKjT7KOcc8lb-vmtdIMrKfOw9BjouRB-jsfKs6HJI"
                    alt="Profile"
                    className="max-w-xs transform rotate-x-0 rotate-y-0 rotate-z-0 hover:rotate-x-12 hover:rotate-y-12 hover:rotate-z-12 transition-transform duration-500"
                    style={{ transform: `rotateX(${rotation}deg) rotateY(${rotation}deg) rotateZ(${rotation}deg)` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Profile */}
      </motion.div>
    </>
  );
}
