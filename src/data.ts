import { EducationItem, ExperienceItem, ProjectItem, SkillCategory } from "./types";

export const personalInfo = {
  name: "Edra Angga Wardhana",
  title: "Informatics Engineering Student | Web Developer | IT Support | Network Enthusiast",
  bio: "My name is Edra Angga Wardhana, born in Balikpapan on March 23, 2004. I am currently pursuing a Bachelor's Degree in Informatics Engineering at Muhammadiyah University of Malang. I am passionate about software engineering, web development, information technology, and network infrastructure. Through academic projects and internship experiences, I have gained hands-on experience in developing web applications, supporting IT operations, troubleshooting systems, and designing network architectures. I enjoy learning new technologies, solving complex problems, and working collaboratively in teams.",
  intro: "Passionate about building digital solutions, developing modern web applications, and designing reliable network infrastructures.",
  typingTexts: [
    "Laravel Developer",
    "IT Support Specialist",
    "Network Engineer",
    "Problem Solver"
  ],
  github: "https://github.com/edrawardhana",
  email: "edward.468.ea@gmail.com",
  avatarUrl: "/src/assets/images/edra_avatar_1782359938989.jpg"
};

export const stats = [
  { value: "1", label: "Internship Completed", subtext: "IT Support Intern at MCC" },
  { value: "2+", label: "Major Projects", subtext: "Web App & Network Topology" },
  { value: "Full Stack", label: "Software Development", subtext: "Laravel, PHP & Modern JS" },
  { value: "Professional", label: "Network Infrastructure", subtext: "Cisco & Architecture" }
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Muhammadiyah University of Malang",
    degree: "Bachelor Degree in Informatics Engineering",
    period: "2022 - Present",
    details: "Focusing on software development, cloud systems, and network planning. Actively building hands-on applications and expanding technical leadership."
  },
  {
    id: "edu-2",
    institution: "SMK Negeri 3 Balikpapan",
    degree: "Computer and Network Engineering (TKJ)",
    period: "2019 - 2022",
    details: "Acquired fundamental knowledge in network configuration, client-server architectures, physical network cabling, and hardware diagnostics."
  }
];

export const professionalExperience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "IT Support Intern",
    company: "Malang Creative Center (MCC)",
    period: "February 2026 – June 2026",
    responsibilities: [
      "Provided technical support for software and hardware issues.",
      "Assisted users with troubleshooting and maintenance.",
      "Supported network and system operations.",
      "Collaborated with teams to ensure smooth IT services.",
      "Participated in technology implementation projects."
    ]
  }
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "project-1",
    title: "MIP Activity",
    category: "Web Application",
    description: "A web-based internship activity management system designed to monitor daily activities, task progress, and internship reporting processes.",
    features: [
      "Activity Tracking",
      "Progress Monitoring",
      "Task Management",
      "Reporting Dashboard"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    imageUrl: "/src/assets/images/mip_activity_mockup_1782359909737.jpg",
    primaryLinkText: "View Project",
    primaryLinkUrl: "#",
    secondaryLinkText: "View GitHub",
    secondaryLinkUrl: "https://github.com/edrawardhana"
  },
  {
    id: "project-2",
    title: "Malang Creative Center Network Topology",
    category: "Network Infrastructure",
    description: "Designed and documented the network topology and infrastructure planning for the Malang Creative Center building.",
    features: [
      "Network Design",
      "Infrastructure Planning",
      "IP Addressing",
      "Network Documentation"
    ],
    technologies: ["Cisco Packet Tracer", "Networking", "Infrastructure Design"],
    imageUrl: "/src/assets/images/mcc_network_topology_1782359924369.jpg",
    primaryLinkText: "View PDF Report",
    primaryLinkUrl: "#report",
    secondaryLinkText: "View Details",
    secondaryLinkUrl: "#details"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 }
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 92 },
      { name: "MySQL", level: 88 }
    ]
  },
  {
    id: "networking",
    name: "Network & Systems",
    skills: [
      { name: "Network Configuration", level: 90 },
      { name: "IP Addressing", level: 95 },
      { name: "Troubleshooting", level: 88 },
      { name: "Network Topology", level: 90 }
    ]
  },
  {
    id: "tools",
    name: "Developer Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "Cisco Packet Tracer", level: 92 }
    ]
  }
];
