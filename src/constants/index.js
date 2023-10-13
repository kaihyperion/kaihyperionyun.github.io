import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    threejs,
    jellysmack,
    ama,
    python,
    aws,
    jupyter,
    c,
    matlab,
    coding,
    browser,
    scale,
    startup,
    resume,
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
    {
      id: "resume",
      title: "Resume",
      file: resume,
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: coding,
    },
    {
      title: "Web Application developer",
      icon: browser,
    },
    {
      title: "Automobile Tuner",
      icon: scale,
    },
    {
      title: "Startup Enthusiast",
      icon: startup,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Jupyter",
      icon: jupyter,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Founding Software Engineer",
      company_name: "Authentic Media Ascension",
      icon: ama,
      iconBg: "black",
      date: "October 2021 - April 2022",
      points: [
        "The first founding engineer for the startup, in charge of automating and optimizing data aggregation, and developing the first core internal app prototype that harnesses various APIs to dynamically retrieve and present the snippet and statistics metadata tailored to user preference",
        "Drove the entire spectrum of the company’s tech strategy and initiatives, encompassing data extraction, migrating from manual Excel process to Google’s BigQuery database storage solution, and advanced regression analysis powered by machine learning",
        "Generated over $500,000 in revenue by leading the digital transformation at a growth agency, optimizing operations and strategies to drive substantial financial growth",
        "Engineered a seamless transformation from CSV to SQL relational database, orchestrating the deployment of a cloud server enabling streamlined integration into Tableau dashboards and facilitated data retrieval, enhancing the client consulting experience",
      ],
    },
    {
      title: "Lead Software Engineer",
      company_name: "Jellysmack",
      icon: jellysmack,
      iconBg: "black",
      date: "April 2022 - November 2022",
      points: [
        "Guided and collaborated with Jellysmack software engineers and managers in successfully delivering critical projects such as automating company-wide analyses and spearheading the deployment of an internal web application",
        "Architected a robust Flask micro-framework for the backend server, orchestrating seamless handling of both GET and POST requests from clients and enabling data analysis, visualization, and delivery via HTTP responses",
        "Implemented OAUTH2.0 authorization flow and securely stored user session API keys in an SQL database",
        "Wrote code documentation that detailed every features and functions of the internal web app",
      ],
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
  
  export { services, technologies, experiences, projects };