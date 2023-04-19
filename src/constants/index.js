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
  crypto,
  realestate,
  blog,
  dalle,
  dashboard,
  deepcast,
  reactDeploy,
  dockerDeploy,
  folio3d,
  folioSanity,
  gym,
  rico,
  travel,
  storeSanity,
  selflist,
  traffic2lead,
  woocom,
  chatapi,
  arturo,
  rami,
  lilian,
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
    id: "resume",
    title: "Resume",
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
      "I wholeheartedly recommend Moose for any frontend development position. As CTO at DeepCast.ai, I supervised Moose for a while, witnessing his exceptional technical skills and dedication to project success. He contributed to various projects using ES6 JavaScript, React.js, Next.js, and more while actively participating in R&D efforts. Moose is an effective communicator, team player, and quick learner, making him an invaluable asset. I have no doubt he will continue to excel and make significant contributions in his future endeavors.",
    name: "Arturo Kyle",
    designation: "CTO",
    company: "DeepCast.ai",
    image: arturo,
  },
  {
    testimonial:
      "Working with Da Moose (Ahmed Musawir) has inspired me to achieve higher goals, because he encouraged me to reach out past my boundaries. I had an opportunity to work with him on TrinityMultiWorld.com project when he volunteered to help us on behalf of HTMLfiveDev.com. If asked, Moose (Ahmed Muswir) gave helpful criticisms of my work and then would volunteer to help me implement the solutions. He was a team player who could always be counted on to put in more than his share of the work. I'm proud to call him my friend and mentor.",
    name: "Rami Riza",
    designation: "Web Designer",
    company: "TrinityMultiWorld SDN BHD",
    image: rami,
  },
  {
    testimonial:
      "HTMLfiveDev.com designed my website with flair and originality, and was spot on in terms of what I was looking to achieve with it. I've had so much positive feedback since launching the site (most people use the word 'amazing!' to describe it), I wouldn't hesitate to recommend HTMLfiveDev.com to anyone looking for a website designer that's a cut above the rest.",
    name: "Lillian Lue",
    designation: "CTO",
    company: "VisaAsiaOnline.com",
    image: lilian,
  },
];

const projects = [
  {
    name: "Cyber Crypto",
    description:
      "A Crypto Currency Statistics based app built with React/Next.js frontend and two Crypto Currency API-s. Redux Toolkit was implemented for data fetching. Ant Design Ui/Ux Library & SCSS were used for styling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "antdesign",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "coinranking-api",
        color: "pink-text-gradient",
      },
      {
        name: "bingnewssearch-api",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/ahmedmusawir/cyber-crypto-react-api",
    project_link: "https://www.youtube.com/watch?v=WIBJyZnYduk",
  },
  {
    name: "Real Estate",
    description:
      "A React/Next.js based responsive real estate project. A Dubai real estate based API was used at the backend as data source. Material UI was used as a Ui/Ux framework. Static page generation, complex data filtering over API etc. were implemented.",
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
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "bayut-api",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/ahmedmusawir/realestate-react-api",
    project_link: "https://www.youtube.com/watch?v=HQGNrzJOHx0",
  },
  {
    name: "Cyber Gym",
    description:
      "A React App based on GoldGym's API as a backend datasource. Material UI and SCSS were used for styling. Redux Toolkit was used for data fetching & caching. A YouTube Search API was used to bring in related workout videos",
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
        color: "blue-text-gradient",
      },
      {
        name: "goldsgym-api",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/ahmedmusawir/gym-react-api",
    project_link: "https://www.youtube.com/watch?v=IHU5PL2Hk_Q&t=8s",
  },
  {
    name: "SelfLIST Chat",
    description:
      "A React based Chat App created to be used in the SelfLIST App. At the backend Chat API service was used. After building, this was converted into a WordPress plugin and used in the SelfLIST app. Gulp.js was used for React and SCSS compilation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chat-api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: chatapi,
    source_code_link: "https://github.com/ahmedmusawir/moose-chat-plugin-v2",
    project_link: "https://www.youtube.com/watch?v=bTtGNLYV66w&t=91s",
  },
  {
    name: "Chat GPT v3",
    description:
      "Created a frontend interface (w/ vanilla JS) and a middleware (Node/Express) to connect with Open AI API at the backend. SCSS was used to styling. Both frontend and the middleware were deployed with Docker.",
    tags: [
      {
        name: "es6-javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "openai-api",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: rico,
    source_code_link: "https://github.com/ahmedmusawir/chat-gpt-ai-vanilla-js",
    project_link: "https://www.youtube.com/watch?v=4-9TujoCrZA&t=3s",
  },
  {
    name: "Traffic2Lead",
    description:
      "A React based WordPress plugin. This one pulls data from SimilarWeb API and displays the data for anaylzing with charts. Also, calculates the Lead count and emails the client.",
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
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "similarweb-api",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: traffic2lead,
    source_code_link: "https://github.com/ahmedmusawir/traffic2lead",
    project_link: "https://www.youtube.com/watch?v=GZntq1RV6cs&t=1s",
  },
  {
    name: "Travel Advisor",
    description:
      "A React app with Google Map API, Google Places API and Tripadvisor API at the backend. This was part of another larger client project. Complex data filtering and data visualization on maps were implemented. Material UI and SCSS were used for styling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google-api",
        color: "green-text-gradient",
      },
      {
        name: "googleplaces-api",
        color: "green-text-gradient",
      },
      {
        name: "tripadvior-api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link:
      "https://github.com/ahmedmusawir/travel-advisor-react-api",
    project_link: "https://www.youtube.com/watch?v=mebvSt4gShQ",
  },
];

const projectsUiUx = [
  {
    name: "DeepCast.ai",
    description:
      "This is a React and Next.js based website project for DeepCast.ai. This is mostly a Ui/Ux project using Bootstrap and React Bootstrap Ui/Ux responsive framework. SCSS and Styled Components were used for styling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "styledcomponents",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "reactbootstrap",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: deepcast,
    source_code_link: "https://github.com/ahmedmusawir/dc_next_pwa_stage_9",
    project_link: "https://www.youtube.com/watch?v=hFo1R-6amCM&t=5s",
  },
  {
    name: "Cyber Dash",
    description:
      "Modern Ui/Ux Dashboard with React.js & Syncfusion UI Library. SCSS and Tailwind CSS Library were used for styling and mobile responsive work. It consists of 4 pages, 4 small apps and lots of fancy charts. This was an R&D project for Cyberize Group.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link:
      "https://github.com/ahmedmusawir/dashboard-syncfusion-react",
    project_link: "https://www.youtube.com/watch?v=AS4eU1BiyDg",
  },
  {
    name: "The 3D Portfolio",
    description:
      "My portfolio app built with React, Framer Motion and 3JS (for 3d models). Tailwind CSS was used for styling and mobile responsive work. Used localized data source. This was an educational project. This will be the final version of my Portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "3js",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: folio3d,
    source_code_link: "https://github.com/ahmedmusawir/portfolio-3d-react",
    project_link: "https://www.youtube.com/watch?v=n7OVtiI52-c",
  },
  {
    name: "Docker Deployment",
    description:
      "This describes my process of Docker and Docker hub-based React/Next.js Apps deployments into our Digital Ocean staging droplet. I use a Bash Shell script over a SSH connection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "dockerhub",
        color: "blue-text-gradient",
      },
      {
        name: "openssh",
        color: "green-text-gradient",
      },
    ],
    image: dockerDeploy,
    source_code_link:
      "https://github.com/ahmedmusawir/gym-react-api/blob/main/docker-deploy.sh",
    project_link: "https://www.youtube.com/watch?v=m3xGbxcdVi0",
  },
  {
    name: "React App Deployment",
    description:
      "This describes my process of deploying React Apps into our cPanel/Plesk based Virtual Hosts. I use a Bash Shell script over a SSH connection. Please watch the video for details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bash",
        color: "green-text-gradient",
      },
      {
        name: "openssh",
        color: "pink-text-gradient",
      },
      {
        name: "cpanel",
        color: "blue-text-gradient",
      },
      {
        name: "plesk",
        color: "green-text-gradient",
      },
    ],
    image: reactDeploy,
    source_code_link:
      "https://github.com/ahmedmusawir/travel-advisor-react-api/blob/main/deploy-to-cyberize.sh",
    project_link: "https://www.youtube.com/watch?v=PAqFIJnQ2aU&t=2s",
  },
];

const projectsFullStack = [
  {
    name: "Sanity Store",
    description:
      "A React/Next.js based Ecommerce Store with the Sanity.io CMS as backend and Stripe was used for transactions. Tailwind CSS and SCSS were used for styling and mobile responsive works.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "sanity.io",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: storeSanity,
    source_code_link:
      "https://github.com/ahmedmusawir/ecom-sanity-stripe-nextjs",
    project_link: "https://www.youtube.com/watch?v=cFluU5B3wtw",
  },
  {
    name: "Cyber Blog",
    description:
      "A React/Next.js based blog app  with the GraphCMS as a backend GraphQL based headless CMS. Tailwind CSS and SCSS were used for styling and mobile responsive works.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphcms",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/ahmedmusawir/blog-graphcms-nextjs",
    project_link: "https://www.youtube.com/watch?v=9n6Qd-IH8l4&t=3s",
  },
  {
    name: "Cyber Woocom",
    description:
      "A React based Ecommerce Store with Woocommerce (on WordPress) as a headless CMS and Stripe was used for transactions. Bootstrap and SCSS were used for styling and mobile responsive works.",
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
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce-api",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: woocom,
    source_code_link: "https://github.com/ahmedmusawir/react-woocom-stripe",
    project_link: "https://www.youtube.com/watch?v=FYucGW87-EI",
  },
  {
    name: "SelfLIST",
    description:
      "A membership-based personal listing application built on WordPress w/ 80% ES6 Javascript (WP REST API & Ajax) & 20% custom PHP. JS OOP was used w/ Classes, Modules, Inheritance etc. Woocommerce & Stripe were used for ecommerce.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "es6-javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: selflist,
    source_code_link: "https://github.com/ahmedmusawir/selflist-expv10",
    project_link: "https://www.youtube.com/watch?v=6V2ONUGgjNE",
  },
  {
    name: "Dall-e AI",
    description:
      "An image share app with React frontend and Dall-e AI (Open AI) API at the backend. A middleware (API) with Node.js/Express was created with a MongoDB backend. Also, Cloudinary image hosting service was used to upload the AI generated images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "openai-api",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/ahmedmusawir/openai-dalle-react-api",
    project_link: "https://www.youtube.com/watch?v=Jbyfu-TisRo",
  },
  {
    name: "Portfolio Sanity",
    description:
      "This is my first attempt at my own portfolio. React is used at the frontend and Sanity.io at as a headless CMS at the backend. Pure SCSS was used for styling & mobile responsiveness. Framer Motion was used for animation. Also two higher order components were used for social media icons and side navigation dots",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: folioSanity,
    source_code_link: "https://github.com/ahmedmusawir/portfolio-sanity-react",
    project_link: "https://www.youtube.com/watch?v=Ul925v-TGzY",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projectsUiUx,
  projectsFullStack,
};
