import { Slide } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import { MdWork, MdEvent } from "react-icons/md"; // Importa el icono MdEvent
import { IconContext } from "react-icons";

const LinkButton = ({ href, children }) => (
  <a href={href} className="underline text-blue-500 hover:text-blue-700">
    {children}
  </a>
);

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const TimelineItem = ({ date, title, description, imageSrc, link }) => {
  return (
    <div className="relative flex items-center mb-20 ms-4">
      <div className="absolute w- h-10 -top-3 start-0 bg-gradient-to-br from-purple-800 to-black rounded-full shadow-lg"></div>
      <IconContext.Provider value={{ className: "absolute w-8 h-8 -top-2 start-1 text-white" }}>
        <MdEvent />
      </IconContext.Provider>
      <div className="border-l-2 border-gray-700 pl-6">
        <time className="text-sm font-normal leading-none text-blue-200 dark:text-sky-200/80">
          {date}
        </time>
        <h3 id="nigthol" className="text-left text-gray-600 font-bold mt-2">
          {title}
        </h3>
        <p className="mb-4 text-left font-bold dark:text-gray-200 text-pretty">
          {description}
          <span className='text-pink-500 font-bold'>fixed errors and utilized tools like Code Checker and Docker</span>  for code quality and BDD tests.
        </p>
        {link && (
          <LinkButton href={link}>
            Saber más...{' '}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
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
          </LinkButton>
        )}
      </div>
      {imageSrc && (
        <img
          className="ml-4 rounded-lg max-w-[30%] w-20 h-auto"
          src={imageSrc}
          alt="Timeline"
        />
      )}
    </div>
  );
};

TimelineItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

const EXPERIENCES = [
  {
    date: 'July 2021 - January 2022',
    title: 'Backend Developer',
    description: 'Successfully ',
    imageSrc:
      'https://image.winudf.com/v2/image1/Y29tLm9wZW5sbXMub3Blbmxtc21vYmlsZV9pY29uXzE2MTMzNTE4ODhfMDQ1/icon.png?w=170&fakeurl=1',
    company: 'Open LMS',
    // Add more properties as needed
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div id="ExperiencetoExperience">
      <ol className="relative border-s border-gray-200 ml-3">
        {EXPERIENCES.map((experience, index) => (
          <li key={index} className="mb-10 ms-4">
           
              <div id={`Experience${index}`} className="container mx-auto p-8 max-w-2xl">
                <h1 className="text-5xl font-bold flex items-center mb-10">
                  <MdWork className="mr-6" />Work experience
                </h1>
                <TimelineItem {...experience} />
              </div>
         
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
