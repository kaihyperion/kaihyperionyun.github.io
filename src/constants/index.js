import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
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
    knightlab,
    californiaPredictor,
    jobappTool
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
      id: "github",
      title: "Github",
      link: "https://www.github.com/kaihyperion"
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
      title: "Deep learning / Machine Learning",
      icon: scale,
    },
    {
      title: "Startup Developer",
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
      title: "Software Engineer",
      company_name: "Keli Network",
      icon: jellysmack,
      iconBg: "black",
      date: "April 2022 - November 2022",
      points: [
        "Guided and collaborated with Jellysmack software engineers and managers in successfully delivering critical projects such as automating company-wide analyses and spearheading the deployment of an internal web application",
        "Architected a robust Flask micro-framework for the backend server, orchestrating seamless handling of both GET and POST requests from clients and enabling data analysis, visualization, and delivery via HTTP responses",
        "Secured CEO approval for company-wide implementation after presenting app demos to C-suite executives, and implemented OAuth 2.0 authorization for secure access to hundreds of YouTube accounts.",
        "Developed comprehensive tests to ensure app reliability and fast issue resolution.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "AMA X Jellysmack Internal Data Analysis Tool",
      description:
        "Developed a web application that enables users to dynamically retrieve and present the snippet and statistics metadata tailored to user preference.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "orange-text-gradient",
        },
        {
          name: "Google Data API",
          color: "pink-text-gradient",
        },
        {
          name: "StreamLit",
          color: "green-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "blue-text-gradient",
        }
      ],
      image: jellysmack,
      source_code_link: "https://www.ama-digital.com/",
    },
    {
      name: "Partisanship Detector",
      description:
        "Created new solution to computational journalism that enables journalists to maintain unbiased ground in their reporting by detecting politcally charged language in their articles.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "distill-BERT",
          color: "green-text-gradient",
        },
        {
          name: "Bi-LSTM",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript/CSS/HTML",
          color: "pink-text-gradient",
        },
      ],
      image: knightlab,
      source_code_link: "https://www.mccormick.northwestern.edu/news/articles/2021/06/Interdisciplinary-teams-present-new-solutions-in-computational-journalism/",
    },
    {
      name: "California Housing Price Predictor",
      description:
        "Harnessed with Scikit-learn and multiple ensembled regression models (Linear, Decision Tree, Random Forest, and Support Vector) with full Dataset pipeline, I aimed to find a predictor of Californian house price with given attributes ",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Regression",
          color: "green-text-gradient",
        },
        {
          name: "Decision Tree / Random Forest",
          color: "green-text-gradient",
        },
        {
          name: "GridSearchCV",
          color: "pink-text-gradient",
        },
      ],
      image: californiaPredictor,
      source_code_link: "https://kaihyperion-housingpricepredictor-app-7djwmv.streamlit.app/",
    },
    {
      name: "LLM-Powered Job Application Automation Tool",
      description:
        "Developed a Chrome extension powered by GPT-4 that automates job applications by intelligently mapping and autofilling user details based on form structures, leveraging secure backend services with Express.js and Node.js for seamless communication and field mapping, while integrating Chrome APIs to ensure smooth interactions between background and content scripts for an optimized user experience.",
      tags: [
        {
          name: "LLM-Integration (GPT-4o-mini)",
          color: "green-text-gradient",
        },
        {
          name: "Chrome Extension",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient"
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Backend with Express.js",
          color: "orange-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient"
        },
        {
          name: "Error handling",
          color: "pink-text-gradient"
        }
      ],
      image: jobappTool,
      source_code_link: "https://github.com/kaihyperion/Job-App-Extension",
    },
  ];
  
  export { services, technologies, experiences, projects };