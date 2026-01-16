// College data extracted from kvguidance.com
// States: Tamil Nadu, Karnataka, Kerala

export interface College {
    name: string
    rating: number
    state: string
    city: string
    type: "engineering" | "arts" | "medical" | "dental" | "nursing" | "pharmacy" | "physiotherapy" | "mba" | "homoeopathy" | "ayurveda" | "unani" | "naturopathy" | "health"
}

export const allColleges: College[] = [
    // =====================================================================================
    // TAMIL NADU - ENGINEERING COLLEGES
    // =====================================================================================
    { name: "PSG College of Technology", rating: 4.8, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Coimbatore Institute of Technology", rating: 4.7, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Anna University - CEG Campus", rating: 4.9, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "SSN College of Engineering", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Thiagarajar College of Engineering", rating: 4.6, state: "Tamil Nadu", city: "Madurai", type: "engineering" },
    { name: "VIT University", rating: 4.8, state: "Tamil Nadu", city: "Vellore", type: "engineering" },
    { name: "SRM Institute of Science and Technology", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Sathyabama Institute of Science and Technology", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Karunya Institute of Technology and Sciences", rating: 4.7, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Kumaraguru College of Technology", rating: 4.6, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Sri Sivasubramaniya Nadar College of Engineering", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Velammal Engineering College", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Rajalakshmi Engineering College", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Sri Sairam Engineering College", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Panimalar Engineering College", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "St. Joseph's College of Engineering", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Hindustan Institute of Technology and Science", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Easwari Engineering College", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Meenakshi Sundararajan Engineering College", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Chennai Institute of Technology", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Jeppiaar Engineering College", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Panimalar Institute of Technology", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "KCG College of Technology", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "B.S. Abdur Rahman Crescent Institute of Science and Technology", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Loyola-ICAM College of Engineering and Technology", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Jerusalem College of Engineering", rating: 4.1, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Bharath Institute of Higher Education and Research", rating: 4.3, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Saveetha Engineering College", rating: 4.3, state: "Tamil Nadu", city: "Chennai", type: "engineering" },
    { name: "Aarupadai Veedu Institute of Technology", rating: 4.3, state: "Tamil Nadu", city: "Kanchipuram", type: "engineering" },
    { name: "Sri Krishna College of Engineering and Technology", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "SNS College of Technology", rating: 4.6, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Karpagam College of Engineering", rating: 4.3, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Sri Ramakrishna Engineering College", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Hindusthan College of Engineering and Technology", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Park College of Engineering and Technology", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Sri Shakthi Institute of Engineering and Technology", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Nehru Institute of Engineering and Technology", rating: 4.3, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Dr. Mahalingam College of Engineering and Technology", rating: 4.4, state: "Tamil Nadu", city: "Pollachi", type: "engineering" },
    { name: "Dr. N.G.P. Institute of Technology", rating: 4.3, state: "Tamil Nadu", city: "Coimbatore", type: "engineering" },
    { name: "Bannari Amman Institute of Technology", rating: 4.5, state: "Tamil Nadu", city: "Erode", type: "engineering" },
    { name: "Kongu Engineering College", rating: 4.6, state: "Tamil Nadu", city: "Erode", type: "engineering" },
    { name: "Nandha Engineering College", rating: 4.2, state: "Tamil Nadu", city: "Erode", type: "engineering" },
    { name: "Saranathan College of Engineering", rating: 4.5, state: "Tamil Nadu", city: "Trichy", type: "engineering" },
    { name: "National Institute of Technology, Tiruchirappalli", rating: 4.8, state: "Tamil Nadu", city: "Trichy", type: "engineering" },
    { name: "K. Ramakrishnan College of Engineering", rating: 4.3, state: "Tamil Nadu", city: "Trichy", type: "engineering" },
    { name: "Sona College of Technology", rating: 4.6, state: "Tamil Nadu", city: "Salem", type: "engineering" },
    { name: "Vinayaka Mission's Kirupananda Variyar Engineering College", rating: 4.3, state: "Tamil Nadu", city: "Salem", type: "engineering" },
    { name: "Knowledge Institute of Technology", rating: 4.4, state: "Tamil Nadu", city: "Salem", type: "engineering" },
    { name: "KSR College of Engineering", rating: 4.3, state: "Tamil Nadu", city: "Namakkal", type: "engineering" },
    { name: "Mepco Schlenk Engineering College", rating: 4.6, state: "Tamil Nadu", city: "Sivakasi", type: "engineering" },
    { name: "Sethu Institute of Technology", rating: 4.3, state: "Tamil Nadu", city: "Kariapatti", type: "engineering" },
    { name: "Kalasalingam Academy of Research and Education", rating: 4.5, state: "Tamil Nadu", city: "Krishnankoil", type: "engineering" },
    { name: "Kamaraj College of Engineering and Technology", rating: 4.2, state: "Tamil Nadu", city: "Virudhunagar", type: "engineering" },
    { name: "Adhiyamaan College of Engineering", rating: 4.4, state: "Tamil Nadu", city: "Hosur", type: "engineering" },
    { name: "C. Abdul Hakeem College of Engineering and Technology", rating: 4.2, state: "Tamil Nadu", city: "Vellore", type: "engineering" },
    { name: "Annamalai University - Faculty of Engineering", rating: 4.4, state: "Tamil Nadu", city: "Chidambaram", type: "engineering" },
    { name: "Alagappa Chettiar Government College of Engineering and Technology", rating: 4.3, state: "Tamil Nadu", city: "Karaikudi", type: "engineering" },
    { name: "Pondicherry Engineering College", rating: 4.5, state: "Tamil Nadu", city: "Puducherry", type: "engineering" },
    { name: "Manakula Vinayagar Institute of Technology", rating: 4.3, state: "Tamil Nadu", city: "Puducherry", type: "engineering" },

    // =====================================================================================
    // TAMIL NADU - MEDICAL COLLEGES (MBBS)
    // =====================================================================================
    { name: "Madras Medical College", rating: 4.9, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "Stanley Medical College", rating: 4.8, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "Kilpauk Medical College", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "Government Medical College, Coimbatore", rating: 4.6, state: "Tamil Nadu", city: "Coimbatore", type: "medical" },
    { name: "PSG Institute of Medical Sciences and Research", rating: 4.8, state: "Tamil Nadu", city: "Coimbatore", type: "medical" },
    { name: "Sri Ramachandra Institute of Higher Education and Research", rating: 4.9, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "SRM Medical College Hospital and Research Centre", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "Saveetha Medical College", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "Sree Balaji Medical College and Hospital", rating: 4.3, state: "Tamil Nadu", city: "Chennai", type: "medical" },
    { name: "Meenakshi Medical College Hospital and Research Institute", rating: 4.4, state: "Tamil Nadu", city: "Kanchipuram", type: "medical" },
    { name: "Chettinad Hospital and Research Institute", rating: 4.6, state: "Tamil Nadu", city: "Kelambakkam", type: "medical" },
    { name: "Karpagam Faculty of Medical Sciences and Research", rating: 4.3, state: "Tamil Nadu", city: "Coimbatore", type: "medical" },
    { name: "Government Mohan Kumaramangalam Medical College", rating: 4.5, state: "Tamil Nadu", city: "Salem", type: "medical" },
    { name: "K.A.P. Viswanatham Government Medical College", rating: 4.5, state: "Tamil Nadu", city: "Trichy", type: "medical" },
    { name: "Thanjavur Medical College", rating: 4.6, state: "Tamil Nadu", city: "Thanjavur", type: "medical" },
    { name: "Madurai Medical College", rating: 4.7, state: "Tamil Nadu", city: "Madurai", type: "medical" },
    { name: "Tirunelveli Medical College", rating: 4.6, state: "Tamil Nadu", city: "Tirunelveli", type: "medical" },
    { name: "Chengalpattu Medical College", rating: 4.4, state: "Tamil Nadu", city: "Chengalpattu", type: "medical" },

    // =====================================================================================
    // TAMIL NADU - DENTAL COLLEGES (BDS)
    // =====================================================================================
    { name: "Tamil Nadu Government Dental College and Hospital", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "dental" },
    { name: "Ragas Dental College and Hospital", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "dental" },
    { name: "Saveetha Dental College", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "dental" },
    { name: "SRM Dental College", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "dental" },
    { name: "Meenakshi Ammal Dental College and Hospital", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "dental" },
    { name: "Adhiparasakthi Dental College and Hospital", rating: 4.3, state: "Tamil Nadu", city: "Melmaruvathur", type: "dental" },
    { name: "Chettinad Dental College and Research Institute", rating: 4.5, state: "Tamil Nadu", city: "Kelambakkam", type: "dental" },
    { name: "Thai Moogambigai Dental College and Hospital", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "dental" },
    { name: "Vivekanandha Dental College for Women", rating: 4.3, state: "Tamil Nadu", city: "Namakkal", type: "dental" },
    { name: "KSR Institute of Dental Science and Research", rating: 4.2, state: "Tamil Nadu", city: "Namakkal", type: "dental" },
    { name: "Sri Ramakrishna Dental College and Hospital", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "dental" },
    { name: "PSG College of Dental Sciences", rating: 4.6, state: "Tamil Nadu", city: "Coimbatore", type: "dental" },
    { name: "Karpaga Vinayaga Institute of Dental Sciences", rating: 4.3, state: "Tamil Nadu", city: "Chengalpattu", type: "dental" },
    { name: "Indira Gandhi Institute of Dental Sciences", rating: 4.4, state: "Tamil Nadu", city: "Puducherry", type: "dental" },
    { name: "Mahatma Gandhi Post Graduate Institute of Dental Sciences", rating: 4.5, state: "Tamil Nadu", city: "Puducherry", type: "dental" },
    { name: "Best Dental Science College", rating: 4.2, state: "Tamil Nadu", city: "Madurai", type: "dental" },

    // =====================================================================================
    // TAMIL NADU - NURSING COLLEGES
    // =====================================================================================
    { name: "Christian Medical College - College of Nursing", rating: 4.8, state: "Tamil Nadu", city: "Vellore", type: "nursing" },
    { name: "Madras Medical College - College of Nursing", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "Saveetha College of Nursing", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "SRM College of Nursing", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "Apollo College of Nursing", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "Sri Ramachandra College of Nursing", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "Billroth College of Nursing", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "Dr. MGR Janaki College of Arts and Science for Women - Nursing", rating: 4.3, state: "Tamil Nadu", city: "Chennai", type: "nursing" },
    { name: "Meenakshi College of Nursing", rating: 4.4, state: "Tamil Nadu", city: "Kanchipuram", type: "nursing" },
    { name: "Chettinad College of Nursing", rating: 4.5, state: "Tamil Nadu", city: "Kelambakkam", type: "nursing" },
    { name: "PSG College of Nursing", rating: 4.7, state: "Tamil Nadu", city: "Coimbatore", type: "nursing" },
    { name: "Karpagam College of Nursing", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "nursing" },
    { name: "Sri Ramakrishna College of Nursing", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "nursing" },
    { name: "Vinayaka Mission's College of Nursing", rating: 4.3, state: "Tamil Nadu", city: "Salem", type: "nursing" },
    { name: "Annamalai University - College of Nursing", rating: 4.4, state: "Tamil Nadu", city: "Chidambaram", type: "nursing" },
    { name: "Madurai Medical College - College of Nursing", rating: 4.6, state: "Tamil Nadu", city: "Madurai", type: "nursing" },

    // =====================================================================================
    // TAMIL NADU - PHARMACY COLLEGES
    // =====================================================================================
    { name: "J.S.S. College of Pharmacy", rating: 4.7, state: "Tamil Nadu", city: "Ooty", type: "pharmacy" },
    { name: "Madras Medical College - College of Pharmacy", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "pharmacy" },
    { name: "PSG College of Pharmacy", rating: 4.7, state: "Tamil Nadu", city: "Coimbatore", type: "pharmacy" },
    { name: "Sri Ramachandra College of Pharmacy", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "pharmacy" },
    { name: "SRM College of Pharmacy", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "pharmacy" },
    { name: "Nandha College of Pharmacy", rating: 4.4, state: "Tamil Nadu", city: "Erode", type: "pharmacy" },
    { name: "College of Pharmacy, Madurai Medical College", rating: 4.5, state: "Tamil Nadu", city: "Madurai", type: "pharmacy" },
    { name: "K.M. College of Pharmacy", rating: 4.3, state: "Tamil Nadu", city: "Madurai", type: "pharmacy" },
    { name: "Annamalai University - Rajah Muthiah Medical College - Pharmacy", rating: 4.4, state: "Tamil Nadu", city: "Chidambaram", type: "pharmacy" },
    { name: "Vinayaka Mission's College of Pharmacy", rating: 4.3, state: "Tamil Nadu", city: "Salem", type: "pharmacy" },
    { name: "C.L. Baid Metha College of Pharmacy", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "pharmacy" },
    { name: "Arulmigu Kalasalingam College of Pharmacy", rating: 4.4, state: "Tamil Nadu", city: "Krishnankoil", type: "pharmacy" },
    { name: "Swamy Vivekanandha College of Pharmacy", rating: 4.3, state: "Tamil Nadu", city: "Namakkal", type: "pharmacy" },
    { name: "Karpagam College of Pharmacy", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "pharmacy" },
    { name: "Sri Ramakrishna College of Pharmacy", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "pharmacy" },

    // =====================================================================================
    // TAMIL NADU - PHYSIOTHERAPY COLLEGES
    // =====================================================================================
    { name: "Christian Medical College - College of Physiotherapy", rating: 4.8, state: "Tamil Nadu", city: "Vellore", type: "physiotherapy" },
    { name: "SRM College of Physiotherapy", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "physiotherapy" },
    { name: "Saveetha College of Physiotherapy", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "physiotherapy" },
    { name: "Sri Ramachandra College of Physiotherapy", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "physiotherapy" },
    { name: "Chettinad College of Physiotherapy", rating: 4.5, state: "Tamil Nadu", city: "Kelambakkam", type: "physiotherapy" },
    { name: "PSG College of Physiotherapy", rating: 4.7, state: "Tamil Nadu", city: "Coimbatore", type: "physiotherapy" },
    { name: "Karpagam College of Physiotherapy", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "physiotherapy" },
    { name: "PPG College of Physiotherapy", rating: 4.5, state: "Tamil Nadu", city: "Coimbatore", type: "physiotherapy" },
    { name: "Vinayaka Mission's College of Physiotherapy", rating: 4.3, state: "Tamil Nadu", city: "Salem", type: "physiotherapy" },
    { name: "RVS College of Physiotherapy", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "physiotherapy" },
    { name: "Sree Balaji College of Physiotherapy", rating: 4.3, state: "Tamil Nadu", city: "Chennai", type: "physiotherapy" },
    { name: "Meenakshi College of Physiotherapy", rating: 4.4, state: "Tamil Nadu", city: "Chennai", type: "physiotherapy" },

    // =====================================================================================
    // TAMIL NADU - MBA COLLEGES
    // =====================================================================================
    { name: "Indian Institute of Management Tiruchirappalli", rating: 4.9, state: "Tamil Nadu", city: "Trichy", type: "mba" },
    { name: "Great Lakes Institute of Management", rating: 4.8, state: "Tamil Nadu", city: "Chennai", type: "mba" },
    { name: "Loyola Institute of Business Administration", rating: 4.7, state: "Tamil Nadu", city: "Chennai", type: "mba" },
    { name: "PSG Institute of Management", rating: 4.6, state: "Tamil Nadu", city: "Coimbatore", type: "mba" },
    { name: "Madras Christian College - Department of Management Studies", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "mba" },
    { name: "Anna University - Department of Management Studies", rating: 4.6, state: "Tamil Nadu", city: "Chennai", type: "mba" },
    { name: "SRM Institute of Science and Technology - School of Management", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "mba" },
    { name: "VIT Business School", rating: 4.6, state: "Tamil Nadu", city: "Vellore", type: "mba" },
    { name: "Bharathidasan Institute of Management", rating: 4.5, state: "Tamil Nadu", city: "Trichy", type: "mba" },
    { name: "Karunya School of Management", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "mba" },
    { name: "Amrita School of Business", rating: 4.6, state: "Tamil Nadu", city: "Coimbatore", type: "mba" },
    { name: "Hindusthan College of Arts and Science - MBA", rating: 4.3, state: "Tamil Nadu", city: "Coimbatore", type: "mba" },
    { name: "SNS College of Technology - MBA", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "mba" },
    { name: "Sri Krishna College of Engineering and Technology - MBA", rating: 4.4, state: "Tamil Nadu", city: "Coimbatore", type: "mba" },

    // =====================================================================================
    // TAMIL NADU - HOMOEOPATHY COLLEGES
    // =====================================================================================
    { name: "Dr. Hahnemann Homoeopathic Medical College and Hospital", rating: 4.5, state: "Tamil Nadu", city: "Chennai", type: "homoeopathy" },
    { name: "Vinayaka Mission's Homoeopathic Medical College and Hospital", rating: 4.4, state: "Tamil Nadu", city: "Salem", type: "homoeopathy" },
    { name: "Sarada Krishna Homoeopathic Medical College", rating: 4.3, state: "Tamil Nadu", city: "Kulasekharam", type: "homoeopathy" },
    { name: "White Memorial Homoeo Medical College", rating: 4.2, state: "Tamil Nadu", city: "Attoor", type: "homoeopathy" },
    { name: "Swamy Vivekanandha Homoeopathic Medical College", rating: 4.3, state: "Tamil Nadu", city: "Namakkal", type: "homoeopathy" },
    { name: "Nehru Homoeopathic Medical College", rating: 4.2, state: "Tamil Nadu", city: "Delhi", type: "homoeopathy" },
    { name: "Santhigiri Siddha Medical College", rating: 4.1, state: "Tamil Nadu", city: "Thiruvananthapuram", type: "homoeopathy" },
    { name: "Vinayaka Mission's Kirupananda Variyar Homoeopathic Medical College", rating: 4.3, state: "Tamil Nadu", city: "Salem", type: "homoeopathy" },

    // =====================================================================================
    // KARNATAKA - ENGINEERING COLLEGES
    // =====================================================================================
    { name: "Indian Institute of Science", rating: 5.0, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "National Institute of Technology Karnataka", rating: 4.8, state: "Karnataka", city: "Surathkal", type: "engineering" },
    { name: "BMS College of Engineering", rating: 4.7, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "RV College of Engineering", rating: 4.8, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "PES University", rating: 4.7, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "MS Ramaiah Institute of Technology", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Dayananda Sagar College of Engineering", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "BMS Institute of Technology and Management", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Manipal Institute of Technology", rating: 4.8, state: "Karnataka", city: "Manipal", type: "engineering" },
    { name: "NMAM Institute of Technology", rating: 4.5, state: "Karnataka", city: "Nitte", type: "engineering" },
    { name: "NIE Institute of Technology", rating: 4.4, state: "Karnataka", city: "Mysore", type: "engineering" },
    { name: "JSS Science and Technology University", rating: 4.6, state: "Karnataka", city: "Mysore", type: "engineering" },
    { name: "Ramaiah Institute of Technology", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Sir M. Visvesvaraya Institute of Technology", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "New Horizon College of Engineering", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "CMR Institute of Technology", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Reva University", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Nitte Meenakshi Institute of Technology", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Acharya Institute of Technology", rating: 4.2, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "The Oxford College of Engineering", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Bangalore Institute of Technology", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "R.V. College of Engineering", rating: 4.8, state: "Karnataka", city: "Bangalore", type: "engineering" },
    { name: "Siddaganga Institute of Technology", rating: 4.6, state: "Karnataka", city: "Tumkur", type: "engineering" },
    { name: "KLE Technological University", rating: 4.5, state: "Karnataka", city: "Hubli", type: "engineering" },
    { name: "SDM College of Engineering and Technology", rating: 4.4, state: "Karnataka", city: "Dharwad", type: "engineering" },
    { name: "Canara Engineering College", rating: 4.3, state: "Karnataka", city: "Mangalore", type: "engineering" },
    { name: "St. Joseph Engineering College", rating: 4.4, state: "Karnataka", city: "Mangalore", type: "engineering" },
    { name: "Sahyadri College of Engineering and Management", rating: 4.3, state: "Karnataka", city: "Mangalore", type: "engineering" },
    { name: "Alva's Institute of Engineering and Technology", rating: 4.2, state: "Karnataka", city: "Moodbidri", type: "engineering" },
    { name: "Shri Madhwa Vadiraja Institute of Technology and Management", rating: 4.3, state: "Karnataka", city: "Udupi", type: "engineering" },

    // =====================================================================================
    // KARNATAKA - MEDICAL COLLEGES
    // =====================================================================================
    { name: "Bangalore Medical College and Research Institute", rating: 4.8, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "St. John's Medical College", rating: 4.9, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "Kasturba Medical College, Manipal", rating: 4.9, state: "Karnataka", city: "Manipal", type: "medical" },
    { name: "Kasturba Medical College, Mangalore", rating: 4.8, state: "Karnataka", city: "Mangalore", type: "medical" },
    { name: "JSS Medical College", rating: 4.7, state: "Karnataka", city: "Mysore", type: "medical" },
    { name: "Mysore Medical College and Research Institute", rating: 4.6, state: "Karnataka", city: "Mysore", type: "medical" },
    { name: "Kempegowda Institute of Medical Sciences", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "MS Ramaiah Medical College", rating: 4.7, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "Vydehi Institute of Medical Sciences and Research Centre", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "Father Muller Medical College", rating: 4.6, state: "Karnataka", city: "Mangalore", type: "medical" },
    { name: "AJ Institute of Medical Sciences", rating: 4.4, state: "Karnataka", city: "Mangalore", type: "medical" },
    { name: "Rajarajeswari Medical College and Hospital", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "Sapthagiri Institute of Medical Sciences and Research Centre", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "medical" },
    { name: "Sri Devaraj Urs Medical College", rating: 4.5, state: "Karnataka", city: "Kolar", type: "medical" },
    { name: "Shimoga Institute of Medical Sciences", rating: 4.3, state: "Karnataka", city: "Shimoga", type: "medical" },

    // =====================================================================================
    // KARNATAKA - DENTAL COLLEGES
    // =====================================================================================
    { name: "Government Dental College and Research Institute", rating: 4.7, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "Manipal College of Dental Sciences, Manipal", rating: 4.8, state: "Karnataka", city: "Manipal", type: "dental" },
    { name: "Manipal College of Dental Sciences, Mangalore", rating: 4.7, state: "Karnataka", city: "Mangalore", type: "dental" },
    { name: "JSS Dental College and Hospital", rating: 4.6, state: "Karnataka", city: "Mysore", type: "dental" },
    { name: "MS Ramaiah Dental College and Hospital", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "Dayananda Sagar College of Dental Sciences", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "AB Shetty Memorial Institute of Dental Sciences", rating: 4.5, state: "Karnataka", city: "Mangalore", type: "dental" },
    { name: "KLE Society's Institute of Dental Sciences", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "Vydehi Institute of Dental Sciences and Research Centre", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "Rajarajeswari Dental College and Hospital", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "Oxford Dental College and Hospital", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "dental" },
    { name: "Krishnadevaraya College of Dental Sciences", rating: 4.2, state: "Karnataka", city: "Bangalore", type: "dental" },

    // =====================================================================================
    // KARNATAKA - NURSING COLLEGES
    // =====================================================================================
    { name: "St. John's College of Nursing", rating: 4.8, state: "Karnataka", city: "Bangalore", type: "nursing" },
    { name: "Manipal College of Nursing", rating: 4.7, state: "Karnataka", city: "Manipal", type: "nursing" },
    { name: "JSS College of Nursing", rating: 4.6, state: "Karnataka", city: "Mysore", type: "nursing" },
    { name: "MS Ramaiah College of Nursing", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "nursing" },
    { name: "Vydehi Institute of Nursing Sciences and Research Centre", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "nursing" },
    { name: "Father Muller College of Nursing", rating: 4.5, state: "Karnataka", city: "Mangalore", type: "nursing" },
    { name: "Yenepoya Nursing College", rating: 4.4, state: "Karnataka", city: "Mangalore", type: "nursing" },
    { name: "KLE Institute of Nursing Sciences", rating: 4.4, state: "Karnataka", city: "Belgaum", type: "nursing" },
    { name: "Subbaiah Institute of Nursing", rating: 4.2, state: "Karnataka", city: "Shimoga", type: "nursing" },
    { name: "Sapthagiri College of Nursing", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "nursing" },

    // =====================================================================================
    // KARNATAKA - PHARMACY COLLEGES
    // =====================================================================================
    { name: "Manipal College of Pharmaceutical Sciences", rating: 4.8, state: "Karnataka", city: "Manipal", type: "pharmacy" },
    { name: "JSS College of Pharmacy", rating: 4.7, state: "Karnataka", city: "Mysore", type: "pharmacy" },
    { name: "KLE College of Pharmacy", rating: 4.5, state: "Karnataka", city: "Belgaum", type: "pharmacy" },
    { name: "MS Ramaiah College of Pharmacy", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "pharmacy" },
    { name: "Acharya & BM Reddy College of Pharmacy", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "pharmacy" },
    { name: "Dayananda Sagar College of Pharmacy", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "pharmacy" },
    { name: "NGSM Institute of Pharmaceutical Sciences", rating: 4.5, state: "Karnataka", city: "Mangalore", type: "pharmacy" },
    { name: "Yenepoya Pharmacy College and Research Centre", rating: 4.4, state: "Karnataka", city: "Mangalore", type: "pharmacy" },
    { name: "Oxford College of Pharmacy", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "pharmacy" },
    { name: "Krupanidhi College of Pharmacy", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "pharmacy" },

    // =====================================================================================
    // KARNATAKA - PHYSIOTHERAPY COLLEGES
    // =====================================================================================
    { name: "Manipal College of Health Professions", rating: 4.7, state: "Karnataka", city: "Manipal", type: "physiotherapy" },
    { name: "JSS College of Physiotherapy", rating: 4.6, state: "Karnataka", city: "Mysore", type: "physiotherapy" },
    { name: "MS Ramaiah College of Physiotherapy", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "physiotherapy" },
    { name: "KLE Institute of Physiotherapy", rating: 4.4, state: "Karnataka", city: "Belgaum", type: "physiotherapy" },
    { name: "Father Muller College of Physiotherapy", rating: 4.5, state: "Karnataka", city: "Mangalore", type: "physiotherapy" },
    { name: "Rajiv Gandhi University of Health Sciences - College of Physiotherapy", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "physiotherapy" },
    { name: "Nitte Institute of Physiotherapy", rating: 4.4, state: "Karnataka", city: "Mangalore", type: "physiotherapy" },
    { name: "Vydehi Institute of Physiotherapy", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "physiotherapy" },

    // =====================================================================================
    // KARNATAKA - MBA COLLEGES
    // =====================================================================================
    { name: "Indian Institute of Management Bangalore", rating: 5.0, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "Xavier Institute of Management and Entrepreneurship", rating: 4.7, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "Symbiosis Institute of Business Management", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "Christ University - Institute of Management", rating: 4.6, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "Alliance School of Business", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "Manipal Academy of Higher Education - School of Management", rating: 4.5, state: "Karnataka", city: "Manipal", type: "mba" },
    { name: "JSS Centre for Management Studies", rating: 4.4, state: "Karnataka", city: "Mysore", type: "mba" },
    { name: "PES University - School of Management", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "IFIM Business School", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "mba" },
    { name: "Jain University - Centre for Management Studies", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "mba" },

    // =====================================================================================
    // KARNATAKA - AYURVEDA COLLEGES
    // =====================================================================================
    { name: "SDM College of Ayurveda and Hospital", rating: 4.7, state: "Karnataka", city: "Udupi", type: "ayurveda" },
    { name: "JSS Ayurveda Medical College and Hospital", rating: 4.6, state: "Karnataka", city: "Mysore", type: "ayurveda" },
    { name: "Alva's Ayurveda Medical College", rating: 4.5, state: "Karnataka", city: "Moodbidri", type: "ayurveda" },
    { name: "Shri Dharmasthala Manjunatheshwara College of Ayurveda", rating: 4.6, state: "Karnataka", city: "Hassan", type: "ayurveda" },
    { name: "Government Ayurveda Medical College", rating: 4.5, state: "Karnataka", city: "Bangalore", type: "ayurveda" },
    { name: "Rajiv Gandhi University of Health Sciences - Ayurveda", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "ayurveda" },
    { name: "Muniyal Institute of Ayurveda Medical Sciences", rating: 4.3, state: "Karnataka", city: "Manipal", type: "ayurveda" },
    { name: "Sri Sri College of Ayurvedic Science and Research", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "ayurveda" },

    // =====================================================================================
    // KARNATAKA - HOMOEOPATHY COLLEGES
    // =====================================================================================
    { name: "Father Muller Homoeopathic Medical College", rating: 4.6, state: "Karnataka", city: "Mangalore", type: "homoeopathy" },
    { name: "White Memorial Homoeopathic Medical College and Hospital", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "homoeopathy" },
    { name: "Rajiv Gandhi University of Health Sciences - Homoeopathy", rating: 4.3, state: "Karnataka", city: "Bangalore", type: "homoeopathy" },
    { name: "Dr. M.L. Dhawale Memorial Homoeopathic Institute", rating: 4.4, state: "Karnataka", city: "Bangalore", type: "homoeopathy" },
    { name: "JSS Homoeopathic Medical College", rating: 4.5, state: "Karnataka", city: "Mysore", type: "homoeopathy" },

    // =====================================================================================
    // KERALA - ENGINEERING COLLEGES
    // =====================================================================================
    { name: "College of Engineering Trivandrum", rating: 4.7, state: "Kerala", city: "Trivandrum", type: "engineering" },
    { name: "National Institute of Technology Calicut", rating: 4.8, state: "Kerala", city: "Calicut", type: "engineering" },
    { name: "Government Engineering College Thrissur", rating: 4.6, state: "Kerala", city: "Thrissur", type: "engineering" },
    { name: "Cochin University of Science and Technology", rating: 4.6, state: "Kerala", city: "Kochi", type: "engineering" },
    { name: "Rajagiri School of Engineering and Technology", rating: 4.5, state: "Kerala", city: "Kochi", type: "engineering" },
    { name: "Mar Athanasius College of Engineering", rating: 4.4, state: "Kerala", city: "Kothamangalam", type: "engineering" },
    { name: "Toc H Institute of Science and Technology", rating: 4.3, state: "Kerala", city: "Kochi", type: "engineering" },
    { name: "Saintgits College of Engineering", rating: 4.4, state: "Kerala", city: "Kottayam", type: "engineering" },
    { name: "Amal Jyothi College of Engineering", rating: 4.3, state: "Kerala", city: "Kottayam", type: "engineering" },
    { name: "LBS Institute of Technology for Women", rating: 4.4, state: "Kerala", city: "Trivandrum", type: "engineering" },
    { name: "NSS College of Engineering", rating: 4.5, state: "Kerala", city: "Palakkad", type: "engineering" },
    { name: "Malabar College of Engineering and Technology", rating: 4.2, state: "Kerala", city: "Calicut", type: "engineering" },
    { name: "Ilahia College of Engineering and Technology", rating: 4.3, state: "Kerala", city: "Kochi", type: "engineering" },
    { name: "Federal Institute of Science and Technology", rating: 4.3, state: "Kerala", city: "Kochi", type: "engineering" },
    { name: "Viswajyothi College of Engineering and Technology", rating: 4.2, state: "Kerala", city: "Kochi", type: "engineering" },

    // =====================================================================================
    // KERALA - MEDICAL COLLEGES
    // =====================================================================================
    { name: "Government Medical College Thiruvananthapuram", rating: 4.8, state: "Kerala", city: "Trivandrum", type: "medical" },
    { name: "Government Medical College Kozhikode", rating: 4.7, state: "Kerala", city: "Calicut", type: "medical" },
    { name: "Government Medical College Kottayam", rating: 4.6, state: "Kerala", city: "Kottayam", type: "medical" },
    { name: "Amrita Institute of Medical Sciences", rating: 4.9, state: "Kerala", city: "Kochi", type: "medical" },
    { name: "Jubilee Mission Medical College and Research Institute", rating: 4.5, state: "Kerala", city: "Thrissur", type: "medical" },
    { name: "Believers Church Medical College Hospital", rating: 4.4, state: "Kerala", city: "Thiruvalla", type: "medical" },
    { name: "Sree Gokulam Medical College and Research Foundation", rating: 4.3, state: "Kerala", city: "Trivandrum", type: "medical" },
    { name: "Azeezia Institute of Medical Sciences and Research", rating: 4.2, state: "Kerala", city: "Kollam", type: "medical" },

    // =====================================================================================
    // KERALA - NURSING COLLEGES
    // =====================================================================================
    { name: "Amrita College of Nursing", rating: 4.8, state: "Kerala", city: "Kochi", type: "nursing" },
    { name: "Government College of Nursing Thiruvananthapuram", rating: 4.6, state: "Kerala", city: "Trivandrum", type: "nursing" },
    { name: "Jubilee Mission College of Nursing", rating: 4.5, state: "Kerala", city: "Thrissur", type: "nursing" },
    { name: "Believers Church College of Nursing", rating: 4.4, state: "Kerala", city: "Thiruvalla", type: "nursing" },
    { name: "Lisie College of Nursing", rating: 4.5, state: "Kerala", city: "Kochi", type: "nursing" },
    { name: "Pushpagiri College of Nursing", rating: 4.4, state: "Kerala", city: "Thiruvalla", type: "nursing" },
    { name: "Mar Baselios College of Nursing", rating: 4.3, state: "Kerala", city: "Kottayam", type: "nursing" },
    { name: "Sree Gokulam College of Nursing", rating: 4.2, state: "Kerala", city: "Trivandrum", type: "nursing" },

    // =====================================================================================
    // KERALA - MBA COLLEGES
    // =====================================================================================
    { name: "Indian Institute of Management Kozhikode", rating: 4.9, state: "Kerala", city: "Calicut", type: "mba" },
    { name: "Rajagiri Centre for Business Studies", rating: 4.6, state: "Kerala", city: "Kochi", type: "mba" },
    { name: "Cochin University of Science and Technology - School of Management Studies", rating: 4.5, state: "Kerala", city: "Kochi", type: "mba" },
    { name: "Toc H Institute of Science and Technology - MBA", rating: 4.3, state: "Kerala", city: "Kochi", type: "mba" },
    { name: "Saintgits Institute of Management", rating: 4.4, state: "Kerala", city: "Kottayam", type: "mba" },
    { name: "Mar Athanasius Institute of Management Studies", rating: 4.3, state: "Kerala", city: "Kottayam", type: "mba" },
    { name: "Amal Jyothi College of Engineering - MBA", rating: 4.2, state: "Kerala", city: "Kottayam", type: "mba" },
    { name: "Federal Institute of Science and Technology - MBA", rating: 4.2, state: "Kerala", city: "Kochi", type: "mba" },
    { name: "LBS Institute of Technology for Women - MBA", rating: 4.3, state: "Kerala", city: "Trivandrum", type: "mba" },
    { name: "NSS College of Engineering - MBA", rating: 4.3, state: "Kerala", city: "Palakkad", type: "mba" },
]

// Helper functions to filter colleges
export const getCollegesByState = (state: string): College[] => {
    return allColleges.filter(college => college.state === state)
}

export const getCollegesByCity = (city: string): College[] => {
    return allColleges.filter(college => college.city === city)
}

export const getCollegesByType = (type: string): College[] => {
    return allColleges.filter(college => college.type === type)
}

export const getCitiesByState = (state: string): string[] => {
    const cities = allColleges
        .filter(college => college.state === state)
        .map(college => college.city)
    return Array.from(new Set(cities)).sort()
}

export const getStates = (): string[] => {
    const states = allColleges.map(college => college.state)
    return Array.from(new Set(states)).sort()
}

export const getCollegeTypes = (): string[] => {
    const types = allColleges.map(college => college.type)
    return Array.from(new Set(types)).sort()
}
