const portfolioData = {
  hero: {
    name: "Shane Dias",
    role: "Full-Stack MERN Developer",
    tagline:
      "Building scalable web applications and real-world solutions with clean architecture and thoughtful UX.",
    cta: {
      primary: "View Projects",
      secondary: "Contact Me",
    },
  },

  about: {
    text: "I'm a third-year Computer Engineering student and full-stack MERN developer with a strong interest in building impactful, real-world products. I enjoy working across the stack—from designing intuitive user interfaces to architecting robust backend systems. I’ve participated in multiple hackathons and ideathons, where I focused on solving practical problems using modern web technologies. I value clean code, scalability, and continuous learning.",
    highlights: ["Full-stack MERN developer", "Winner of 4+ hackathons"],
  },

  skills: {
    languages: ["Java", "Python", "C"],
    webDevelopment: ["Tailwind CSS", "React", "Node.js", "Express", "MongoDB"],

    tools: ["Git & GitHub", "Vercel", "Postman", "Canva", "Render"],
  },

  projects: [
    {
      title: "BharatSecure",
      description:
        "A web-based incident reporting and response system enabling real-time alerts, location-based incident tracking, safety heatmaps, and AI-powered support for users.",
      tech: ["React", "Django", "SQLite", "AI Integration"],
      impact:
        "Won 1st prize at Tech-Mania 2K25 and shortlisted for TechFiesta Grand Finale at PICT Pune",
      link: "https://github.com/BharatSecure/TechFiesta25",
    },
    {
      title: "BrightBuilds",
      description:
        "A full-stack platform for showcasing student-led creative coding projects, mapped to United Nations Sustainable Development Goals (SDGs) to promote sustainability, mentorship, and skill visibility.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      impact:
        "Implemented role-based dashboards, project evaluation workflows, and SDG-based categorization to support collaboration and structured feedback.",
      link: "https://github.com/Shane-Dias/BrightBuilds",
    },
    {
      title: "NearKart",
      description:
        "A hyperlocal e-commerce platform connecting nearby customers with local sellers, supporting pickup and optional delivery with secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      impact:
        "Designed scalable seller & buyer flows with OTP-based authentication",
      link: "https://github.com/Shane-Dias/NearKart",
    },
    {
      title: "Dynamic Personalized Travel Safety Guide",
      description:
        "A real-time travel safety system providing route safety scores using crime data, weather alerts, and AI-based risk analysis.",
      tech: ["React", "Node.js", "MongoDB", "Gemini LLM"],
      impact:
        "Focused on proactive safety insights and alternate safe-route suggestions",
      link: "https://github.com/Shane-Dias/TravelSafeAI",
    },
  ],

  experience: [
    {
      title: "Winner – Hackathon",
      company: "Tech-Mania 2K25",
      period: "2025",
      description:
        "Designed and built BharatSecure, a real-time incident reporting and response platform. Implemented location-based alerts, safety analytics, and an AI-powered assistance module, leading to a 1st place finish among competing teams.",
    },
    {
      title: "Runner-Up – Hackathon",
      company: "Oscillation Hackathon",
      period: "2025",
      description:
        "Developed TravelSafeAI, a personalized travel safety system that analyzes routes using crime data, weather alerts, and AI-driven risk assessment. Secured runner-up position for technical depth and real-world applicability.",
    },
    {
      title: "Full-Stack Developer",
      company: "Academic & Hackathon Projects",
      period: "2023 – Present",
      description:
        "Built and deployed multiple full-stack applications using the MERN stack. Focused on clean architecture, secure authentication flows, API design, and scalable frontend interfaces.",
    },
  ],

  contact: {
    email: "shanedias0111@gmail.com",
    social: {
      github: "https://github.com/Shane-Dias",
      linkedin: "https://www.linkedin.com/in/shane-dias-28a112291",
      twitter: "https://twitter.com/",
    },
    location: "Mumbai, Maharashtra",
  },
};

export default portfolioData;
