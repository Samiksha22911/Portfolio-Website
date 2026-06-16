import { Trophy, Award, Star, type LucideIcon } from "lucide-react";

export const SOCIALS = {
  github: "https://github.com/Samiksha22911",
  linkedin: "https://www.linkedin.com/in/samiksha11sharma/",
  twitter: "https://x.com/Samikshajg2g",
  leetcode: "https://leetcode.com/u/Samiksha_sharma_/",
  email: "sharmasamiksha189@.com",
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

export type TechItem = { name: string; slug: string; color?: string };
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
    name: "Faculty Research Impact Portal (FRIP)",
    blurb:
      "A full-stack web platform for managing faculty research publications, achievements, and academic records with secure role-based access.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    year: "2026",
    link: "https://github.com/Samiksha22911/FRIP",
    live: "#",
    did: [
      "Developed a centralized portal for managing faculty research publications and academic records",
      "Implemented role-based authentication and secure CRUD operations",
      "Built responsive dashboards and integrated REST APIs for efficient data management",
    ],
  },
  
   {
    name: "Hospital Management System",
    blurb:
      "A comprehensive healthcare management platform supporting Admin, Doctor, and Patient workflows with secure access control and appointment management.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Chart.js",
    ],
    year: "2026",
    link: "https://github.com/Samiksha22911/Hospital_Management_System",
    live: "#",
    did: [
      "Implemented appointment scheduling and patient record management",
      "Built JWT-based authentication with role-based access control",
      "Designed interactive dashboards and healthcare analytics visualizations",
    ],
  },

  {
  name: "Music Analytics Dashboard",
  blurb:
    "A Spotify-inspired music player and analytics dashboard that visualizes listening trends and user engagement through interactive charts and data insights.",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Chart.js",
  ],
  year: "2025",
  link: "https://github.com/Samiksha22911/Music_Analytics_Dashboard",
  live: "#",
  did: [
    "Built a responsive Spotify-inspired music player interface using HTML, CSS, and JavaScript",
    "Cleaned, processed, and analyzed music-related datasets using Python",
    "Developed interactive charts and dashboards with Chart.js to visualize listening trends and user engagement",
  ],
}
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
  }
];
