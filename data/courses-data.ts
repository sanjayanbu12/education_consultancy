// Comprehensive course data from kvguidance.com
// Organized by category with detailed information

export interface Course {
    slug: string
    name: string
    category: string
    duration: string
    type: "UG" | "PG" | "Diploma"
    popular: boolean
    students?: string
    rating?: number
    description?: string
}

export const allCourses: Course[] = [
    // ==================== MEDICAL & HEALTH SCIENCES ====================

    // Medical Degrees
    { slug: "mbbs", name: "MBBS", category: "Medical", duration: "5.5 Years", type: "UG", popular: true, students: "2,500+", rating: 4.9, description: "Bachelor of Medicine and Bachelor of Surgery" },
    { slug: "bds", name: "BDS", category: "Medical", duration: "5 Years", type: "UG", popular: true, students: "1,200+", rating: 4.7, description: "Bachelor of Dental Surgery" },

    // Alternative Medicine
    { slug: "bams", name: "BAMS", category: "Medical", duration: "5.5 Years", type: "UG", popular: false, students: "800+", rating: 4.6, description: "Bachelor of Ayurvedic Medicine and Surgery" },
    { slug: "bhms", name: "BHMS", category: "Medical", duration: "5.5 Years", type: "UG", popular: false, students: "600+", rating: 4.5, description: "Bachelor of Homeopathic Medicine and Surgery" },
    { slug: "bums", name: "BUMS", category: "Medical", duration: "5.5 Years", type: "UG", popular: false, students: "400+", rating: 4.4, description: "Bachelor of Unani Medicine and Surgery" },
    { slug: "bnys", name: "BNYS", category: "Medical", duration: "5.5 Years", type: "UG", popular: false, students: "300+", rating: 4.3, description: "Bachelor of Naturopathy and Yogic Sciences" },

    // Veterinary & Agricultural
    { slug: "bvsc-ah", name: "BVSc & AH", category: "Medical", duration: "5 Years", type: "UG", popular: false, students: "500+", rating: 4.5, description: "Bachelor of Veterinary Science and Animal Husbandry" },
    { slug: "bsc-agriculture", name: "B.Sc. Agriculture", category: "Science", duration: "4 Years", type: "UG", popular: false, students: "900+", rating: 4.4, description: "Bachelor of Science in Agriculture" },
    { slug: "bsc-forestry", name: "B.Sc. Forestry", category: "Science", duration: "4 Years", type: "UG", popular: false, students: "300+", rating: 4.3, description: "Bachelor of Science in Forestry" },
    { slug: "bsc-horticulture", name: "B.Sc. Horticulture", category: "Science", duration: "4 Years", type: "UG", popular: false, students: "400+", rating: 4.3, description: "Bachelor of Science in Horticulture" },
    { slug: "bfsc", name: "B.F.Sc.", category: "Science", duration: "4 Years", type: "UG", popular: false, students: "250+", rating: 4.2, description: "Bachelor of Fisheries Science" },
    { slug: "bsc-sericulture", name: "B.Sc. Sericulture", category: "Science", duration: "3 Years", type: "UG", popular: false, students: "150+", rating: 4.1, description: "Bachelor of Science in Sericulture" },

    // Para-Medical & Allied Health
    { slug: "b-pharm", name: "B.Pharm", category: "Medical", duration: "4 Years", type: "UG", popular: true, students: "1,500+", rating: 4.7, description: "Bachelor of Pharmacy" },
    { slug: "bpt", name: "BPT", category: "Medical", duration: "4.5 Years", type: "UG", popular: true, students: "1,000+", rating: 4.6, description: "Bachelor of Physiotherapy" },
    { slug: "bot", name: "BOT", category: "Medical", duration: "4.5 Years", type: "UG", popular: false, students: "400+", rating: 4.5, description: "Bachelor of Occupational Therapy" },
    { slug: "bsc-mlt", name: "B.Sc. MLT", category: "Medical", duration: "3 Years", type: "UG", popular: true, students: "800+", rating: 4.5, description: "Bachelor of Science in Medical Laboratory Technology" },
    { slug: "bsc-perfusion", name: "B.Sc. Perfusion Technology", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "200+", rating: 4.4, description: "Bachelor of Science in Perfusion Technology" },
    { slug: "bsc-cardiac-care", name: "B.Sc. Cardiac Care", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "300+", rating: 4.4, description: "Bachelor of Science in Cardiac Care Technology" },
    { slug: "bsc-renal-dialysis", name: "B.Sc. Renal Dialysis", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "250+", rating: 4.3, description: "Bachelor of Science in Renal Dialysis Technology" },
    { slug: "bsc-radiotherapy", name: "B.Sc. Radiotherapy", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "300+", rating: 4.4, description: "Bachelor of Science in Radiotherapy" },
    { slug: "bsc-anaesthesia", name: "B.Sc. Anaesthesia", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "350+", rating: 4.4, description: "Bachelor of Science in Anaesthesia Technology" },
    { slug: "bsc-optometry", name: "B.Sc. Optometry", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "400+", rating: 4.3, description: "Bachelor of Science in Optometry" },
    { slug: "bsc-respiratory-care", name: "B.Sc. Respiratory Care", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "200+", rating: 4.3, description: "Bachelor of Science in Respiratory Care Technology" },
    { slug: "bsc-imaging-tech", name: "B.Sc. Imaging Technology", category: "Medical", duration: "3 Years", type: "UG", popular: false, students: "350+", rating: 4.4, description: "Bachelor of Science in Medical Imaging Technology" },

    // ==================== NURSING ====================
    { slug: "anm", name: "ANM", category: "Medical", duration: "2 Years", type: "Diploma", popular: true, students: "1,200+", rating: 4.5, description: "Auxiliary Nurse Midwife" },
    { slug: "dgnm", name: "DGNM", category: "Medical", duration: "3 Years", type: "Diploma", popular: true, students: "1,500+", rating: 4.6, description: "Diploma in General Nursing and Midwifery" },
    { slug: "bsc-nursing", name: "B.Sc. Nursing", category: "Medical", duration: "4 Years", type: "UG", popular: true, students: "3,000+", rating: 4.8, description: "Bachelor of Science in Nursing" },
    { slug: "pc-bsc-nursing", name: "Post Basic B.Sc. Nursing", category: "Medical", duration: "2 Years", type: "UG", popular: false, students: "800+", rating: 4.6, description: "Post Basic Bachelor of Science in Nursing" },
    { slug: "msc-medical-surgical", name: "M.Sc. Medical Surgical Nursing", category: "Medical", duration: "2 Years", type: "PG", popular: false, students: "300+", rating: 4.7, description: "Master of Science in Medical Surgical Nursing" },
    { slug: "msc-paediatric", name: "M.Sc. Paediatric Nursing", category: "Medical", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.6, description: "Master of Science in Paediatric Nursing" },
    { slug: "msc-psychiatric", name: "M.Sc. Psychiatric Nursing", category: "Medical", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.6, description: "Master of Science in Psychiatric Nursing" },
    { slug: "msc-community-health", name: "M.Sc. Community Health Nursing", category: "Medical", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.6, description: "Master of Science in Community Health Nursing" },
    { slug: "msc-obs-gyn", name: "M.Sc. Obstetrics & Gynaecological Nursing", category: "Medical", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.6, description: "Master of Science in Obstetrics and Gynaecological Nursing" },

    // ==================== ENGINEERING (B.E. / B.Tech) ====================

    // Core Engineering
    { slug: "btech-civil", name: "B.Tech Civil Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "2,500+", rating: 4.6, description: "Bachelor of Technology in Civil Engineering" },
    { slug: "btech-mechanical", name: "B.Tech Mechanical Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "3,000+", rating: 4.7, description: "Bachelor of Technology in Mechanical Engineering" },
    { slug: "btech-eee", name: "B.Tech Electrical & Electronics", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "2,200+", rating: 4.6, description: "Bachelor of Technology in Electrical and Electronics Engineering" },
    { slug: "btech-ece", name: "B.Tech Electronics & Communication", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "2,800+", rating: 4.7, description: "Bachelor of Technology in Electronics and Communication Engineering" },

    // IT & Software
    { slug: "btech-cse", name: "B.Tech Computer Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "4,200+", rating: 4.9, description: "Bachelor of Technology in Computer Science Engineering" },
    { slug: "btech-it", name: "B.Tech Information Technology", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "2,500+", rating: 4.7, description: "Bachelor of Technology in Information Technology" },
    { slug: "btech-software", name: "B.Tech Software Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "1,200+", rating: 4.6, description: "Bachelor of Technology in Software Engineering" },
    { slug: "btech-ai", name: "B.Tech AI & Data Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "1,800+", rating: 4.8, description: "Bachelor of Technology in Artificial Intelligence and Data Science" },

    // Specialized Engineering
    { slug: "btech-aeronautical", name: "B.Tech Aeronautical Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "800+", rating: 4.6, description: "Bachelor of Technology in Aeronautical Engineering" },
    { slug: "btech-aerospace", name: "B.Tech Aerospace Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "600+", rating: 4.6, description: "Bachelor of Technology in Aerospace Engineering" },
    { slug: "btech-automobile", name: "B.Tech Automobile Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "1,000+", rating: 4.5, description: "Bachelor of Technology in Automobile Engineering" },
    { slug: "btech-marine", name: "B.Tech Marine Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "400+", rating: 4.5, description: "Bachelor of Technology in Marine Engineering" },
    { slug: "btech-biomedical", name: "B.Tech Bio-Medical Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "700+", rating: 4.6, description: "Bachelor of Technology in Bio-Medical Engineering" },
    { slug: "btech-biotechnology", name: "B.Tech Bio-Technology", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "800+", rating: 4.5, description: "Bachelor of Technology in Bio-Technology" },
    { slug: "btech-medical-electronics", name: "B.Tech Medical Electronics", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "500+", rating: 4.5, description: "Bachelor of Technology in Medical Electronics" },
    { slug: "btech-chemical", name: "B.Tech Chemical Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "900+", rating: 4.5, description: "Bachelor of Technology in Chemical Engineering" },
    { slug: "btech-petroleum", name: "B.Tech Petroleum Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "400+", rating: 4.5, description: "Bachelor of Technology in Petroleum Engineering" },
    { slug: "btech-polymer", name: "B.Tech Polymer Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "300+", rating: 4.4, description: "Bachelor of Technology in Polymer Engineering" },
    { slug: "btech-material-science", name: "B.Tech Material Science", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "350+", rating: 4.4, description: "Bachelor of Technology in Material Science" },
    { slug: "btech-metallurgical", name: "B.Tech Metallurgical Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "500+", rating: 4.4, description: "Bachelor of Technology in Metallurgical Engineering" },
    { slug: "btech-mining", name: "B.Tech Mining Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "400+", rating: 4.4, description: "Bachelor of Technology in Mining Engineering" },
    { slug: "btech-mechatronics", name: "B.Tech Mechatronics", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "800+", rating: 4.6, description: "Bachelor of Technology in Mechatronics Engineering" },
    { slug: "btech-robotics", name: "B.Tech Robotics", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "600+", rating: 4.7, description: "Bachelor of Technology in Robotics Engineering" },
    { slug: "btech-nanotechnology", name: "B.Tech Nanotechnology", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "300+", rating: 4.5, description: "Bachelor of Technology in Nanotechnology" },
    { slug: "btech-production", name: "B.Tech Production Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "700+", rating: 4.5, description: "Bachelor of Technology in Production Engineering" },
    { slug: "btech-industrial", name: "B.Tech Industrial Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "600+", rating: 4.5, description: "Bachelor of Technology in Industrial Engineering and Management" },
    { slug: "btech-mech-automation", name: "B.Tech Mechanical & Automation", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "700+", rating: 4.6, description: "Bachelor of Technology in Mechanical and Automation Engineering" },

    // Architecture & Design
    { slug: "b-arch", name: "B.Arch", category: "Engineering", duration: "5 Years", type: "UG", popular: false, students: "1,000+", rating: 4.6, description: "Bachelor of Architecture" },
    { slug: "interior-design", name: "Interior Design", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "500+", rating: 4.4, description: "Bachelor of Interior Design" },

    // Specific Industries
    { slug: "textile-chemistry", name: "Textile Chemistry", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "300+", rating: 4.3, description: "Bachelor of Technology in Textile Chemistry" },
    { slug: "textile-technology", name: "Textile Technology", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "400+", rating: 4.3, description: "Bachelor of Technology in Textile Technology" },
    { slug: "fashion-technology", name: "Fashion Technology", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "600+", rating: 4.4, description: "Bachelor of Technology in Fashion Technology" },
    { slug: "food-technology", name: "Food Technology", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "700+", rating: 4.4, description: "Bachelor of Technology in Food Technology" },
    { slug: "leather-engineering", name: "Leather Engineering", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "200+", rating: 4.2, description: "Bachelor of Technology in Leather Engineering" },
    { slug: "printing-technology", name: "Printing Technology", category: "Engineering", duration: "4 Years", type: "UG", popular: false, students: "250+", rating: 4.3, description: "Bachelor of Technology in Printing Technology" },

    // ==================== MANAGEMENT & COMPUTER APPLICATIONS ====================
    { slug: "bba", name: "BBA", category: "Commerce", duration: "3 Years", type: "UG", popular: false, students: "1,800+", rating: 4.5, description: "Bachelor of Business Administration" },
    { slug: "bbm", name: "BBM", category: "Commerce", duration: "3 Years", type: "UG", popular: false, students: "1,200+", rating: 4.4, description: "Bachelor of Business Management" },
    { slug: "bcom", name: "B.Com", category: "Commerce", duration: "3 Years", type: "UG", popular: false, students: "2,100+", rating: 4.5, description: "Bachelor of Commerce" },
    { slug: "bca", name: "BCA", category: "Commerce", duration: "3 Years", type: "UG", popular: true, students: "1,500+", rating: 4.6, description: "Bachelor of Computer Applications" },
    { slug: "mba", name: "MBA", category: "Commerce", duration: "2 Years", type: "PG", popular: true, students: "3,500+", rating: 4.9, description: "Master of Business Administration" },
    { slug: "mba-marketing", name: "MBA Marketing", category: "Commerce", duration: "2 Years", type: "PG", popular: false, students: "800+", rating: 4.7, description: "MBA in Marketing" },
    { slug: "mba-finance", name: "MBA Finance", category: "Commerce", duration: "2 Years", type: "PG", popular: false, students: "900+", rating: 4.8, description: "MBA in Finance" },
    { slug: "mba-hr", name: "MBA HR", category: "Commerce", duration: "2 Years", type: "PG", popular: false, students: "600+", rating: 4.6, description: "MBA in Human Resources" },
    { slug: "mba-systems", name: "MBA Systems", category: "Commerce", duration: "2 Years", type: "PG", popular: false, students: "500+", rating: 4.6, description: "MBA in Systems" },
    { slug: "mba-international", name: "MBA International Business", category: "Commerce", duration: "2 Years", type: "PG", popular: false, students: "400+", rating: 4.7, description: "MBA in International Business" },
    { slug: "mba-tourism", name: "MBA Tourism & Hotel Management", category: "Commerce", duration: "2 Years", type: "PG", popular: false, students: "350+", rating: 4.5, description: "MBA in Tourism and Hotel Management" },
    { slug: "mca", name: "MCA", category: "Commerce", duration: "2 Years", type: "PG", popular: true, students: "1,600+", rating: 4.7, description: "Master of Computer Applications" },

    // ==================== POSTGRADUATE ENGINEERING (M.Tech) ====================

    // Electronics & Communication
    { slug: "mtech-digital-electronics", name: "M.Tech Digital Electronics", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "300+", rating: 4.6, description: "Master of Technology in Digital Electronics" },
    { slug: "mtech-communication", name: "M.Tech Communication", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "350+", rating: 4.6, description: "Master of Technology in Communication Engineering" },
    { slug: "mtech-vlsi", name: "M.Tech VLSI Design", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "400+", rating: 4.7, description: "Master of Technology in VLSI Design" },
    { slug: "mtech-telecom", name: "M.Tech Telecommunication Networks", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.6, description: "Master of Technology in Telecommunication Networks" },
    { slug: "mtech-microelectronics", name: "M.Tech Microelectronics", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.6, description: "Master of Technology in Microelectronics" },

    // Computer Science
    { slug: "mtech-it", name: "M.Tech Information Technology", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "400+", rating: 4.7, description: "Master of Technology in Information Technology" },
    { slug: "mtech-network", name: "M.Tech Network Engineering", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "300+", rating: 4.6, description: "Master of Technology in Network Engineering" },
    { slug: "mtech-software-eng", name: "M.Tech Software Engineering", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "350+", rating: 4.7, description: "Master of Technology in Software Engineering" },
    { slug: "mtech-info-security", name: "M.Tech Information Security", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.7, description: "Master of Technology in Information Security" },
    { slug: "mtech-knowledge-eng", name: "M.Tech Knowledge Engineering", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "150+", rating: 4.6, description: "Master of Technology in Knowledge Engineering" },

    // Mechanical & Power
    { slug: "mtech-manufacturing", name: "M.Tech Manufacturing", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "300+", rating: 4.6, description: "Master of Technology in Manufacturing Engineering" },
    { slug: "mtech-robotics-pg", name: "M.Tech Robotics", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.7, description: "Master of Technology in Robotics" },
    { slug: "mtech-control-systems", name: "M.Tech Control Systems", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.6, description: "Master of Technology in Control Systems" },
    { slug: "mtech-power-systems", name: "M.Tech Power Systems", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "350+", rating: 4.6, description: "Master of Technology in Power Systems" },
    { slug: "mtech-power-electronics", name: "M.Tech Power Electronics & Drives", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "300+", rating: 4.6, description: "Master of Technology in Power Electronics and Drives" },
    { slug: "mtech-energy", name: "M.Tech Energy Management", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.5, description: "Master of Technology in Energy Management" },

    // Civil & Environment
    { slug: "mtech-construction", name: "M.Tech Construction Management", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.5, description: "Master of Technology in Construction Management" },
    { slug: "mtech-geotechnical", name: "M.Tech Geo Technical", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.5, description: "Master of Technology in Geo Technical Engineering" },
    { slug: "mtech-water-resources", name: "M.Tech Water Resources", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "200+", rating: 4.5, description: "Master of Technology in Water Resources Engineering" },
    { slug: "mtech-remote-sensing", name: "M.Tech Remote Sensing & GIS", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "150+", rating: 4.6, description: "Master of Technology in Remote Sensing and GIS" },
    { slug: "mtech-environmental", name: "M.Tech Environmental Engineering", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "250+", rating: 4.6, description: "Master of Technology in Environmental Engineering" },

    // Advanced Sciences
    { slug: "mtech-astronomy", name: "M.Tech Astronomy & Space Engineering", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "100+", rating: 4.7, description: "Master of Technology in Astronomy and Space Engineering" },
    { slug: "mtech-genetic", name: "M.Tech Genetic Engineering", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "150+", rating: 4.6, description: "Master of Technology in Genetic Engineering" },
    { slug: "mtech-nano", name: "M.Tech Nanotechnology", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "120+", rating: 4.7, description: "Master of Technology in Nanotechnology" },
    { slug: "mtech-industrial-biotech", name: "M.Tech Industrial Biotechnology", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "150+", rating: 4.6, description: "Master of Technology in Industrial Biotechnology" },

    // General M.Tech
    { slug: "mtech", name: "M.Tech", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "950+", rating: 4.7, description: "Master of Technology" },

    // ==================== LAW ====================
    { slug: "llb", name: "LLB", category: "Law", duration: "3 Years", type: "UG", popular: false, students: "1,000+", rating: 4.6, description: "Bachelor of Laws" },
    { slug: "ba-llb", name: "BA LLB", category: "Law", duration: "5 Years", type: "UG", popular: true, students: "1,400+", rating: 4.8, description: "Bachelor of Arts and Bachelor of Laws" },
    { slug: "bcom-llb", name: "B.Com LLB", category: "Law", duration: "5 Years", type: "UG", popular: false, students: "800+", rating: 4.7, description: "Bachelor of Commerce and Bachelor of Laws" },
    { slug: "llm", name: "LLM", category: "Law", duration: "2 Years", type: "PG", popular: false, students: "600+", rating: 4.6, description: "Master of Laws" },

    // ==================== ARTS & SCIENCE ====================
    { slug: "ba", name: "BA", category: "Arts", duration: "3 Years", type: "UG", popular: false, students: "1,800+", rating: 4.4, description: "Bachelor of Arts" },
    { slug: "bsc-physics", name: "B.Sc Physics", category: "Science", duration: "3 Years", type: "UG", popular: false, students: "900+", rating: 4.5, description: "Bachelor of Science in Physics" },
    { slug: "bsc-chemistry", name: "B.Sc Chemistry", category: "Science", duration: "3 Years", type: "UG", popular: false, students: "800+", rating: 4.5, description: "Bachelor of Science in Chemistry" },
    { slug: "bsc-mathematics", name: "B.Sc Mathematics", category: "Science", duration: "3 Years", type: "UG", popular: false, students: "700+", rating: 4.5, description: "Bachelor of Science in Mathematics" },
    { slug: "bsc-biology", name: "B.Sc Biology", category: "Science", duration: "3 Years", type: "UG", popular: false, students: "600+", rating: 4.4, description: "Bachelor of Science in Biology" },
]

// Helper functions
export const getCoursesByCategory = (category: string) => {
    if (category === "All") return allCourses
    return allCourses.filter(course => course.category === category)
}

export const getCoursesByType = (type: "UG" | "PG" | "Diploma") => {
    return allCourses.filter(course => course.type === type)
}

export const getPopularCourses = () => {
    return allCourses.filter(course => course.popular)
}

export const searchCourses = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return allCourses.filter(course =>
        course.name.toLowerCase().includes(lowerQuery) ||
        course.category.toLowerCase().includes(lowerQuery) ||
        course.description?.toLowerCase().includes(lowerQuery)
    )
}

export const categories = ["All", "Medical", "Engineering", "Commerce", "Science", "Arts", "Law"]
