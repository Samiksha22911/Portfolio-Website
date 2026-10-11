import { Trophy, Award, Star, GraduationCap } from "lucide-react";

export const SOCIALS = {
  github: "https://github.com/Samiksha22911",
  linkedin: "https://www.linkedin.com/in/samiksha11sharma/",
  twitter: "https://x.com/Samikshajg2g",
  leetcode: "https://leetcode.com/u/Samiksha_sharma_/",
  email: "sharmasamiksha189@gmail.com",
  resume: "/resume.pdf",
};

export const NAV: { n: string; label: string; to: string }[] = [
  { n: "01", label: "About", to: "/" },
  { n: "02", label: "Technology", to: "/tech" },
  { n: "03", label: "Projects", to: "/projects" },
  { n: "04", label: "Timeline", to: "/timeline" },
  { n: "05", label: "Recognition", to: "/recognition" },
  { n: "06", label: "Contact", to: "/contact" },
];

// `slug` is a simple-icons name; leave it out for tools without an icon.
export type TechItem = { name: string; slug?: string; color?: string };
export const TECH_STACK: { title: string; items: TechItem[] }[] = [
  {
    title: "Database",
    items: [
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
    ],
  },
  {
    title: "AI & Computer Vision",
    items: [
      { name: "YOLO" },
      { name: "OpenCV", slug: "opencv", color: "5C3EE8" },
      { name: "EasyOCR" },
      { name: "FastAPI", slug: "fastapi", color: "009688" },
    ],
  },
  {
    title: "Data & Machine Learning",
    items: [
      { name: "pandas", slug: "pandas", color: "ffffff" },
      { name: "scikit-learn", slug: "scikitlearn", color: "F7931E" },
      { name: "Chart.js", slug: "chartdotjs", color: "FF6384" },
    ],
  },
  {
    title: "Auth & Backend",
    items: [
      { name: "JWT", slug: "jsonwebtokens", color: "ffffff" },
      { name: "Database Integration" },
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "ffffff" },
      { name: "VS Code", slug: "vscode", color: "007ACC" },
    ],
  },
  {
    title: "Languages & Scripting",
    items: [
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css3", color: "1572B6" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Express", slug: "express", color: "ffffff" },
      { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Smart Campus Vehicle Detection",
    blurb:
      "An AI-based vehicle entry verification system that detects vehicles and reads number plates in real time, backed by a FastAPI service and database.",
    stack: [
      "Python",
      "YOLO",
      "OpenCV",
      "EasyOCR",
      "FastAPI",
      "Database Integration",
    ],
    year: "2026",
    // TODO: replace with the repository link for this project
    link: "https://github.com/Samiksha22911/Campus-Guardian",
    live: "https://campus-guardian-ten.vercel.app",
    did: [
      "Trained and used YOLO to detect vehicles and number plates from camera frames",
      "Processed images with OpenCV and extracted plate text using EasyOCR",
      "Exposed the pipeline through FastAPI endpoints and integrated a database to log and verify entries",
    ],
  },

  {
    name: "Music Analytics Dashboard",
    blurb:
      "A Spotify-inspired music player and analytics dashboard with secure login, listening insights and machine-learning-based analysis of music data.",
    stack: [
      "Python",
      "pandas",
      "scikit-learn",
      "JavaScript",
      "Chart.js",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
    ],
    year: "2025",
    link: "https://github.com/Samiksha22911/Music_Analytics_Dashboard",
    live: "https://music-analytics-dashboard-teal.vercel.app",
    did: [
      "Built a responsive music player with a Node.js and Express backend, MySQL storage and JWT-based authentication",
      "Cleaned and analyzed music datasets with pandas, and applied scikit-learn for machine learning analysis",
      "Developed interactive Chart.js dashboards to visualize listening trends and user engagement",
    ],
  },

  {
    name: "ChatSKG",
    blurb:
      "A ChatGPT-style chat interface built from scratch with plain HTML, CSS and JavaScript, with a clean conversational layout that works across screen sizes.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    // TODO: replace with the repository link for this project
    link: "https://github.com/Samiksha22911/chat-SKG",
    live: "https://chat-skg.vercel.app",
    did: [
      "Recreated a ChatGPT-style conversation interface using only HTML, CSS and JavaScript",
      "Designed a responsive layout with a message thread and input area",
      "Implemented the chat interactions and UI behavior in vanilla JavaScript",
    ],
  },

  {
    name: "ProcureSetu (Mini-GeM)",
    blurb:
      "A Mini-GeM procurement portal built for the Smart India Hackathon, handling bid discovery, bidder registration and quotation submission before handing documents off to the AI verification platform.",
    stack: ["React", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
    year: "2026",
    // TODO: replace with the repository link for this project
    link: "https://github.com/Samiksha22911/ProcureSetu---",
    did: [
      "Built the portal frontend with React, TypeScript and Tailwind, with admin, officer and bidder roles",
      "Developed the FastAPI backend with a PostgreSQL database for bids, bidders and submissions",
      "Designed the HTTP handoff that passes bid and bidder details to the main document verification project",
    ],
  },
];

export const TIMELINE = [
  {
    when: "2024",
    title: "Started B.Tech Journey",
    place: "MITS Gwalior",
    body: "Built a strong foundation in programming with C and explored core computer science concepts."
  },
  {
    when: "2024",
    title: "Object-Oriented Programming",
    place: "Academic Learning",
    body: "Learned Java and C++ while applying programming concepts through a MATLAB-based project."
  },
  {
    when: "2025",
    title: "DSA & Problem Solving",
    place: "Learning & Development",
    body: "Started Data Structures & Algorithms and developed a chatbot prototype using HTML, CSS, and Python."
  },
  {
    when: "2025",
    title: "Web Development",
    place: "Frontend Engineering",
    body: "Built a Spotify-inspired Music Analytics Dashboard and gained hands-on experience with modern web technologies."
  },
  {
    when: "2026",
    title: "Full-Stack Development",
    place: "MERN Stack",
    body: "Building Hospital Management System and FRIP while strengthening full-stack development, database design, and software engineering skills."
  },
  {
    when: "2026",
    title: "Open Source Contributor",
    place: "GSSoC 2026",
    body: "Contributing to open-source projects, collaborating with developers, and improving code quality through real-world development practices."
  }
];

export const RECOG = [
  {
    icon: Trophy,
    title: "290+ Problems Solved",
    body: "Solved 290+ DSA problems across LeetCode and CodeChef."
  },
  {
    icon: Star,
    title: "GSSoC'26 Contributor",
    body: "Contributing to open-source projects through GirlScript Summer of Code 2026."
  },
  {
    icon: Award,
    title: "SIH 2025 Participant",
    body: "Selected in the college-level round of Smart India Hackathon 2025."
  },
  {
    icon: GraduationCap,
    title: "Machine Learning Specialization",
    body: "DeepLearning.AI & Stanford University, on Coursera."
  }
];
