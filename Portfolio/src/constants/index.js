import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    figma,
    threejs,
    sklearn,
    python,
    pytorch,
    flourish,
    hugging,
    C,
    Open,
    Pantech,
    Skillish,
    NPTEL,
    Spotify,
    Brain,
    sentiment,
    tts,
    Imageclass
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
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
      name: "figma",
      icon: figma,
    },
    
    {
      name: "python",
      icon: python,
    },
    {
      name: "Flourish",
      icon: flourish,
    },
    {
      name: "hugging",
      icon: hugging,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "sklearn",
      icon: sklearn,
    },
  ];
  
  const experiences = [
    {
      title: "NPTEL - Courses",
      company_name: "NPTEL-Swayam",
      icon: NPTEL,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Mar 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python for Data Science - Virtual Internship",
      company_name: "Pantech E Learning",
      icon: Pantech,
      iconBg: "#383E56",
      date: "Apr 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Science Internship",
      company_name: "Skillish",
      icon: Skillish,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Development Internship",
      company_name: "OpenWeaver",
      icon: Open,
      iconBg: "#383E56",
      date: "Sep 2023 - Oct 2023",
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
      name: "Spotify Analysis",
      description:
      "A Full Analysis of the Spotify Dataset using python with it's Statistics and Visualizing the dataset.",
      tags: [
        {
          name: "numpy",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: Spotify,
      source_code_link: "https://github.com/",
    },
    {
      name: "Brain Tumor Classification",
      description:
        "Using Image Classifications and Support Vector Machine to classify the persons who are having brain tumor",
      tags: [
        {
          name: "sklearn",
          color: "blue-text-gradient",
        },
        {
          name: "CV2",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: Brain,
      source_code_link: "https://github.com/",
    },
    {
      name: "Text to Speech",
      description:
        "A simple text to speech application which reads the file of the user and converts the text to speech.",
      tags: [
        {
          name: "AssemblyAI",
          color: "blue-text-gradient",
        },
        {
          name: "ElevenLabs",
          color: "green-text-gradient",
        },
        {
          name: "File - OS",
          color: "pink-text-gradient",
        },
      ],
      image: tts,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sentiment Analysis",
      description:
        "A Simple Sentiment Analysis model that can analyse the mood of the user with the help of transformers in the Hugging Face Library",
      tags: [
        {
          name: "Hugging Face",
          color: "blue-text-gradient",
        },
        {
          name: "AutoTokenizer",
          color: "green-text-gradient",
        },
        {
          name: "TFAutoModelForSequenceClassification",
          color: "pink-text-gradient",
        },
      ],
      image: sentiment,
      source_code_link: "https://github.com/",
    },
    {
      name: "Image Classification",
      description:
        "A Simple Image Classifier using Conventional Neural Networks and Classify the images",
      tags: [
        {
          name: "Keras",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: Imageclass,
      source_code_link: "https://github.com/",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects };