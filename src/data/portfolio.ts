/**
 * Central content config — edit everything about the portfolio here.
 */

export const profile = {
  name: "Priyanshu Das",
  role: "Computer Science (AI\u00A0&\u00A0ML) Student",
  headline:
    "Computer Science (AI & ML) Student | Full Stack Developer | AI Enthusiast | Cybersecurity Learner",
  tagline: "Full stack developer · AI enthusiast · cybersecurity learner",
  location: "India",
  status: "Open to internships & collaborations",
  intro:
    "I study computer science with a focus on AI & ML, build full stack products end to end, and keep learning security so the things I ship hold up.",
  // Replace these placeholders with your real links.
  email: "priyanshudas272006@gmail.com",
  resumePath: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/PriyanshuDas607/", handle: "@priyanshudas607" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyanshu-das-919a1a302",
      handle: "/in/priyanshudas",
    },
  ],
  metrics: [
    { value: "AI/ML", label: "CSE specialisation" },
    { value: "Full stack", label: "Primary build focus" },
    { value: "Security", label: "Active learning track" },
    { value: "Open", label: "To internships" },
  ],
};

export const about = {
  story: [
    "I'm Priyanshu Das, a computer science student specialising in artificial intelligence and machine learning. Most of my time goes into building web applications and understanding the models behind them well enough to use them honestly.",
    "Alongside that I'm working through cybersecurity fundamentals — how systems are attacked and how they should be defended — because it changes how you design software in the first place.",
  ],
  strengths: [
    {
      title: "Web development",
      body: "Comfortable across UI, API and database layers, and shipping a feature all the way through.",
    },
    {
      title: "AI & machine learning",
      body: "Coursework and hands-on practice with model training, evaluation and integrating ML into real apps.",
    },
    {
      title: "Cybersecurity fundamentals",
      body: "Learning secure design, common vulnerability classes and defensive practices.",
    },
    {
      title: "Learning in public",
      body: "Clear documentation, small iterative commits and sharing what I pick up along the way.",
    },
  ],
  interests: [
    "Machine learning",
    "Deep learning",
    "Web development",
    "Cybersecurity",
    "Cloud",
    "Developer tooling",
  ],
};

export const education = [
  {
    period: "2024 - 2028 (Ongoing)",
    institution: "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY",
    credential: "B.Tech, Computer Science & Engineering (AI & ML)",
    detail:
      "Currently pursuing a Bachelor's degree with a specialization in Artificial Intelligence and Machine Learning. Building a strong foundation in programming, data structures, algorithms, database management systems, operating systems, computer networks, and software engineering.",
    highlights: [
      "AI & ML Specialization",
      "Core Computer Science Coursework",
      "Programming in C++ & Python",
      "Data Structures & Algorithms",
    ],

    current: true,
  },
  {
    period: "2022 - 2024",
    institution: "MRV MODEL SCHOOL",
    credential: "Senior Secondary (Class XII) – Science Stream",
    detail:
      "Completed Senior Secondary education with Physics, Chemistry, Mathematics, and Computer Science, developing strong analytical and problem-solving skills.",
    highlights: [
      "Physics, Chemistry & Mathematics",
      "Computer Science",
      "Problem Solving",
      "Higher Secondary Education",
    ],
    current: false,
  },
  {
    period: "2022",
    institution: "MRV MODEL SCHOOL",
    credential: "Secondary Education (Class X)",
    detail:
      "Completed Secondary School education with a strong academic foundation across science, mathematics, and computer fundamentals.Completed Secondary School education with a strong academic foundation across science, mathematics, and computer fundamentals.",
    highlights: ["Mathematics", "Science", "Computer Fundamentals", "Academic Excellence"],

    current: false,
  },
];

export const skillGroups = [
  {
    category: "Languages",
    note: "Daily drivers",
    items: ["Python", "JavaScript", "Java", "C", "SQL"],
  },
  {
    category: "Frontend",
    note: "Interfaces",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    note: "Services & storage",
    items: ["Node.js", "Express", "Flask", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    category: "AI / ML",
    note: "Models & data",
    items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "OpenCV"],
  },
  {
    category: "Cybersecurity",
    note: "Learning track",
    items: ["Linux", "Networking", "OWASP Top 10", "Wireshark", "Burp Suite"],
  },
  {
    category: "Tools & Foundations",
    note: "Everyday",
    items: ["Git & GitHub", "Docker", "VS Code", "DSA", "Operating Systems", "DBMS"],
  },
];

export type Project = {
  title: string;
  kind: string;
  year: string;
  problem: string;
  solution: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Mapan",
    kind: "Legal Metrology OS (Smart India Hackathon 2026)",
    year: "2026",
    problem:
      "Testing and certifying weighing instruments per OIML R-76 (SIH 2026, Problem Statement 26035) previously relied on manual spreadsheet calculations and paper certificates, creating risk of human error, tampering, and zero auditability.",
    solution:
      "Built a full-stack legal metrology platform featuring an automated formula engine for intrinsic errors & step-function MPE across accuracy classes I–IIII, tamper-evident SHA-256 digital sealing with QR verification, a chained audit trail, and print-ready PDF certificate generation.",
    highlights: [
      "Built a full-stack platform for testing and certifying weighing instruments per OIML R-76 (SIH 2026, Problem Statement 26035), replacing manual spreadsheet calculations and paper certificates.",
      "Implemented an automated formula engine that computes intrinsic errors and step-function Maximum Permissible Error across accuracy classes I to IIII, with real-time tolerance alerts.",
      "Added tamper-evident certificates using SHA-256 digital sealing and scannable QR verification, plus a chained audit trail that logs every user action.",
      "Implemented role-based access control (Admin and Operator roles) and PDF certificate generation with print-ready layouts.",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Firebase Firestore",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/PriyanshuDas607/Mapan-r76",
    demo: "https://mapan-r76.vercel.app",
    featured: true,
  },
  {
    title: "Nayantara Opticals",
    kind: "Optical Store SaaS & Management Platform",
    year: "2026",
    problem:
      "Independent optical retailers in New Delhi faced friction in managing customer eyewear selections, digital prescription tracking, manual appointment booking, and role-segregated admin operations.",
    solution:
      "Developed a modern responsive SaaS storefront and management platform featuring dynamic product catalogs, lens comparison, eye-test booking, digital prescription entry, guided frame-finder quiz, customer reviews, and JWT/OTP authentication with RBAC administration.",
    highlights: [
      "Built a responsive storefront for an independent optical store in New Delhi with product catalog, category browsing, lens comparison and eye-test appointment booking.",
      "Added a prescription entry page, customer ratings and reviews, and a guided frame-finder quiz to improve the customer experience.",
      "Implemented JWT authentication, OTP verification and role-isolated administration using role-based access control (RBAC).",
    ],
    stack: ["React", "Node.js", "JWT", "OTP Verification", "RBAC", "Tailwind CSS"],
    demo: "https://nayantara-opticals.vercel.app",
    featured: false,
  },
  {
    title: "SalesForge",
    kind: "Full stack web app (Open Source Contributor)",
    year: "2026",
    problem:
      "B2B sales teams face severe 'tool fatigue' using separate apps for CRMs, email sequences, and analytics, leading to fragmented data, rigid custom schemas, and security risks in multi-tenant environments.",
    solution:
      "Contributed to an all-in-one B2B SaaS Sales Operating System featuring a drag-and-drop Kanban pipeline, dynamic JSON custom fields (`customFields`), real-time SSE analytics, and strict `tenantScope` multi-tenant row-level data isolation.",
    highlights: [
      "Contributed to an all-in-one B2B SaaS Sales Operating System featuring a drag-and-drop Kanban pipeline.",
      "Implemented dynamic JSON custom fields (customFields) and real-time SSE streaming analytics.",
      "Enforced strict tenantScope multi-tenant row-level data isolation.",
    ],
    stack: [
      "Node.js",
      "Express 5",
      "Prisma 6",
      "PostgreSQL 16",
      "React 19",
      "Vite 7",
      "TailwindCSS 4",
    ],
    github: "https://github.com/rajat-wyrm/salesforge",
    demo: "https://uptoskills-project.vercel.app/",
    featured: false,
  },
];

export const achievements = [
  {
    category: "Hackathon",
    title: "Hackathon Participant",
    org: "MAIT / Devfolio / Unstop",
    year: "2025",
    detail:
      "Participated in a team-based hackathon, collaborating to design and develop a functional prototype within the given time constraints while applying problem-solving and full-stack development skills.",
  },

  {
    category: "Certificate",
    title: "Machine Learning Certification",
    org: "Coursera",
    year: "2025",
    detail:
      "Completed a Machine Learning course covering supervised and unsupervised learning, model evaluation, regression, classification, and practical implementation using Python.",
  },
  {
    category: "Certificate",
    title: "Cybersecurity Fundamentals",
    org: "Cisco Networking Academy",
    year: "2025",
    detail:
      "Learned the fundamentals of cybersecurity, including network security, cyber threats, cryptography, authentication, and security best practices.",
  },

  {
    category: "Open Source",
    title: "Open Source Contributor",
    org: "Salesforce / GitHub",
    year: "2026",
    detail:
      "Contributed to Salesforce open-source repositories and community projects by resolving issues, enhancing documentation, and submitting verified pull requests using Git workflows.",
  },
  {
    category: "Competitive",
    title: "Data Structures & Algorithms Practice",
    org: "LeetCode",
    year: "2026",
    detail:
      "Actively practicing core problem-solving on LeetCode, focusing on fundamental data structures (Arrays, Strings, Linked Lists, Trees) and optimizing time/space complexity.",
  },
  {
    category: "Internship",
    title: "Software Engineering Intern",
    org: "Tech Startup / Industry Partner",
    year: "2025",
    detail:
      "Engineered responsive web applications and integrated RESTful microservices; collaborated with cross-functional teams to deploy scalable features and improve application performance.",
  },
];

export const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;
