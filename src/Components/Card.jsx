import {Fade} from "react-awesome-reveal"

const Card = () => {
  const cardData = [
    {
     
    {
      title: "SearchingForFiles",
      description: "Created in Python, this application searches for occurrences in the project and writes them.",
      imageSrc: "https://github.com/Juan-Pablo-Castillo-Velasquez/SerachingForFiles/raw/master/img/example2.png",
      link: "https://github.com/Juan-Pablo-Castillo-Velasquez/SerachingForFiles",
      likes: 150,
    },
    {
      title: "Register students",
      description: "Plugin for Moodle. This plugin helps to register students in every course.",
      imageSrc: "https://github.com/Juan-Pablo-Castillo-Velasquez/formulario_matriculacion_moodle/raw/main/img/users.png",
      link: "https://github.com/juanpablo2007k/Moodle_form_Example",
      likes: 120,
    },
    {
      title: "Davivienda_Project",
      description: "Added client for loans. This system manager has basic functions and registration with MySQL.",
      imageSrc: "https://github.com/Juan-Pablo-Castillo-Velasquez/profolio/blob/master/src/img/project3.jpg?raw=true",
      likes: 130,
    },
    
    }
  ];

 
  return (
    <div id="Projects" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-7 mt-4">
      <Fade duration={1000} cascade={true}>
        {cardData.map((card, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md transition-all ease-out duration-300 transform hover:scale-105 mb-4">
            <a href={card.link} className="relative block">
              <div className="flex items-center justify-center">
                <img
                  className="w-full h-72 object-cover rounded-t-lg"
                  src={card.imageSrc}
                  alt={`Card${index + 1}`}
                  style={{ filter: 'brightness(70%)' }}  
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-gradient-to-b from-gray-800 to-black bg-opacity-60 transition-opacity opacity-0 hover:opacity-100">
                <div className="flex items-center text-white mb-2">
                  <img className="w-4 mr-2" src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="Likes Icon" />
                  <p>{card.likes} Likes</p>
                </div>
                <div className="text-white text-center mt-4">
                  <p className="text-lg font-bold">{card.title}</p>
                  <p className="text-base">{card.description}</p>
                </div>
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="block bg-pink-500 text-white py-2 px-4 rounded-full text-center hover:bg-black font-bold hover:">
                  Leer Más
                </a>
              </div>
            </a>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Card;
