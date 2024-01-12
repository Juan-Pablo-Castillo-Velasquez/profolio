import { FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

import "../input.css";

export default function Headers() {
    const [x, Setx] = useState(false);
  
    const verifica = x === false ? "null" : "closeX";

    const playNotificationSound = () => {
        const notificacionSound = new Audio('/audio/notificacion.mp3');
        notificacionSound.play();
      
        document.title = "!(1)Tienes una Notification de juan pablo!";
        setTimeout(() => {
            document.title = "you should be my Linkely Profile"; 
        }, 1000);

        return () => {
            notificacionSound.pause();
            notificacionSound.currentTime = 0;
        };
    };

    const handleInteraction = () => {
        playNotificationSound();
        document.removeEventListener('click', handleInteraction);
    };

    useEffect(() => {
        document.addEventListener('click', handleInteraction);

       
        return () => {
            document.removeEventListener('click', handleInteraction);
        };
    }, []);

    return (
        <Fade direction='down' duration={1000}>
            <header className={` p-4 ${verifica} `}>
                <div className="  top-5 relative m-auto flex items-center justify-center text-center">
                    <button className="border-gray-600 border solid rounded-lg p-2 ml-2">Portfolio</button>
                    <p style={{ fontFamily: "arial", marginLeft: "2px", opacity: 0.80 }}>
                        <strong className="font-bold">This Portfolio </strong>, is a compilation of <strong className="font-bold">5+ </strong> projects. If you want the code, <strong className="font-bold">click here</strong>
                    </p>
                    <button onClick={() => Setx(!x)}>
                        <FaTimes size={30} color="white" />
                    </button>
                   
                </div>
            </header>
        </Fade>
    );
}
