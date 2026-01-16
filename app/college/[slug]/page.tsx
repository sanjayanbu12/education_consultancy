import { Metadata } from "next"
import { notFound } from "next/navigation"
import {
    Building2, MapPin, Star, Award, Users, GraduationCap, TrendingUp,
    CheckCircle, Phone, Mail, Globe, Calendar, BookOpen, Briefcase,
    Target, Trophy, Lightbulb, Shield, ArrowRight, Download
} from "lucide-react"
import Link from "next/link"

// College data
const colleges = {
    "ams-namakkal": {
        name: "AMS College",
        fullName: "Annai Mathammal Sheela Engineering College",
        location: "Namakkal, Tamil Nadu",
        city: "Namakkal",
        state: "Tamil Nadu",
        rating: 4.8,
        established: "2008",
        type: "Engineering",
        affiliation: "Anna University",
        accreditation: "AICTE Approved, NBA Accredited",
        color: "from-blue-600 to-blue-800",

        about: "Annai Mathammal Sheela Engineering College (AMS) is a premier engineering institution located in Namakkal, Tamil Nadu. Established in 2008, the college has consistently maintained high academic standards and excellent placement records. With state-of-the-art infrastructure and experienced faculty, AMS provides a conducive environment for holistic development of students.",

        highlights: [
            "100% Placement Record",
            "State-of-the-art Infrastructure",
            "Industry Partnerships with Top Companies",
            "Research & Innovation Center",
            "Modern Laboratories and Workshops",
            "Experienced Faculty Members",
            "Active Training & Placement Cell",
            "Sports and Cultural Activities"
        ],

        courses: [
            { name: "B.E/B.Tech", duration: "4 Years", seats: "600" },
            { name: "M.E/M.Tech", duration: "2 Years", seats: "120" },
            { name: "MBA", duration: "2 Years", seats: "60" }
        ],

        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Information Technology"
        ],

        facilities: [
            "Digital Library with 50,000+ Books",
            "High-Speed Internet & Wi-Fi Campus",
            "Modern Computer Labs",
            "Separate Hostels for Boys & Girls",
            "Sports Complex with Indoor & Outdoor Facilities",
            "Cafeteria with Hygienic Food",
            "Transportation Facility",
            "Medical Facility with 24/7 Ambulance"
        ],

        placements: {
            percentage: "100%",
            highestPackage: "₹18 LPA",
            averagePackage: "₹4.5 LPA",
            topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL", "Tech Mahindra", "Capgemini"]
        },

        contact: {
            phone: "+91 9578599785",
            email: "info@amscollege.edu.in",
            website: "www.amscollege.edu.in",
            address: "Namakkal - Salem Main Road, Namakkal, Tamil Nadu - 637002"
        }
    },

    "gnanamani-salem": {
        name: "Gnanamani College",
        fullName: "Gnanamani College of Technology",
        location: "Salem, Tamil Nadu",
        city: "Salem",
        state: "Tamil Nadu",
        rating: 4.7,
        established: "1998",
        type: "Engineering & Technology",
        affiliation: "Anna University",
        accreditation: "AICTE Approved, NBA Accredited",
        color: "from-purple-600 to-purple-800",

        about: "Gnanamani College of Technology, established in 1998, is one of the leading engineering colleges in Salem. The institution is known for its excellent faculty, modern laboratories, and industry-ready curriculum. With a strong focus on practical learning and skill development, the college prepares students for successful careers in engineering and technology.",

        highlights: [
            "Excellent Faculty with Industry Experience",
            "Modern Laboratories and Equipment",
            "Industry-Ready Curriculum",
            "Active Placement Cell with 95% Success Rate",
            "MoUs with Leading Companies",
            "Entrepreneurship Development Cell",
            "Technical Clubs and Societies",
            "Regular Industry Visits and Internships"
        ],

        courses: [
            { name: "B.E/B.Tech", duration: "4 Years", seats: "720" },
            { name: "M.E/M.Tech", duration: "2 Years", seats: "90" },
            { name: "MCA", duration: "2 Years", seats: "60" }
        ],

        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Automobile Engineering"
        ],

        facilities: [
            "Central Library with Digital Resources",
            "Advanced Computer Centers",
            "Well-Equipped Laboratories",
            "Hostel Accommodation",
            "Sports Facilities",
            "Cafeteria",
            "Bus Transportation",
            "Health Center"
        ],

        placements: {
            percentage: "95%",
            highestPackage: "₹15 LPA",
            averagePackage: "₹4.2 LPA",
            topRecruiters: ["Infosys", "TCS", "Wipro", "CTS", "L&T", "Ashok Leyland", "TVS", "Bosch"]
        },

        contact: {
            phone: "+91 9578599785",
            email: "info@gct.edu.in",
            website: "www.gct.edu.in",
            address: "Pachal, Salem, Tamil Nadu - 637018"
        }
    },

    "vivekanandha-erode": {
        name: "Vivekanandha College",
        fullName: "Vivekanandha College of Engineering for Women",
        location: "Erode, Tamil Nadu",
        city: "Erode",
        state: "Tamil Nadu",
        rating: 4.6,
        established: "2001",
        type: "Women's Engineering College",
        affiliation: "Anna University",
        accreditation: "AICTE Approved, NBA Accredited",
        color: "from-pink-600 to-pink-800",

        about: "Vivekanandha College of Engineering for Women is a pioneering institution dedicated to women's education in engineering. Established in 2001, the college provides a safe, secure, and empowering environment for young women to pursue their dreams in technology and engineering. With a focus on holistic development, the college nurtures future women leaders in STEM fields.",

        highlights: [
            "Exclusive Women's Engineering College",
            "Safe and Secure Campus Environment",
            "Women Empowerment Programs",
            "Skill Development and Personality Development",
            "Strong Alumni Network",
            "Mentorship Programs",
            "Industry Internships for Women",
            "Leadership Development Initiatives"
        ],

        courses: [
            { name: "B.E/B.Tech", duration: "4 Years", seats: "480" },
            { name: "M.E/M.Tech", duration: "2 Years", seats: "72" }
        ],

        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Information Technology",
            "Biomedical Engineering"
        ],

        facilities: [
            "Women-Friendly Campus",
            "Modern Library",
            "Computer Labs with Latest Software",
            "Girls Hostel with 24/7 Security",
            "Sports and Fitness Center",
            "Cafeteria",
            "Transportation for Women",
            "Counseling and Support Services"
        ],

        placements: {
            percentage: "92%",
            highestPackage: "₹12 LPA",
            averagePackage: "₹3.8 LPA",
            topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "IBM", "Accenture", "Amazon", "Flipkart"]
        },

        contact: {
            phone: "+91 9578599785",
            email: "info@vcew.edu.in",
            website: "www.vcew.edu.in",
            address: "Tiruchengode, Namakkal District, Tamil Nadu - 637205"
        }
    },

    "ima-chennai": {
        name: "IMA College",
        fullName: "Institute of Management and Administration",
        location: "Chennai, Tamil Nadu",
        city: "Chennai",
        state: "Tamil Nadu",
        rating: 4.9,
        established: "1995",
        type: "Management & Business",
        affiliation: "Anna University",
        accreditation: "AICTE Approved, UGC Recognized",
        color: "from-orange-600 to-orange-800",

        about: "Institute of Management and Administration (IMA) is a premier business school in Chennai, established in 1995. Known for its rigorous academic programs and strong industry connections, IMA has been shaping future business leaders for over two decades. The institute offers world-class MBA programs with specializations in various domains of management.",

        highlights: [
            "Top-Ranked MBA Program",
            "Corporate Tie-ups with Fortune 500 Companies",
            "International Exposure and Exchange Programs",
            "Entrepreneurship Development Center",
            "Case Study Based Learning",
            "Industry Expert Guest Lectures",
            "Live Projects and Internships",
            "Excellent Placement Record"
        ],

        courses: [
            { name: "MBA", duration: "2 Years", seats: "120" },
            { name: "PGDM", duration: "2 Years", seats: "60" },
            { name: "Executive MBA", duration: "1 Year", seats: "30" }
        ],

        departments: [
            "Finance",
            "Marketing",
            "Human Resources",
            "Operations Management",
            "Business Analytics",
            "International Business"
        ],

        facilities: [
            "Business Resource Center",
            "Computer Lab with Business Software",
            "Seminar Halls and Conference Rooms",
            "Hostel Facility",
            "Sports Complex",
            "Cafeteria",
            "Transportation",
            "Career Development Center"
        ],

        placements: {
            percentage: "98%",
            highestPackage: "₹22 LPA",
            averagePackage: "₹7.5 LPA",
            topRecruiters: ["Deloitte", "KPMG", "EY", "PwC", "ICICI Bank", "HDFC Bank", "Amazon", "Flipkart"]
        },

        contact: {
            phone: "+91 9578599785",
            email: "admissions@ima.edu.in",
            website: "www.ima.edu.in",
            address: "Thoraipakkam, Chennai, Tamil Nadu - 600097"
        }
    },

    "dhanalakshmi-coimbatore": {
        name: "Dhanalakshmi College",
        fullName: "Dhanalakshmi College of Engineering",
        location: "Coimbatore, Tamil Nadu",
        city: "Coimbatore",
        state: "Tamil Nadu",
        rating: 4.7,
        established: "2002",
        type: "Engineering",
        affiliation: "Anna University",
        accreditation: "AICTE Approved, NBA Accredited",
        color: "from-teal-600 to-teal-800",

        about: "Dhanalakshmi College of Engineering, established in 2002, is a leading engineering institution in Coimbatore. The college is committed to providing quality technical education with a focus on industry-oriented training and research excellence. With smart classrooms, modern laboratories, and global collaborations, the college prepares students for the challenges of the modern world.",

        highlights: [
            "Industry-Oriented Training Programs",
            "Research Excellence and Innovation",
            "Smart Classrooms with Digital Learning",
            "Global Collaborations and Exchange Programs",
            "Strong Industry-Academia Interface",
            "Patent Filing and Research Publications",
            "Incubation Center for Startups",
            "Regular Workshops and Seminars"
        ],

        courses: [
            { name: "B.E/B.Tech", duration: "4 Years", seats: "660" },
            { name: "M.E/M.Tech", duration: "2 Years", seats: "108" },
            { name: "MBA", duration: "2 Years", seats: "60" }
        ],

        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Mechatronics Engineering"
        ],

        facilities: [
            "Digital Library and E-Resources",
            "Advanced Research Labs",
            "Smart Classrooms",
            "Hostel with Modern Amenities",
            "Sports and Fitness Center",
            "Food Court",
            "College Bus Service",
            "Medical Center"
        ],

        placements: {
            percentage: "96%",
            highestPackage: "₹16 LPA",
            averagePackage: "₹4.8 LPA",
            topRecruiters: ["TCS", "Infosys", "Wipro", "CTS", "Tech Mahindra", "L&T", "Bosch", "Siemens"]
        },

        contact: {
            phone: "+91 9578599785",
            email: "info@dce.edu.in",
            website: "www.dce.edu.in",
            address: "Manimangalam, Tambaram, Chennai, Tamil Nadu - 601301"
        }
    },

    "easa-walayar": {
        name: "EASA College",
        fullName: "EASA College of Engineering and Technology",
        location: "Walayar, Kerala",
        city: "Walayar",
        state: "Kerala",
        rating: 4.5,
        established: "2010",
        type: "Engineering & Technology",
        affiliation: "APJ Abdul Kalam Technological University",
        accreditation: "AICTE Approved",
        color: "from-green-600 to-green-800",

        about: "EASA College of Engineering and Technology, established in 2010, is nestled in the scenic location of Walayar, Kerala. The college offers a perfect blend of quality education and natural beauty. With a focus on practical learning, industry internships, and innovation, EASA prepares students for successful careers in engineering and technology.",

        highlights: [
            "Scenic Campus in Natural Surroundings",
            "Industry Internship Programs",
            "Innovation and Incubation Lab",
            "Sports and Cultural Activities",
            "Modern Infrastructure",
            "Experienced Faculty",
            "Industry Visits and Guest Lectures",
            "Skill Development Programs"
        ],

        courses: [
            { name: "B.Tech", duration: "4 Years", seats: "480" },
            { name: "M.Tech", duration: "2 Years", seats: "60" }
        ],

        departments: [
            "Computer Science and Engineering",
            "Electronics and Communication Engineering",
            "Electrical and Electronics Engineering",
            "Mechanical Engineering",
            "Civil Engineering"
        ],

        facilities: [
            "Modern Library",
            "Computer Labs",
            "Engineering Workshops",
            "Hostel Accommodation",
            "Sports Complex",
            "Cafeteria",
            "Transportation",
            "Health Care Center"
        ],

        placements: {
            percentage: "90%",
            highestPackage: "₹10 LPA",
            averagePackage: "₹3.5 LPA",
            topRecruiters: ["TCS", "Infosys", "Wipro", "UST Global", "Tata Elxsi", "Sutherland", "IBS", "Quest Global"]
        },

        contact: {
            phone: "+91 9578599785",
            email: "info@easacollege.edu.in",
            website: "www.easacollege.edu.in",
            address: "Walayar, Coimbatore - Palakkad Highway, Kerala - 678624"
        }
    }
}

type Props = {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const college = colleges[params.slug as keyof typeof colleges]

    if (!college) {
        return {
            title: "College Not Found",
        }
    }

    return {
        title: `${college.fullName} | KV Guidance Educational Consultancy`,
        description: college.about,
    }
}

export default function CollegePage({ params }: Props) {
    const college = colleges[params.slug as keyof typeof colleges]

    if (!college) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            {/* Hero Section */}
            <section className={`relative py-20 bg-gradient-to-r ${college.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex items-start justify-between mb-8">
                        <Link
                            href="/#top-colleges"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all"
                        >
                            ← Back to Colleges
                        </Link>

                        <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                            <span className="text-white font-bold text-lg">{college.rating}</span>
                        </div>
                    </div>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                                <Building2 className="w-12 h-12 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {college.name}
                                </h1>
                                <p className="text-white/90 text-lg">{college.fullName}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-white/90 mb-6">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>{college.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>Est. {college.established}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5" />
                                <span>{college.type}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm">
                                {college.affiliation}
                            </span>
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm">
                                {college.accreditation}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* About */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1a365d] dark:text-gray-100 mb-4 flex items-center gap-3">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                                About the College
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {college.about}
                            </p>
                        </section>

                        {/* Key Highlights */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1a365d] dark:text-gray-100 mb-6 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-blue-600" />
                                Key Highlights
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {college.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Courses Offered */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1a365d] dark:text-gray-100 mb-6 flex items-center gap-3">
                                <GraduationCap className="w-8 h-8 text-blue-600" />
                                Courses Offered
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {college.courses.map((course, idx) => (
                                    <div key={idx} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                            {course.name}
                                        </h3>
                                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                            <p>Duration: {course.duration}</p>
                                            <p>Seats: {course.seats}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Departments */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1a365d] dark:text-gray-100 mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-blue-600" />
                                Departments
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {college.departments.map((dept, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Facilities */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1a365d] dark:text-gray-100 mb-6 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-blue-600" />
                                Facilities
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {college.facilities.map((facility, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300">{facility}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Placements */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1a365d] dark:text-gray-100 mb-6 flex items-center gap-3">
                                <Trophy className="w-8 h-8 text-blue-600" />
                                Placements
                            </h2>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                            {college.placements.percentage}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Placement Rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                            {college.placements.highestPackage}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Highest Package</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                            {college.placements.averagePackage}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Average Package</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Top Recruiters</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {college.placements.topRecruiters.map((recruiter, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                                {recruiter}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">

                            {/* Contact Card */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">Phone</p>
                                            <a href={`tel:${college.contact.phone}`} className="text-gray-900 dark:text-gray-100 hover:text-blue-600">
                                                {college.contact.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">Email</p>
                                            <a href={`mailto:${college.contact.email}`} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 break-all">
                                                {college.contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">Website</p>
                                            <a href={`https://${college.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-blue-600 break-all">
                                                {college.contact.website}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">Address</p>
                                            <p className="text-gray-900 dark:text-gray-100">
                                                {college.contact.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className={`bg-gradient-to-r ${college.color} rounded-2xl p-6 text-white`}>
                                <h3 className="text-xl font-semibold mb-3">
                                    Interested in Admission?
                                </h3>
                                <p className="text-white/90 text-sm mb-6">
                                    Get expert guidance from our counselors and secure your admission
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                    Quick Links
                                </h3>
                                <div className="space-y-2">
                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group">
                                        <span className="text-gray-700 dark:text-gray-300">Download Brochure</span>
                                        <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </a>
                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group">
                                        <span className="text-gray-700 dark:text-gray-300">Admission Process</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </a>
                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group">
                                        <span className="text-gray-700 dark:text-gray-300">Fee Structure</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </a>
                                    <a href="#" className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group">
                                        <span className="text-gray-700 dark:text-gray-300">Scholarships</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-[#1a365d] dark:text-gray-100 mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                        Get personalized guidance from our expert counselors
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#0E74D2] text-white rounded-xl font-semibold hover:bg-[#0a5ba8] transition-all shadow-lg"
                        >
                            Schedule Free Consultation
                        </Link>
                        <Link
                            href="/#top-colleges"
                            className="px-8 py-4 bg-white dark:bg-gray-800 text-[#0E74D2] dark:text-blue-400 border-2 border-[#0E74D2] dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
                        >
                            Explore More Colleges
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export async function generateStaticParams() {
    return Object.keys(colleges).map((slug) => ({
        slug: slug,
    }))
}
