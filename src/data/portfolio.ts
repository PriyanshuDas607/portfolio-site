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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-das-919a1a302", handle: "/in/priyanshudas" },
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
  interests: ["Machine learning", "Deep learning", "Web development", "Cybersecurity", "Cloud", "Developer tooling"],
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
      "Data Structures & Algorithms"
    ],

    current: true,
  },
  {
    period: "2022 - 2024",
    institution: "MRV MODEL SCHOOL",
    credential: "Senior Secondary (Class XII) – Science Stream",
    detail: "Completed Senior Secondary education with Physics, Chemistry, Mathematics, and Computer Science, developing strong analytical and problem-solving skills.",
    highlights: [
      "Physics, Chemistry & Mathematics",
      "Computer Science",
      "Problem Solving",
      "Higher Secondary Education"
    ],
    current: false,
  },
  {
    period: "2022",
    institution: "MRV MODEL SCHOOL",
    credential: "Secondary Education (Class X)",
    detail: "Completed Secondary School education with a strong academic foundation across science, mathematics, and computer fundamentals.Completed Secondary School education with a strong academic foundation across science, mathematics, and computer fundamentals.",
    highlights: [
      "Mathematics",
      "Science",
      "Computer Fundamentals",
      "Academic Excellence"
    ],

    current: false,
  },
];

export const skillGroups = [
  {
    category: "Languages",
    note: "Daily drivers",
    items: ["Python", "JavaScript",  "Java", "C", "SQL"],
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
};

export const projects: Project[] = [
 {
    title: "SalesForge",
    kind: "Full stack web app (Open Source Contributor)",
    year: "2026",
    problem:
      "B2B sales teams face severe 'tool fatigue' using separate apps for CRMs, email sequences, and analytics, leading to fragmented data, rigid custom schemas, and security risks in multi-tenant environments.",
    solution:
      "Contributed to an all-in-one B2B SaaS Sales Operating System featuring a drag-and-drop Kanban pipeline, dynamic JSON custom fields (`customFields`), real-time SSE analytics, and strict `tenantScope` multi-tenant row-level data isolation.",
    stack: [
      "Node.js",
      "Express 5",
      "Prisma 6",
      "PostgreSQL 16",
      "React 19",
      "Vite 7",
      "TailwindCSS 4"
    ],
    github: "https://github.com/rajat-wyrm/salesforge",
    demo: "https://uptoskills-project.vercel.app/",
    featured: true,
  },
  // {
  //   title: "Project two",
  //   kind: "Machine learning project",
  //   year: "Year",
  //   problem: "Describe the problem and dataset. Placeholder — replace with your project.",
  //   solution: "Describe the model, evaluation and results. Placeholder — replace with your project.",
  //   stack: ["Python", "scikit-learn", "Pandas"],
  //   github: "https://github.com/",
  //   featured: true,
  // },
  // {
  //   title: "Project three",
  //   kind: "Cybersecurity tool",
  //   year: "Year",
  //   problem: "Describe the security gap you explored. Placeholder — replace with your project.",
  //   solution: "Describe the tool or lab you built. Placeholder — replace with your project.",
  //   stack: ["Python", "Linux", "Networking"],
  //   github: "https://github.com/",
  // },
  // {
  //   title: "Project four",
  //   kind: "Frontend project",
  //   year: "Year",
  //   problem: "Describe the motivation. Placeholder — replace with your project.",
  //   solution: "Describe what you shipped. Placeholder — replace with your project.",
  //   stack: ["React", "Tailwind CSS"],
  //   github: "https://github.com/",
  //   demo: "https://example.com/",
  // },
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
