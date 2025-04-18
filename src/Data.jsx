import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';
import skillsImg6 from './assets/nextjs-logo.svg';

import skillsImg7 from './assets/node-js-logo.svg';
import skillsImg8 from './assets/mongodb-logo.svg';
import skillsImg9 from './assets/mysql-logo.svg';
import skillsImg10 from './assets/express-logo.svg';
import skillsImg11 from './assets/php-logo.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const skill = [
     {
          id: 1,
          img: skillsImg1,
          title: 'HTML',
          level: 'Intermediate',
          category: 'developer',
     },

     {
          id: 2,
          img: skillsImg2,
          title: 'CSS',
          level: 'Intermediate',
          category: 'developer',
     },

     {
          id: 3,
          img: skillsImg3,
          title: 'JavaScript',
          level: 'Intermediate',
          category: 'developer',
     },

     {
          id: 4,
          img: skillsImg4,
          title: 'React.JS',
          level: 'Intermediate',
          category: 'developer',
     },

     {
          id: 5,
          img: skillsImg5,
          title: 'Tailwind',
          level: 'Intermediate',
          category: 'developer',
     },

     {
          id: 6,
          img: skillsImg6,
          title: 'Next.JS',
          level: 'Basic',
          category: 'developer',
     },

     {
          id: 7,
          img: skillsImg7,
          title: 'Node.JS',
          level: 'Basic',
          category: 'designer',
     },

     {
          id: 8,
          img: skillsImg8,
          title: 'MongoDB',
          level: 'Basic',
          category: 'designer',
     },

     {
          id: 9,
          img: skillsImg9,
          title: 'MySQL',
          level: 'Basic',
          category: 'designer',
     },

     {
          id: 10,
          img: skillsImg10,
          title: 'Express.JS',
          level: 'Basic',
          category: 'designer',
     },

     {
          id: 11,
          img: skillsImg11,
          title: 'PHP',
          level: 'Basic',
          category: 'designer',
     },
];

export const links = [
     {
          name: 'Home',
          icon: <FaHome className='nav-icon' />,
          path: '/',
     },

     {
          name: 'About',
          icon: <FaUser className='nav-icon' />,
          path: '/about',
     },

     {
          name: 'Projects',
          icon: <FaFolderOpen className='nav-icon' />,
          path: '/portfolio',
     },

     {
          name: 'Contact',
          icon: <IoCall className='nav-icon' />,
          path: '/contact',
     },
];


export const personalInfo = [
     {
          title: 'First Name : ',
          description: 'Mohd Asad',
     },

     {
          title: 'Last Name : ',
          description: 'Naseem',
     },

     {
          title: 'Age : ',
          description: '24 Years',
     },

     {
          title: 'Nationality : ',
          description: 'Indian',
     },

     {
          title: 'Address : ',
          description: 'Bijnor',
     },

     {
          title: 'Phone : ',
          description: '+91 9027623846',
     },

     {
          title: 'Email : ',
          description: 'mohdasadnaseem.man786@gmail.com',
     },

     {
          title: 'Langages : ',
          description: 'Hindi, English',
     },
];

export const stats = [
     {
          no: '8+',
          title: 'Months of <br /> Experience',
     },

     {
          no: '10+',
          title: 'Completed <br /> Projects',
     },

     {
          no: '9/10',
          title: 'Completion <br />Average',
     }
];

export const resume = [
     {
          id: 1,
          category: 'experience',
          icon: <RiBriefcase4Fill />,
          year: '2024 - Present',
          title: 'MERN Stack Developer Trainee <span> AccioJob </span>',
          desc: 'Assists in the development, maintenance, and enhancement of web applications. Utilizes the MERN stack to create dynamic and responsive web applications.',
     },

     {
          id: 2,
          category: 'experience',
          icon: <RiBriefcase4Fill />,
          year: '2019 - 2020',
          title: 'Web Developer Trainee <span> ITMS </span>',
          desc: 'Supports the development, maintenance, and enhancement of web applications using Core PHP. Assists in the design and implementation of user interfaces.',
     },

     {
          id: 3,
          category: 'education',
          icon: <RiGraduationCapFill />,
          year: '2020 - 2024',
          title: 'Bachelor Of Technology <span> AKTU </span>',
          // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.',
     },

     {
          id: 4,
          category: 'education',
          icon: <RiGraduationCapFill />,
          year: '2018',
          title: 'Higher Secondary School <span> D.D.P.S </span>',
          // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.',
     },

     {
          id: 5,
          category: 'education',
          icon: <RiGraduationCapFill />,
          year: '2016',
          title: 'Senior SecondarySchool <span> D.D.P.S </span>',
          // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.',
     },
];

export const portfolio = [
     {
          id: 1,
          img: projectImg1,
          title: "Coder's Cafe Website",
          description:
               "Coder's Cafe is a streamlined project that sets up a React development environment using Vite, focusing on speed and efficiency. It features Hot Module Replacement (HMR) for real-time updates during development.",
          skills: [skillsImg4, skillsImg5],
          link: 'https://coder-s-cafe.vercel.app/',
     },

     {
          id: 2,
          img: projectImg2,
          title: 'Recipe-Catalogue',
          description:
               'It is an online platform where users can browse, search, and share various recipes. It allows users to filter recipes by ingredients, cuisine, or dietary preferences.',
          skills: [skillsImg1, skillsImg2, skillsImg3],
          link: 'https://recipe-catalogue.vercel.app/',
     },

     {
          id: 3,
          img: projectImg3,
          title: 'Car Race Game',
          description:
               'A pretty fun implementation for a simple 2D racing game with basic mechanics like acceleration, lane switching, and collision detection',
          skills: [skillsImg1, skillsImg2, skillsImg3],
          link: 'https://car-race-game-one.vercel.app',
     },

     {
          id: 4,
          img: projectImg4,
          title: 'Barbershop Website',
          description:
               'Short description of the project that was carried out in this portfolio.',
          skills: [skillsImg4, skillsImg5],
          link: '',
     },

     {
          id: 5,
          img: projectImg5,
          title: 'Construction Landing Page',
          description:
               'Short description of the project that was carried out in this portfolio.',
          skills: [skillsImg1, skillsImg2, skillsImg3],
          link: '',
     },
];

export const themes = [
     {
          img: Theme1,
          hue: '4',
     },

     {
          img: Theme2,
          hue: '271',
     },

     {
          img: Theme3,
          hue: '225',
     },

     {
          img: Theme4,
          hue: '339',
     },

     {
          img: Theme5,
          hue: '80',
     },

     {
          img: Theme6,
          hue: '19',
     },

     {
          img: Theme7,
          hue: '42',
     },
];