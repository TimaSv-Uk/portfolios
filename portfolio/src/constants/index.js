import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import php from "../assets/tech/php.png";
import link from "../assets/link.svg";
import python from "../assets/tech/python.png";
import wordpress from "../assets/tech/wordpress.png";
import nt_aget from "../assets/nt-aget.png";
import simple_chess_analysis from "../assets/simple-chess-analysis.png";
import airquality from "../assets/Air-Quality-Monitoring-Web-Application.png";



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "PHP",
    icon: php,
  },

  {
    name: "Python",
    icon: python,
  },

  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "CS50 - Introduction to Computer Science",
    company_name: "Harvard University",
    icon: harvard, // you'll need to add this icon
    iconBg: "#8B0000",
    date: "2023",
    points: [
      "Completed Harvard's comprehensive introduction to computer science covering algorithms, data structures, and software engineering.",
      "Built projects using C, Python, SQL, and web technologies including HTML, CSS, and JavaScript.",
      "Developed problem-solving skills through challenging problem sets and a final capstone project.",
      "Gained experience with memory management, debugging, and computational thinking.",
    ],
  },
  {
    title: "Object-Oriented Design",
    company_name: "University of Alberta",
    icon: alberta, // you'll need to add this icon
    iconBg: "#00543C",
    date: "2023",
    points: [
      "Mastered object-oriented programming principles including inheritance, polymorphism, and encapsulation.",
      "Applied design patterns and software architecture principles to create maintainable code.",
      "Developed skills in UML modeling and software design documentation.",
      "Built complex applications demonstrating solid OOP practices and design principles.",
    ],
  },
  {
    title: "Using Databases with Python",
    company_name: "University of Michigan",
    icon: michigan, // you'll need to add this icon
    iconBg: "#00274C",
    date: "2023",
    points: [
      "Learned database design principles and SQL query optimization techniques.",
      "Developed Python applications integrating with various database systems.",
      "Implemented data modeling, normalization, and database performance optimization.",
      "Built web applications with database backends using Python frameworks.",
    ],
  },
  {
    title: "Data Analysis Management",
    company_name: "Johns Hopkins University",
    icon: johns_hopkins, // you'll need to add this icon
    iconBg: "#002D72",
    date: "2024",
    points: [
      "Acquired advanced data analysis and visualization skills using modern tools and techniques.",
      "Developed expertise in statistical analysis and data-driven decision making.",
      "Created comprehensive data dashboards and reporting systems.",
      "Applied data management principles to real-world datasets and projects.",
    ],
  },
];
const experiences_old = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scientific society of anatomists, histologists, embryologists and topographers of Ukraine",
    description:
      "An official WordPress website with a custom theme and design that provides information about the society, its activities, news, and scientific events.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "custom theme",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: nt_aget,
    source_code_link: "https://nt-aget.com.ua/",
  },
  {
    name: "Chess Analyzer",
    description:
      "A web application for playing and analyzing chess games using the Stockfish engine. It displays opening evaluations via the Lichess API, supports custom FEN positions, board orientation changes, move history navigation, and detailed analysis. Built with React + Tailwind frontend and a Flask backend with a custom Stockfish API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "stockfish",
        color: "green-text-gradient",
      },
      {
        name: "lichess api",
        color: "pink-text-gradient",
      },
    ],
    image: simple_chess_analysis, // your GIF file
    source_code_link: "https://simple-chess-analysis.netlify.app/",
  },
  {
    name: "Air Quality Monitor",
    description:
      "A web application for monitoring air quality with real-time station data, interactive dashboards, and comprehensive reports featuring visual analytics.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: airquality,
    source_code_link: "https://github.com/your-username/air-quality-monitoring",
  },
];

export { services, technologies, experiences, testimonials, projects };
