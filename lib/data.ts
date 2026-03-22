export const personalInfo = {
  name:         "Yash Chalke",
  title:        "Full-Stack Developer",
  roles:        ["React Developer", "React Native Developer", "Full-Stack Developer"],
  tagline:      "Building scalable web & mobile products — from pixel-perfect UIs to production APIs.",
  location:     "Kharadi, Pune-Maharashtra",
  email:        "chalkeyash11@gmail.com",
  phone:        "+91 8956509311",
  linkedin:     "https://www.linkedin.com/in/yashchalke75",
  portfolio:    "https://portfolio.dev",
  github:       "https://github.com/yaashchalke75",
  twitter:      "https://twitter.com",
  availability: "MyVyay - Botmatic Solution",
  resumeUrl:    "/Yash_Chalke_Resume.pdf",
  bio: "Full-Stack Developer with production experience building scalable web and e-commerce applications (React.js, Node.js, MongoDB) and expanding expertise in cross-platform mobile development (React Native).",
  bio2: "Proven record of independently owning full frontend architecture on live international products — handling UI development, REST API integration (30+ APIs), performance optimization, and deployment. Strong bias for ownership and delivery in startup environments.",
};

export const skills = {
  Frontend: ["React.js","Redux","Context API","JavaScript ES6+","TypeScript","HTML5","CSS3","Tailwind CSS"],
  Mobile:   ["React Native","Expo","React Navigation","AsyncStorage","iOS & Android"],
  Backend:  ["Node.js","Express.js","REST API","JWT Authentication","MVC Architecture"],
  Database: ["MongoDB","Mongoose ODM","NoSQL","Firebase"],
  Tools:    ["Git","GitHub","Postman"],
};

export const marqueeItems = [
  "React.js","React Native","Node.js","MongoDB","Tailwind CSS",
  "TypeScript","Redux","Express.js","Expo","REST API",
  "JWT Auth","Postman","Firebase","Git","GitHub",
];

export const experience = [
  {
    id: 1,
    role:     "Mobile Developer",
    company:  "MyVyay Botmatic Solution Pvt. Ltd.",
    type:     "Full-time",
    period:   "Apr 2026 — Present",
    location: "Pune, India",
    color:    "#6c63ff",
    description: "Sole developer handling full frontend and API integration for MyVyay — a FinTech cross-platform mobile product. Building performant iOS & Android experiences with React Native, managing 30+ API integrations end-to-end.",
    achievements: [
      "Sole owner of complete React Native frontend — architecture, UI, state management, and API layer for a FinTech product",
      "Integrated 30+ RESTful APIs with Redux / Context API; structured error-handling for production-grade reliability",
      "Architected reusable component libraries — reducing estimated dev effort by 30% across future modules",
      "Applied memoization, lazy loading, and FlatList optimisation — targeting sub-2s screen loads on mid-range devices",
    ],
    tech: ["React Native","Expo","Redux","Context API","REST API","JWT","iOS","Android"],
  },
  {
    id: 2,
    role:     "Frontend Developer",
    company:  "MyVyay Botmatic Solution Pvt. Ltd.",
    type:     "Full-time",
    period:   "Jan 2026 — Apr 2026",
    location: "Pune, India",
    color:    "#ff6b6b",
    description: "Sole frontend developer on Zeux LifeSciences — a production e-commerce portal for a Mexican client — independently delivering full frontend architecture from scratch to launch in under 3 months.",
    achievements: [
      "Engineered 5+ feature modules (product catalog, order management, dashboards, RBAC) with complete frontend ownership",
      "Integrated 30+ REST APIs; reduced defects ~40% via rigorous Postman validation",
      "Improved initial page load by ~35% via code-splitting, lazy loading, and memoization",
      "Built English → Spanish & Portuguese multilingual translation feature for international users",
      "Delivered pixel-perfect responsive UI with React.js + Tailwind CSS across all major browsers",
    ],
    tech: ["React.js","Tailwind CSS","Node.js","MongoDB","REST API","JWT","i18n"],
  },
];

export const projects = [
  {
    id: 1,
    title:    "Zeux LifeSciences",
    category: "E-Commerce Portal",
    description: "Full-scale multi-module e-commerce portal built as sole frontend engineer for a Mexican client — product catalog, order flow, dashboards, JWT auth, RBAC, and multilingual (EN/ES/PT) translation.",
    tech:     ["React.js","Node.js","MongoDB","Tailwind CSS","REST API","JWT","i18n"],
    links:    { github: "#", live: "#" },
    featured: true,
    accent:   "#6c63ff",
    highlights: [
      "~35% faster page load via code-splitting & lazy loading",
      "~40% defect reduction via Postman API validation",
      "English → Spanish & Portuguese translation built-in",
      "~25% less code duplication with reusable components",
    ],
  },
  {
    id: 2,
    title:    "MyVyay FinTech App",
    category: "React Native · FinTech",
    description: "Sole developer on MyVyay — a FinTech cross-platform mobile product. Managed complete frontend architecture and integrated 30+ APIs end-to-end for iOS & Android.",
    tech:     ["React Native","Expo","Redux","REST API","JWT","AsyncStorage"],
    links:    { github: "#", live: "#" },
    featured: true,
    accent:   "#00d4aa",
    highlights: [
      "30% reduction in dev effort with reusable component library",
      "Sub-2s screen load on mid-range devices",
      "30+ REST API integrations managed end-to-end",
      "FinTech-grade security with JWT + structured error handling",
    ],
  },
  {
    id: 3,
    title:    "REST API Architecture",
    category: "Node.js · Backend",
    description: "Production Node.js + Express REST API with JWT authentication, MVC architecture, MongoDB, and structured error handling for e-commerce and FinTech use cases.",
    tech:     ["Node.js","Express.js","MongoDB","Mongoose","JWT"],
    links:    { github: "#", live: "#" },
    featured: false,
    accent:   "#ff6b6b",
    highlights: [],
  },
  {
    id: 4,
    title:    "Reusable Component Library",
    category: "React.js · UI System",
    description: "Scalable React component system with Tailwind CSS — forms, tables, dashboards, and data display used across 5+ production modules.",
    tech:     ["React.js","Tailwind CSS","JavaScript","Context API"],
    links:    { github: "#", live: "#" },
    featured: false,
    accent:   "#f59e0b",
    highlights: [],
  },
];

export const education = [
  {
    degree:      "Full Stack Web Development",
    sub:         "BitCode Technologies",
    period:      "Jun 2024 — Sept 2024",
    topics:      ["Advanced MERN Stack","React JS","Next JS","Tailwind CSS"],
    color:       "#6c63ff",
  },
  {
    degree:      "BSc Information Technology",
    sub:         "University Degree",
    period:      "Jun 2021 — Jun 2024",
    topics:      ["Data Structures","DBMS","Web Technologies","Software Engineering"],
    color:       "#00d4aa",
  },
];

export const testimonials = [
  {
    name:    "Team Lead",
    role:    "MyVyay Botmatic Solution",
    content: "Yash independently delivered the entire frontend for our international e-commerce client in under 3 months — pixel-perfect, performant, and production-ready.",
    avatar:  "TL",
    color:   "#6c63ff",
  },
  {
    name:    "Project Manager",
    role:    "MyVyay Botmatic Solution",
    content: "Exceptional ownership mindset. Yash handled 30+ API integrations, performance optimization, and deployment with minimal supervision — rare for someone at this stage.",
    avatar:  "PM",
    color:   "#ff6b6b",
  },
  {
    name:    "Zeux Team",
    role:    "Design Feedback",
    content: "The design and UI are absolutely amazing — clean, modern, and intuitive. Collaborating with the frontend team was a genuinely great experience.",
    avatar:  "ZT",
    color:   "#00d4aa",
  },
];
