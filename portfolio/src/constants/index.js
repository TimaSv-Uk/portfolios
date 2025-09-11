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
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  carrent,
} from "../assets";
import php from "../assets/tech/php.png";
import link from "../assets/link.svg";
import python from "../assets/tech/python.png";
import wordpress from "../assets/tech/wordpress.jpg";
import nt_aget from "../assets/nt-aget.png";
import simple_chess_analysis from "../assets/simple-chess-analysis.png";
import airquality from "../assets/Air-Quality-Monitoring-Web-Application.png";

import harvard from "../assets/company/harvard.jpg";
import nubip from "../assets/company/nubip.png";
import certifications from "../assets/company/certifications.png";
import ntaget from "../assets/company/ntaget.png";
import nan from "../assets/company/nan.svg";



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
      title: "CS50: A Turning Point in Computer Science",
      company_name: "Harvard University",
      icon: harvard,
      iconBg: "#8B0000",
      date: "2022",
      points: [
        "This course was the catalyst for my career in software engineering, transforming a curiosity into a dedicated passion.",
        "Developed a deep, foundational understanding of computer science principles, from memory management in C to building full-stack web applications.",
        "Solved complex, real-world problems weekly, which solidified my algorithmic thinking and honed my debugging skills.",
        "Built a diverse portfolio of projects using C, Python, SQL, and web technologies (HTML, CSS, Flask), confirming my love for creating and problem-solving.",
      ],
  },
  {
    title: "Bachelor's Degree in NUBiP",
    company_name: "National University of Life and Environmental Sciences of Ukraine (NUBiP)",
    icon: nubip, // you'll need to create/add this icon
    iconBg: "#005A3A", // A shade of green for NUBiP
    date: "2022 - 2026 (Expected)", // Adjust start/end years as needed
    points: [
      "Applying theoretical knowledge from my curriculum to practical coding challenges and projects.",
      "Developing a strong academic understanding of software architecture, network fundamentals, and core engineering principles.",
      "Collaborating on academic projects, enhancing teamwork and project management skills.",
      "Focusing my final coursework and capstone project on secure systems and web technologies to align with my career goals.",
    ],
  },
  {
      title: "Certifications in Software Development",
      company_name: "U of Alberta, U of Michigan, & Johns Hopkins University",
      icon: certifications, // you'll need to create a generic icon for this
      iconBg: "#383E45", // A neutral, professional color
      date: "2023 - 2025",
      points: [
        "Mastered Object-Oriented Programming (OOP) principles and applied industry-standard design patterns to build scalable and maintainable software.",
        "Developed proficiency in database design, data modeling, and writing optimized SQL queries for efficient data management.",
        "Built and integrated robust database backends into full-stack Python applications.",
        "Acquired skills in data analysis and visualization, learning to extract actionable insights from complex datasets.",
      ],
  },
  {
    title: "Web Developer (Freelance Project)",
    company_name: "Scientific society of anatomists, histologists, embryologists and topographers of Ukraine",
    icon: ntaget, // you'll need to create/add this icon
    iconBg: "#4A4A4A", // A neutral, professional color
    date: "2024",
    points: [
      "Led the full project lifecycle from initial consultation and design to development, testing, and deployment.",
      "Developed a custom WordPress theme from scratch, translating specific client needs into a functional and visually appealing website.",
      "Implemented features for news publication, event calendars, and dynamic content management.",
      "Delivered a complete, easy-to-manage solution that now serves as the organization's primary digital presence.",
    ],
  },
  {
    title: "Cryptographic System Developer",
    company_name: "Institute of Telecommunications and Global Information Space, NAS of Ukraine",
    icon: nan, // you'll need to create/add this icon
    iconBg: "#0d47a1", // A professional, academic blue
    date: "January 2025 - Present",
    points: [
      "Currently designing and developing a secure data encryption system to ensure the confidentiality and integrity of sensitive information.",
      "Responsible for implementing advanced cryptographic algorithms and security protocols.",
      "Architecting a resilient and secure data pipeline for handling encrypted information flows.",
      "Collaborating with academic researchers to translate high-level security requirements into functional code.",
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
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
    ],
    image: airquality,
    source_code_link: "https://github.com/your-username/air-quality-monitoring",
  },
];

export { services, technologies, experiences, testimonials, projects };
