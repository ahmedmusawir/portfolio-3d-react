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
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

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
    title: "Web Developement",
    icon: web,
  },
  {
    title: "React/Next.js Frontend",
    icon: mobile,
  },
  {
    title: "Full Stack (APIs/CMSs)",
    icon: backend,
  },
];

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr. Web Developer & React Frontend Engineer",
    company_name: "Cyberize Group Inc.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2018 - Present",
    points: [
      "Developed Apps  w/ ES6/React.js & Next.js & w/ backend API-s & CMS-s (Sanity.io, GraphCMS, WordPress, WooCommerce etc.)",
      "Developed WordPress Websites & plugins from Scratch w/ ES6 JS, React.js & PHP",
      "Deployed React/Next.js-based applications via KSH shell scripts, Docker, SSH & Docker Hub",
      "Managed & Maintained 3 Linux- based VPS-s with WHM, cPanel/Plesk & Docker (Development, Staging & Client’s)",
    ],
  },
  {
    title: "React Frontend Developer",
    company_name: "DeepCast.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2017 - Feb 2018",
    points: [
      "Developed company website as a React App according to design",
      "Converted that React App into a website & a progressive web app with Next.js",
      "Deployed projects into staging (Digital Ocean droplet) using KSH shell script, Docker & Docker Hub",
      "Did research and collected information for the CTO about React-related tech stacks (Next.js, Node.js/Express, React Bootstrap, Docker etc.)",
    ],
  },
  {
    title: "Web Designer & Developer (Freelancer)",
    company_name: "HtmlFiveDev.com",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2012 - Oct 2017",
    points: [
      "Built Custom Site from scratch based on my own Theme Development Framework called Moose Framework",
      "Converted Website Designs (PSDs)  to full blown WordPress Sites for clients",
      "Customized Premiem WP Themes to build client websites",
      "Deployed & maintained WP websites on several hosting platforms (Bluehost, Godaddy, Siteground etc.)",
    ],
  },
  {
    title: "Web Master",
    company_name: "eTech Corners LLC.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2010 - Oct 2012",
    points: [
      "Managed and maintained web hosting VPS-s w/ WHM & cPanel",
      "Secured WordPress Websites manually with PHP and with plugins",
      "Deployed websites via SSH and performed backup/restore operations",
      "Increased site load speed and performed benchmark tests using GTMatrix, Pingdom etc.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
