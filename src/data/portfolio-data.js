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
    highlights: [
      "Full-stack MERN developer",
      "Winner of 4+ hackathons",
    ],
  },

  skills: {
    languages: ["Java", "Python", "C"],
        webDevelopment: [
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    tools: [
      "Git & GitHub",
      "Vercel",
      "Postman",
      "Canva",
      "Render"
    ],
  },

  projects: [
    {
      title: "BharatSecure",
      description:
        "A web-based incident reporting and response system enabling real-time alerts, location-based incident tracking, safety heatmaps, and AI-powered support for users.",
      tech: ["React", "Django", "SQLite", "AI Integration"],
      impact:
        "Won 1st prize at Tech-Mania 2K25 and shortlisted for TechFiesta Grand Finale at PICT Pune",
    },
    {
      title: "NearKart",
      description:
        "A hyperlocal e-commerce platform connecting nearby customers with local sellers, supporting pickup and optional delivery with secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      impact:
        "Designed scalable seller & buyer flows with OTP-based authentication",
    },
    {
      title: "Dynamic Personalized Travel Safety Guide",
      description:
        "A real-time travel safety system providing route safety scores using crime data, weather alerts, and AI-based risk analysis.",
      tech: ["React", "Node.js", "MongoDB", "Gemini LLM"],
      impact:
        "Focused on proactive safety insights and alternate safe-route suggestions",
    },
  ],

  experience: [
    {
      title: "Hackathon Winner",
      company: "Tech-Mania 2K25",
      period: "2025",
      description:
        "Presented BharatSecure with a working prototype and won 1st place among multiple competing teams.",
    },
    {
      title: "Finalist",
      company: "TechFiesta – PICT Pune",
      period: "2025",
      description:
        "Shortlisted among 60 teams out of ~400 for the BharatSecure project.",
    },
    {
      title: "Full-Stack Developer (Academic Projects)",
      company: "Engineering Projects & Hackathons",
      period: "2023 - Present",
      description:
        "Built multiple full-stack applications using MERN, focusing on scalability, security, and clean UI.",
    },
  ],

  contact: {
    email: "shanedias0111@gmail.com",
    social: {
      github: "https://github.com/Shane-Dias",
      linkedin: "https://www.linkedin.com/in/shane-dias-28a112291",
      twitter: "https://twitter.com/",
    },
  },
};

export default portfolioData;
