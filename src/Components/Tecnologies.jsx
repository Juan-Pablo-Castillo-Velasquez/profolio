import { useState } from "react";
import "../input.css"
export default function Technologies() {
    const [tooltipVisible, setTooltipVisible] = useState(null);

   
const technologies = [
    { id: 1, url: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", name: " Javascript", description: "one year of experience with this techonologies" },
    { id: 2, url: "https://cdn-icons-png.flaticon.com/512/3459/3459528.png", name: "react ", description: "5 moth created aplications frond end" },
    { id: 3, url: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", name: "python", description: "created inovate tools for 3 moths" },
    { id: 4, url: "https://cdn-icons-png.flaticon.com/512/919/919825.png", name: "nodejs", description: "created apps back end utilicing express" },
    { id: 5, url: "https://cdn-icons-png.flaticon.com/512/919/919830.png", name: "php", description: "fixed errros with code checker y created plugins for  moodle 3 moths" },
    { id: 6, url: "https://cdn-icons-png.flaticon.com/512/11518/11518876.png", name: "git", description: "collaboration in diferent repositorys of git" },
    { id: 7, url: "https://cdn-icons-png.flaticon.com/512/919/919853.png", name: "docker", description: "created image for solution direfents versions problems' apps and testing DBB" },
];
   
const handleIconHover = (id) => {
setTimeout(()=>{
    setTooltipVisible(id);

},[100])
};

const handleIconLeave = () => {
    setTooltipVisible(null);
};

return (
    <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        {technologies.map((tech) => (
            <div
                key={tech.id}
                className="m-2 relative"
                onMouseOver={() => handleIconHover(tech.id)}
                onMouseLeave={handleIconLeave}
            >
                <img
                    src={tech.url}
                    alt={`icon-${tech.id}`}
                    className="w-24 sm:w-24 md:w-20 lg:w-24 xl:w-24 hover:transition-all duration-300 transform hover:translate-y-5"
                />
                {tooltipVisible === tech.id && (
                    <div className="tooltip hover:transition-all duration-300 ease-out transform hover:translate-y-4 rounded-xl">
                        <h1 className="font-bold text-black text-4xl opacity-80">{tech.name}</h1>
                        <p className="text-gray-900 opacity-80">{tech.description}</p>
                    </div>
                )}
            </div>
        ))}
    </div>
);
}