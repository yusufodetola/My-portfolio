const portfolio = {
  personal: {
    firstName: "Yusuf",
    lastName: "Odetola",
    fullName: "Yusuf Odetola",
    title: "Frontend Developer • UI/UX Designer • AI Automation Engineer",
    tagline: "Designing Experiences. Building Products. Automating Workflows.",

    about:
      "I design and develop modern web experiences that combine clean code, thoughtful user experience, and intelligent automation. By blending frontend development, UI/UX principles, and AI-powered solutions, I help turn ideas into engaging, scalable, and impactful digital products.",

    location: "Nigeria",
    email: "odetolayusuf02@gmail.com",
    phone: "+2348169587914",

    avatar: "/images/Hero.png",
    resume: "/Odetola_Yusuf_CV.pdf",
  },

  social: {
    github: "https://github.com/yusufodetola",
    linkedin: "https://www.linkedin.com/in/yusuf-odetola-82562a184/",
    portfolio: "https://odetola-portfolio.vercel.app/",
  },

  stats: [
    {
      number: "3+",
      label: "Projects Built",
    },
    {
      number: "1+",
      label: "Years Learning & Building",
    },
    {
      number: "100%",
      label: "Responsive Design Focus",
    },
  ],

  services: [
    {
      title: "Frontend Development",
      description:
        "Building responsive, high-performance websites and web applications with React, Next.js, JavaScript, and Tailwind CSS.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing clean, user-centered interfaces, wireframes, and product experiences with strong attention to usability and visual clarity.",
    },
    {
      title: "AI Automation",
      description:
        "Creating AI-powered workflows, productivity automations, and smart process systems that improve efficiency and digital operations.",
    },
    {
      title: "Arabic Design & Typesetting",
      description:
        "Professional Arabic design support, layout formatting, and Arabic typing/typesetting for branded, educational, and digital materials.",
    },
  ],

  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],

    tools: [
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "Vercel",
      "Postman",
      "npm",
      "ChatGPT",
      "Claude",
      "n8n",
    ],
  },

  experience: [
    {
      company: "Notzero Academy",
      role: "Frontend Developer",
      duration: "2026 - Present",
      description: [
        "Develop responsive web applications using React, Next.js, and Tailwind CSS.",
        "Build reusable UI components and structured frontend layouts for modern web experiences.",
        "Collaborate with mentors and teammates on practical product development tasks.",
        "Contribute to the NEPA Tracker project and other learning-based frontend builds.",
        "Use GitHub and Vercel for version control, deployment, and project delivery workflows.",
      ],
    },
  ],

  projects: [
    {
      title: "NEPA Tracker",
      image: "/images/nepa-tracker.png",
      description:
        "A web application that helps users monitor electricity availability, report outages, and track power schedules with a clean, responsive interface.",
      tech: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/yusufodetola/Nepa-tracker",
      live: "https://nepa-tracker-7bt9.vercel.app/",
      featured: true,
    },

    {
      title: "AI Landing Page",
      image: "/images/ai-landing-page.png",
      description:
        "A modern AI-themed landing page designed with a premium visual style, responsive layout, and polished interface presentation.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false,
    },

    {
      title: "Portfolio Website",
      image: "/images/portfolio-website.png",
      description:
        "A personal portfolio website showcasing frontend development, UI/UX design, AI automation work, and digital product presentation.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false,
    },
  ],

  contact: {
    email: "odetolayusuf02@gmail.com",
    phone: "+2348169587914",
    location: "Nigeria",
  },
};

export default portfolio;
