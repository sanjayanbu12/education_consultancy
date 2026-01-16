import { allCourses } from "@/data/courses-data"

// Generate detailed course information from the course database
export const courseInfo: Record<string, any> = {}

// Helper function to generate course details based on category and type
function generateCourseDetails(course: typeof allCourses[0]) {
  const baseInfo = {
    title: course.name,
    subtitle: course.description || `Professional ${course.type} program in ${course.category}`,
    overview: course.description || `This comprehensive ${course.duration} program prepares students for successful careers in ${course.category.toLowerCase()}. Students gain both theoretical knowledge and practical skills essential for the industry.`,
    duration: course.duration,
  }

  // Category-specific details
  const categoryDetails: Record<string, any> = {
    Medical: {
      eligibility: ["10+2 with Physics, Chemistry, Biology (PCB)", "Minimum 50% marks in PCB", "NEET qualification required (for most courses)"],
      syllabus: ["Anatomy & Physiology", "Biochemistry", "Pathology", "Pharmacology", "Clinical Practice", "Medical Ethics"],
      careers: ["Medical Professional", "Healthcare Specialist", "Hospital Administrator", "Research Scientist", "Clinical Consultant"],
      future: ["Growing healthcare industry", "Telemedicine expansion", "AI-assisted diagnostics", "Global demand for healthcare professionals"],
    },
    Engineering: {
      eligibility: ["10+2 with Physics, Chemistry, Mathematics (PCM)", "Minimum 50% marks", "JEE/State CET qualification"],
      syllabus: ["Engineering Mathematics", "Core Engineering Subjects", "Laboratory Work", "Project Work", "Industrial Training"],
      careers: ["Engineer", "Technical Consultant", "Project Manager", "R&D Specialist", "Technology Expert"],
      future: ["Industry 4.0 transformation", "AI and automation integration", "Sustainable technology focus", "Global engineering opportunities"],
    },
    Commerce: {
      eligibility: ["10+2 any stream", "Minimum 50% marks", "Entrance exam (for PG courses)"],
      syllabus: ["Accounting", "Business Management", "Economics", "Finance", "Marketing", "Business Analytics"],
      careers: ["Business Manager", "Financial Analyst", "Accountant", "Marketing Professional", "Entrepreneur"],
      future: ["Digital business transformation", "FinTech growth", "E-commerce expansion", "Data-driven decision making"],
    },
    Law: {
      eligibility: ["10+2 any stream", "CLAT/LSAT qualification", "Minimum 50% marks"],
      syllabus: ["Constitutional Law", "Criminal Law", "Civil Law", "Corporate Law", "Legal Research", "Court Procedures"],
      careers: ["Advocate", "Legal Consultant", "Corporate Lawyer", "Judge", "Legal Advisor"],
      future: ["Cyber law expansion", "Corporate legal demand", "International law opportunities", "Legal tech integration"],
    },
    Science: {
      eligibility: ["10+2 with Science stream", "Minimum 50% marks", "Subject-specific requirements"],
      syllabus: ["Core Science Subjects", "Laboratory Work", "Research Methods", "Applied Science", "Project Work"],
      careers: ["Research Scientist", "Lab Technician", "Science Educator", "Quality Analyst", "Technical Specialist"],
      future: ["Research opportunities expanding", "Industry demand growing", "Interdisciplinary applications", "Innovation-driven careers"],
    },
    Arts: {
      eligibility: ["10+2 any stream", "Minimum 45% marks"],
      syllabus: ["Humanities", "Social Sciences", "Languages", "Communication", "Research Methods"],
      careers: ["Educator", "Content Writer", "Journalist", "Social Worker", "Civil Services"],
      future: ["Digital content creation", "Communication skills demand", "Public policy roles", "Social sector growth"],
    },
  }

  const details = categoryDetails[course.category] || categoryDetails.Science

  return {
    ...baseInfo,
    eligibility: details.eligibility,
    syllabus: details.syllabus,
    careers: details.careers,
    future: details.future,
    whoShouldChoose: [
      `Students interested in ${course.category.toLowerCase()}`,
      `Those seeking ${course.type} qualification`,
      `People passionate about ${course.name.toLowerCase()}`,
      "Students looking for career growth opportunities",
    ],
    skills: [
      "Analytical thinking",
      "Problem solving",
      "Communication skills",
      "Technical expertise",
      "Team collaboration",
    ],
    recruiters: [
      "Top Companies",
      "Government Organizations",
      "Private Sector",
      "Research Institutions",
      "International Firms",
    ],
    salary: {
      fresher: course.type === "PG" ? "₹5-12 LPA" : "₹3-8 LPA",
      experienced: course.type === "PG" ? "₹15-40 LPA" : "₹10-25 LPA",
    },
    difficulty: course.type === "PG" ? "Medium to High" : "Medium",
    mistakes: [
      "Not researching career prospects thoroughly",
      "Choosing based on peer pressure",
      "Ignoring practical skill development",
    ],
    whyWorth: `${course.name} offers excellent career prospects with growing industry demand and competitive salaries.`,
  }
}

// Generate course info for all courses
allCourses.forEach((course) => {
  courseInfo[course.slug] = generateCourseDetails(course)
})

// Override with detailed information for key courses (keeping your existing detailed data)
courseInfo.mbbs = {
  title: "MBBS – Bachelor of Medicine & Bachelor of Surgery",
  subtitle: "India's most prestigious medical undergraduate program for aspiring doctors.",
  overview:
    "MBBS is a globally respected program designed to train students in core medical sciences, diagnostics, patient management, and surgical procedures. Over 5.5 years, students undergo classroom learning, cadaver-based anatomy study, ward visits, clinical rotations, and a mandatory internship that builds real-world hospital experience.",
  duration: "5.5 Years (including 1-year internship)",
  eligibility: [
    "10+2 with Physics, Chemistry, Biology (PCB)",
    "Minimum 50% marks in PCB",
    "NEET qualification required",
  ],
  syllabus: [
    "Anatomy",
    "Physiology",
    "Biochemistry",
    "Pathology & Microbiology",
    "Pharmacology",
    "General Medicine",
    "General Surgery",
    "Community Medicine",
  ],
  careers: [
    "Medical Doctor (MBBS)",
    "Surgeon (after MS)",
    "Pediatrician",
    "Cardiologist (after DM)",
    "Hospital Administrator",
    "Medical Research Scientist",
  ],
  future: [
    "Doctors remain in high global demand",
    "AI & robotics improving diagnostic accuracy",
    "Telemedicine expansion allowing remote care",
  ],
  whoShouldChoose: [
    "Students with strong interest in biology & human anatomy",
    "Those who want a respected and stable career",
    "Students who can handle long academic journeys",
    "People passionate about saving lives and patient care",
  ],
  skills: [
    "Clinical reasoning",
    "Diagnostic skills",
    "Patient communication & empathy",
    "Emergency response training",
    "Surgical procedure basics",
  ],
  recruiters: [
    "AIIMS",
    "Apollo Hospitals",
    "Fortis Healthcare",
    "Narayana Health",
    "Global Hospitals",
    "UK NHS (after qualifying exams)",
  ],
  salary: {
    fresher: "₹6–12 LPA depending on hospital & location",
    experienced: "₹20–60 LPA (specialists earn even more)",
  },
  difficulty: "High – requires consistency, patience, and long study hours",
  mistakes: [
    "Choosing MBBS only due to parental pressure",
    "Not preparing early for NEET",
    "Underestimating internship workload",
  ],
  whyWorth: "MBBS offers unmatched respect, stability, and global opportunities. No recession impact, lifelong demand, and high career satisfaction.",
}

courseInfo.bds = {
  title: "BDS – Bachelor of Dental Surgery",
  subtitle: "Professional program for students aspiring to become certified dentists.",
  overview:
    "BDS is a structured dental program focusing on oral healthcare, dental surgery, orthodontics, prosthodontics, and aesthetic dentistry. Students learn using modern dental chairs, impression models, and clinical practice sessions where they treat real patients under supervision.",
  duration: "5 Years (including internship)",
  eligibility: ["10+2 with PCB", "NEET qualification", "Minimum 50% marks in PCB"],
  syllabus: [
    "Dental Anatomy",
    "Oral Pathology",
    "Orthodontics",
    "Periodontology",
    "General Surgery",
    "Prosthodontics",
    "Conservative Dentistry",
  ],
  careers: [
    "Dentist",
    "Orthodontist",
    "Cosmetic Dentist",
    "Dental Surgeon",
    "Implantology Specialist",
  ],
  future: [
    "Huge growth in cosmetic dentistry",
    "Demand for private dental clinics",
    "Digital dentistry & 3D scanning",
  ],
  whoShouldChoose: [
    "Students interested in tooth anatomy & oral care",
    "People who prefer a clinical but less intense career than MBBS",
    "Students wanting a profitable private practice",
  ],
  skills: [
    "Hands-on clinical skills",
    "Aesthetic dentistry techniques",
    "Patient consultation & diagnosis",
    "Dental radiography",
  ],
  recruiters: [
    "Government Dental Hospitals",
    "Private Clinics",
    "Cosmetic Dental Centers",
    "Apollo White Dental",
    "Dental chains across India",
  ],
  salary: {
    fresher: "₹4–8 LPA in clinics",
    experienced: "₹15–40 LPA (private practice can cross ₹1 Cr)",
  },
  difficulty: "Medium – practical and skill-based learning required.",
  mistakes: [
    "Assuming BDS has less scope (not true, cosmetic dentistry booming)",
    "Not practicing enough during clinical postings",
  ],
  whyWorth:
    "Dental jobs are increasing rapidly, and private practices can earn extremely well with low investment and high demand.",
}

courseInfo["btech-cse"] = {
  title: "B.Tech Computer Science Engineering",
  subtitle: "India's most popular engineering program focusing on technology and innovation.",
  overview:
    "B.Tech CSE focuses on programming, AI, algorithms, data structures, cloud computing, cybersecurity, and modern tech development. Graduates enjoy some of the highest-paying jobs in India and abroad.",
  duration: "4 Years",
  eligibility: ["10+2 with PCM", "Entrance exam (JEE/CET)", "50% marks"],
  syllabus: [
    "Data Structures",
    "AI & Machine Learning",
    "Operating Systems",
    "Cloud Computing",
    "Cybersecurity",
    "Full Stack Development",
  ],
  careers: [
    "Software Engineer",
    "AI Engineer",
    "Cloud Architect",
    "Full Stack Developer",
    "Cybersecurity Analyst",
  ],
  future: [
    "AI everywhere by 2030",
    "Automation & Robotics integration",
    "Metaverse & AR/VR expansion",
  ],
  whoShouldChoose: [
    "Students who enjoy coding or problem solving",
    "Those aiming for high salaries",
    "Students aspiring for global IT jobs",
  ],
  skills: [
    "Programming",
    "Data Analytics",
    "Software Architecture",
    "Cloud Deployment",
    "AI model development",
  ],
  recruiters: ["Google", "Microsoft", "Infosys", "TCS", "Amazon", "Accenture"],
  salary: {
    fresher: "₹4–12 LPA",
    experienced: "₹20–80 LPA (Top tech up to ₹1 Cr+)",
  },
  difficulty: "Medium – requires logical thinking.",
  mistakes: [
    "Learning only theory & skipping projects",
    "Depending only on college placements",
  ],
  whyWorth: "CSE is future-proof and offers the highest salary potential in India.",
}

courseInfo.mba = {
  title: "MBA – Master of Business Administration",
  subtitle: "India's top postgraduate program for leadership careers.",
  overview:
    "MBA trains students in management, finance, HR, analytics, marketing, operations, and strategy. It is the most sought-after degree for high-level corporate careers.",
  duration: "2 Years",
  eligibility: ["Any UG degree", "CAT/MAT/XAT"],
  syllabus: [
    "Marketing",
    "Finance",
    "Business Analytics",
    "Operations Management",
  ],
  careers: ["Business Manager", "Product Manager", "HR Manager"],
  future: ["Data-driven decision making increasing demand for MBAs"],
  whoShouldChoose: [
    "Students who want leadership positions",
    "Those aiming for corporate growth",
  ],
  skills: ["Team leadership", "Analytics", "Communication"],
  recruiters: ["Infosys", "Accenture", "Deloitte", "Amazon"],
  salary: {
    fresher: "₹6–12 LPA",
    experienced: "₹20–40 LPA",
  },
  difficulty: "Medium",
  whyWorth: "MBAs enjoy excellent career stability and high salary growth.",
}

export function generateStaticParams() {
  return Object.keys(courseInfo).map((slug) => ({ slug }))
}
