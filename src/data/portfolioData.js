export const personalInfo = {
  name: "Karthikeya Pantam",
  shortName: "Karthikeya",
  designation: "Founder",
  identity: "Technology Entrepreneur, Product Builder",
  location: "India",
  education: "B.Tech in Electronics and Communication Engineering, 2025",
  tagline: "Build Something Useful.",
  heroHeading: "Building Useful Things for the Future.",
  heroSubtitle: "Building technology-driven products focused on healthcare, education, and social impact.",
  brandName: "AIIENS",
  brandExpansion: "Advanced Intelligence Integration for Enhanced Network Systems",
  brandTagline: "Build Something Useful.",
  brandDescription: "AIIENS is the overarching brand behind initiatives focused on healthcare technology, education, and social impact.",
  
  aboutDescription: "I am Karthikeya Pantam, a technology entrepreneur interested in building useful products and exploring how technology can solve practical problems. Through AIIENS, I am developing initiatives across healthcare technology, education, and social impact.",
  
  interests: [
    "Entrepreneurship",
    "Applied AI",
    "Product Development",
    "Healthcare Technology",
    "Education Technology",
    "Software Platforms"
  ],

  profileImage: "/images/karthikeya-portrait.jpg",
  googleScriptUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbx2nSddoG9Yh6pkpDFefyWydtA-nvZwYNM5HaW9GD8VrNcGckKPe_r50ZctTsWOOX6MtQ/exec",
  email: "karthikeyapantam@aiiens.com",
  phone: "+91 82978 74231",
  
  socials: {
    instagram: "https://www.instagram.com/karthikeya_pantam/",
    instagramHandle: "@karthikeya_pantam",
    twitter: "https://x.com/KarthikeyaPant2",
    twitterHandle: "@KarthikeyaPant2",
    linkedin: "https://www.linkedin.com/in/karthikeyapantam",
    linkedinHandle: "karthikeyapantam"
  }
};

export const aiiensBrand = {
  name: "AIIENS",
  expansion: "Advanced Intelligence Integration for Enhanced Network Systems",
  tagline: "Build Something Useful.",
  description: "AIIENS is the overarching brand behind initiatives focused on healthcare technology, education, and social impact.",
  masterCard: "/images/brand/aiiens-master.png",
  website: "https://www.aiiens.com",
  domain: "aiiens.com",
  initiatives: [
    {
      id: "aiiens-health",
      name: "AIIENS Health",
      category: "Healthcare Technology",
      description: "Developing digital tools to help clinics manage patient information, appointments, and healthcare workflows.",
      targetAudience: "Clinics, doctors, healthcare professionals, and patients.",
      focus: [
        "Clinic workflow management",
        "Automated appointment booking",
        "Structured electronic health records (EHR)",
        "AI-assisted clinical support"
      ],
      ctaText: "Explore AIIENS Health",
      url: "https://www.aiiens.com",
      domain: "www.aiiens.com",
      logo: "/images/brand/aiiens-health.png",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    },
    {
      id: "aiiens-campus",
      name: "AIIENS Campus",
      category: "Education Technology",
      description: "Building practical learning experiences to help engineering students develop technical skills through structured learning, workshops, and projects.",
      targetAudience: "Engineering students and aspiring technology professionals.",
      focus: [
        "Hands-on online learning paths",
        "Industry-focused technical workshops",
        "Practical applied AI education",
        "Full-stack software engineering projects"
      ],
      ctaText: "Explore AIIENS Campus",
      url: "https://www.aiienscampus.in",
      domain: "www.aiienscampus.in",
      logo: "/images/brand/aiiens-campus.png",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      id: "aiiens-foundation",
      name: "AIIENS Foundation",
      category: "Social Impact",
      description: "Developing a social-impact initiative focused on verified fundraising campaigns and connecting people who need support with potential contributors.",
      targetAudience: "People seeking medical & community assistance, donors, NGOs, supporters.",
      focus: [
        "Verified medical & social campaigns",
        "Transparent fund distribution",
        "Public campaign promotion",
        "High-trust donor-beneficiary collaboration"
      ],
      ctaText: "Explore AIIENS Foundation",
      url: "https://www.aiiensfoundation.online",
      domain: "www.aiiensfoundation.online",
      logo: "/images/brand/aiiens-foundation.png",
      badgeColor: "bg-cyan-500/10 text-cyan-700 border-cyan-500/20"
    }
  ]
};

export const projects = [
  {
    id: "clinic-os",
    number: "01",
    name: "PulseFlow Clinic OS",
    category: "Healthcare",
    tagline: "Lightweight, digital-first clinical workflow and patient record automation.",
    problem: "Outpatient clinics in tier-2 and tier-3 regions rely on fragmented paper records, resulting in misplaced histories, delayed diagnostics, and high appointment no-show rates.",
    solution: "Engineered a streamlined digital clinic operating system with automated appointment notifications, doctor consultation notes, and patient history retrieval in seconds.",
    contribution: "Led product specification, full-stack architecture, relational database schema, and automated WhatsApp reminder pipeline.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "TailwindCSS"],
    status: "Active Deployment",
    image: "/images/brand/aiiens-health.png",
    screenshot: "/images/brand/aiiens-health.png",
    liveUrl: "https://www.aiiens.com",
    githubUrl: "https://github.com/karthikeyapantam",
    domain: "aiiens.com/health"
  },
  {
    id: "campus-forge",
    number: "02",
    name: "CampusForge Skill Engine",
    category: "Education",
    tagline: "Structured technical pathways and project verification for engineering undergraduates.",
    problem: "Traditional academic syllabi lag behind real-world engineering demands, leaving students struggling to bridge theoretical coursework with shipping modern software products.",
    solution: "Created an interactive project-first learning platform delivering targeted sprint roadmaps, guided technical challenges, and mentored code reviews.",
    contribution: "Formulated curriculum architecture, designed interactive UI/UX, and created the project assessment grading workflow.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "WebSockets"],
    status: "Production / Active",
    image: "/images/brand/aiiens-campus.png",
    screenshot: "/images/brand/aiiens-campus.png",
    liveUrl: "https://www.aiienscampus.in",
    githubUrl: "https://github.com/karthikeyapantam",
    domain: "aiienscampus.in"
  },
  {
    id: "care-trust",
    number: "03",
    name: "CareTrust Verification Protocol",
    category: "Social Impact",
    tagline: "Document validation and transparent disbursement protocol for healthcare fundraisers.",
    problem: "Public donor skepticism regarding medical emergency fundraising due to fraudulent campaigns and opaque fund deployment.",
    solution: "Developed a multi-stage verification pipeline that authenticates hospital billing estimates, doctor attestations, and releases funds directly against verified medical invoices.",
    contribution: "Conceptualized trust framework, document verification intake UX, and milestone tracking ledger.",
    technologies: ["React", "Node.js", "Document OCR", "Express", "Stripe / Razorpay", "AWS S3"],
    status: "Beta Testing",
    image: "/images/brand/aiiens-foundation.png",
    screenshot: "/images/brand/aiiens-foundation.png",
    liveUrl: "https://www.aiiensfoundation.online",
    githubUrl: "https://github.com/karthikeyapantam",
    domain: "aiiensfoundation.online"
  },
  {
    id: "retinascan",
    number: "04",
    name: "RetinaScan Vision Assist",
    category: "Computer Vision",
    tagline: "Deep-learning retinal image analysis for automated screening support.",
    problem: "Limited access to specialized ophthalmologists in rural community camps leads to delayed detection of diabetic retinopathy and preventable vision impairment.",
    solution: "Trained a convolutional neural network (CNN) pipeline on fundus photography to perform multi-class severity classification with visual heatmaps for clinical review.",
    contribution: "Developed image normalization preprocessing, model training scripts, and an offline-capable browser interface for community health workers.",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Docker"],
    status: "Research & Prototype",
    image: "/images/brand/aiiens-master.png",
    screenshot: "/images/brand/aiiens-master.png",
    liveUrl: "https://www.aiiens.com",
    githubUrl: "https://github.com/karthikeyapantam",
    domain: "aiiens.com/retinascan"
  },
  {
    id: "edgesense",
    number: "05",
    name: "EdgeSense IoT Sensor Gateway",
    category: "Engineering",
    tagline: "Fault-tolerant telemetry hub for low-power clinical and environmental monitors.",
    problem: "Real-time sensor arrays in fluctuating network environments experience dropped packets and telemetry bottlenecks.",
    solution: "Engineered an embedded microcontroller firmware architecture featuring local circular-buffer storage, edge filtering, and automatic MQTT failover synchronization.",
    contribution: "Hardware circuit schematics, FreeRTOS firmware state machine, and real-time WebSocket dashboard integration.",
    technologies: ["C++", "ESP-IDF", "FreeRTOS", "MQTT", "Node.js", "Chart.js"],
    status: "Field Validated",
    image: "/images/brand/aiiens-master.png",
    screenshot: "/images/brand/aiiens-master.png",
    liveUrl: "https://www.aiiens.com",
    githubUrl: "https://github.com/karthikeyapantam",
    domain: "aiiens.com/edgesense"
  }
];

export const educationData = [
  {
    institution: "Sir CR Reddy College of Engineering (JNTUK)",
    location: "Eluru, Andhra Pradesh",
    period: "2021 — 2025",
    qualification: "B.Tech in Electronics and Communication Engineering",
    score: "CGPA: 6.48 / 10",
    badge: "Graduation: 2025"
  },
  {
    institution: "Tirumala Junior College",
    location: "Vizag, Andhra Pradesh",
    period: "2019 — 2021",
    qualification: "Intermediate (MPC), Board of Intermediate Education",
    score: "Percentage: 78%",
    badge: "Intermediate"
  },
  {
    institution: "Bhashyam High School",
    location: "Vizianagaram, Andhra Pradesh",
    period: "2018 — 2019",
    qualification: "Secondary School, Board of Secondary Education",
    score: "CGPA: 9.7 / 10",
    badge: "Secondary School"
  }
];

export const experienceData = [
  {
    period: "2024 — Present",
    role: "Founder & Technology Entrepreneur",
    organization: "AIIENS",
    location: "India",
    type: "Founder / Leadership",
    description: "Leading product strategy, engineering direction, and execution across AIIENS Health, AIIENS Campus, and AIIENS Foundation. Architecting software platforms, establishing partner clinic workflows, and driving engineering education initiatives.",
    bullets: [
      "Architected multi-tenant digital clinic operating systems for outpatient healthcare management.",
      "Spearheaded practical engineering education sprints and community social impact initiatives."
    ]
  },
  {
    period: "Dec 2024 — May 2025 (6 Mos)",
    role: "Machine Learning Student Intern",
    organization: "BIST TECHNOLOGIES",
    location: "Remote",
    type: "AI & Machine Learning",
    description: "Hands-on experience in machine learning model development, data preprocessing, and predictive analysis using real-world datasets.",
    bullets: [
      "Performed data cleaning, transformation, and exploratory data analysis (EDA) to extract meaningful insights.",
      "Implemented and evaluated machine learning algorithms using Python libraries such as Pandas, NumPy, and Scikit-learn.",
      "Assisted in developing data-driven solutions and improving model performance through feature engineering and optimization.",
      "Collaborated on AI-based projects, enhancing practical understanding of supervised learning and model evaluation techniques."
    ]
  },
  {
    period: "June 2024 — July 2024 (2 Mos)",
    role: "AI & Data Skills Student Intern",
    organization: "YBI Foundation",
    location: "Remote",
    type: "AI & Data Science",
    description: "Participated in hands-on AI model development, data processing workshops, and real-world predictive modeling.",
    bullets: [
      "Contributed to real-world projects, analyzing datasets and implementing machine learning models for insights generation.",
      "Explored tools like Pandas, NumPy, and Scikit-learn to enhance data manipulation and prediction accuracy."
    ]
  },
  {
    period: "May 2023 — June 2023 (2 Mos)",
    role: "CNS Student Intern",
    organization: "Airports Authority of India",
    location: "Vijayawada, India",
    type: "Avionics & Electronics",
    description: "Collaborated with technical engineering teams to analyze and troubleshoot Communication, Navigation, and Surveillance (CNS) systems.",
    bullets: [
      "Assisted in troubleshooting and maintaining radar and communication equipment, gaining exposure to aviation-grade electronics.",
      "Documented technical workflows and created detailed reports for ongoing system improvements."
    ]
  }
];

export const achievementsData = [
  {
    title: "IEEE Xtreme 2023 — Global Rank 347",
    issuer: "IEEE Xtreme Worldwide 24-Hour Competitive Programming",
    year: "2023",
    description: "Competed in the prestigious IEEE Xtreme worldwide 24-hour programming competition against thousands of teams globally, achieving a worldwide team rank of 347.",
    badge: "Global Rank 347"
  },
  {
    title: "Bachelor of Technology in ECE",
    issuer: "Sir CR Reddy College of Engineering (JNTUK)",
    year: "2021 - 2025",
    description: "Completed rigorous engineering training across digital signal processing, embedded architectures, machine learning, and communication systems.",
    badge: "CGPA: 6.48 / 10"
  }
];
