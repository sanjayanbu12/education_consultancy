import styles, { layout } from "@/styles/style";
import { graduation,college, target, users, awards,consultancy, lightbulb, handshake } from "@/public/assets";
import Button from "./Button";
import Image from "next/image";

// Stats data for the consultancy
const consultancyStats = [
  {
    id: "stat-1",
    title: "Students Guided",
    value: "2500+",
  },
  {
    id: "stat-2", 
    title: " Placements",
    value: "95%",
  },
  {
    id: "stat-3",
    title: "Years Experience",
    value: "12+",
  },
  {
    id: "stat-4",
    title: "Partner Universities",
    value: "200+",
  },
];

// Our expertise areas
const expertiseAreas = [
  {
    id: "expertise-1",
    icon: graduation,
    title: "Career Counseling",
    content: "Personalized career guidance based on aptitude tests, interests, and market trends to help students choose the right path.",
  },
  {
    id: "expertise-2", 
    icon: college,
    title: "College Selection",
    content: "Strategic college selection process matching student profiles with the best-fit institutions globally.",
  },
  
];

// Stats component
const Stats: React.FC = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {consultancyStats.map((stat) => (
      <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

// Expertise Card Component
interface ExpertiseCardProps {
  icon: any;
  title: string;
  content: string;
  index: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== expertiseAreas.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <Image src={icon} alt="icon" className="w-[80%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

// Main About Component
const About: React.FC = () => (
  <>
    {/* Hero About Section */}
    <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Shaping
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Tomorrow's</span>{" "}
          </h1>
        </div>
        <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Leaders.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          For over 12 years, we've been the bridge between student dreams and academic reality. 
          Our expert counselors have guided thousands of students to their ideal colleges, 
          creating success stories across the globe.
        </p>
      </div>

      <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
        <Image
          src={consultancy}
          alt="education consultancy"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>

    {/* Stats Section */}
    <Stats />

    {/* Our Mission Section */}
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Our Mission: <br className="sm:block hidden" />
          Empowering Student Success.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We believe every student deserves the opportunity to reach their full potential. 
          Through personalized counseling, strategic planning, and unwavering support, 
          we transform educational aspirations into achievements.
        </p>
        
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 p-6 rounded-[20px] bg-discount-gradient">
            <h3 className="font-poppins font-semibold text-[24px] leading-[32px] text-white mb-4">
              Our Vision
            </h3>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              To be the global leader in education consulting, making quality higher education 
              accessible to every deserving student regardless of their background.
            </p>
          </div>
          <div className="flex-1 p-6 rounded-[20px] bg-black-gradient-2">
            <h3 className="font-poppins font-semibold text-[24px] leading-[32px] text-white mb-4">
              Our Values
            </h3>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              Integrity, excellence, and student-first approach guide everything we do. 
              We're committed to ethical practices and transparent communication.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Expertise Section */}
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse} flex-col`}>
        {expertiseAreas.map((area, index) => (
          <ExpertiseCard key={area.id} {...area} index={index} />
        ))}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Comprehensive Support <br className="sm:block hidden" />
          Every Step of the Way.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From initial career assessment to final enrollment, our holistic approach 
          ensures no detail is overlooked. We provide end-to-end support that covers 
          every aspect of your educational journey.
        </p>
        {/* <Button styles="mt-10" text="Explore Our Services" /> */}
      </div>
    </section>

 
  </>
);

export default About;