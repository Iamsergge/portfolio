import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-two.png';
  import Work2 from './assets/project-one.png';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.jpeg';
  import Work5 from './assets/project-5.jpg';
  import Work6 from './assets/project-6.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Serge',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Mthombeni',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '28 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'South African',
    },
  
    {
      id: 5,
      title: 'Mobile and Web Developer : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'RSA',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+27767120110',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'iammthombeni@gmail.com',
    },
  
    {
      id: 9,
      title: 'linkedin : ',
      description: 'linkedin.com/in/serge-mthombeni-8157b8178',
    },
  
    {
      id: 10,
      title: 'Languages : ',
      description: 'Xitsonga, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '1+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '13+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '100+',
      title: 'Happy <br /> Customers',
    },
  
    {
      id: 4,
      no: '0+',
      title: ' Awards <br /> Won',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2023 - PRESENT',
      title: 'Web  and Mobile Developer <span> Envato </span>',
      desc: 'Developing Web and Mobile Apps in  both front and back end coding. Primary responsibilities include designing user interactions on websites, developing servers, and databases for website and mobile apps functionality, and coding for mobile platforms.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2021 - 2022',
      title: 'General school Assistant <span> Themeforest </span>',
      desc: 'Responsible providing support to the school,teacher, And learners by supporting learners with their sport,arts and cultural development needs and promoting a safe and secure school environment',
    },
  
   
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2015',
      title: 'Metric <span> Vuxeni secondary School </span>',
      desc: 'attended grade 12',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Web and Mobile Development <span> CodeTribe Academy </span>',
      desc: 'CodeTribe is a dedicated programme for developing the next generation of software developers. While established startups are welcome to have members participate in their own time and at own expense, they do not qualify for bursaries as full time students. Startups and their staff or members are advised to apply for incubation and acceleration support through Maxum Business Incubator and mLab.',
    },
  
    
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '60',
    },
  
    {
      id: 2,
      title: 'Reactjs',
      percentage: '89',
    },
  
    {
      id: 3,
      title: 'React-native',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'CSS',
      percentage: '66',
    },
  
    {
      id: 5,
      title: 'Firebase',
      percentage: '95',
    },
  
    
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'UI/UX',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Figma',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://www.figma.com/file/KjBTRba9SUFqX24iUH9bnn/restuarent-app?type=design&node-id=0%3A1&mode=design&t=2CaP4Fy1bdPQsTVs-1',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
  
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  