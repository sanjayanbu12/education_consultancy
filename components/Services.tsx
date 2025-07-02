import styles, { layout } from "@/styles/style";
import { awards } from "@/public/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

// Main services data
const services = [
  {
    id: "service-1",
    title: "Career Counseling & Assessment",
    content: "Comprehensive aptitude tests and personality assessments to identify your strengths, interests, and ideal career paths with expert guidance.",
  },
  {
    id: "service-2",
    title: "Course Selection Guidance",
    content: "Strategic course recommendations based on your career goals, academic background, and market demand in various industries.",
  },
  {
    id: "service-3",
    title: "College & University Selection",
    content: "Personalized college matching with our database of 200+ partner universities worldwide, ensuring the perfect fit for your profile.",
  },
];

// Service Card Component with animations
interface ServiceCardProps {
  title: string;
  content: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`flex flex-col p-8 rounded-[20px] feature-card hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group cursor-pointer transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Decorative number with pulse animation */}
      <div className="absolute top-4 right-4 w-[40px] h-[40px] rounded-full bg-blue-gradient flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse">
        <span className="font-poppins font-bold text-[16px] text-white">{String(index + 1).padStart(2, '0')}</span>
      </div>
      
      {/* Animated gradient accent */}
      <div className="absolute top-0 left-0 w-0 h-[4px] bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
      
      {/* Floating background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <h4 className="font-poppins font-semibold text-white text-[22px] leading-[30px] mb-4 pr-12 relative z-10 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[26px] relative z-10 group-hover:text-white transition-colors duration-300">
        {content}
      </p>
      
      {/* Animated corner gradient */}
      <div className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-gradient-to-tl from-blue-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

// Animated Text Component
const AnimatedText: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-800 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Floating Background Animation Component
const FloatingBackground: React.FC = () => {
  return (
    <>
      {/* Animated background gradients */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 pink__gradient opacity-50 animate-pulse"></div>
      <div 
        className="absolute z-[1] w-[60%] h-[60%] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white__gradient opacity-30"
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-0 bottom-0 blue__gradient opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) scale(1); }
          50% { transform: translate(-50%, -50%) translateY(-20px) scale(1.05); }
        }
      `}</style>
    </>
  );
};

// Feature Points with staggered animation
const FeaturePoint: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`flex items-center transform transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
      }`}
    >
      <div className="w-[20px] h-[20px] bg-blue-gradient rounded-full mr-3 animate-pulse"></div>
      <span className="font-poppins font-medium text-dimWhite text-[16px]">{children}</span>
    </div>
  );
};

// Main Services Component
const Services: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero Services Section */}
      <section id="services" className={`${styles.flexCenter} ${styles.paddingY} relative overflow-hidden`}>
        <div className="w-full max-w-[1170px] text-center relative z-[5]">
          <AnimatedText delay={200}>
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] mb-4">
              Our <span className="text-gradient bg-clip-text animate-pulse">Expert</span> Services.
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <div className="flex flex-row items-center justify-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-6 w-fit mx-auto hover:scale-105 transition-transform duration-300">
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px]">
                Comprehensive Education Solutions
              </p>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={600}>
            <p className={`${styles.paragraph} max-w-[600px] mx-auto mt-5`}>
              From career assessment to college enrollment, we provide comprehensive support 
              at every step of your educational journey. Our proven methodology has helped 
              2500+ students achieve their academic dreams.
            </p>
          </AnimatedText>
        </div>
        
        {/* Animated Background */}
        <FloatingBackground />
      </section>

      {/* Services Grid Section */}
      <section className={`${layout.section}`}>
        <div className="w-full">
          <AnimatedText delay={800}>
            <h2 className={`${styles.heading2} text-center mb-4`}>
              What We Offer
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={1000}>
            <p className={`${styles.paragraph} text-center max-w-[600px] mx-auto mb-16`}>
              Our comprehensive suite of services is designed to guide you through every 
              aspect of your educational journey, from discovery to enrollment and beyond.
            </p>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse} flex-col`}>
          <AnimatedText delay={1400}>
            <div className="p-8 rounded-[20px] bg-blue-gradient mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <h3 className="font-poppins font-semibold text-[28px] leading-[36px] text-white mb-4 group-hover:animate-pulse">
                12+ Years of Excellence
              </h3>
              <p className="font-poppins font-normal text-white text-[16px] leading-[24px] mb-4">
                Over a decade of experience helping students navigate their educational journey 
                with personalized guidance and proven strategies.
              </p>
              <div className="flex items-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center mr-3 animate-bounce">
                  <Image src={awards} alt="achievement" className="w-[24px] h-[24px]" />
                </div>
                <span className="font-poppins font-semibold text-white text-[18px]">95% Success Rate</span>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={1600}>
            <div className="p-6 rounded-[20px] feature-card hover:scale-105 transition-all duration-300 group">
              <h4 className="font-poppins font-semibold text-white text-[20px] leading-[28px] mb-3 group-hover:text-blue-300 transition-colors duration-300">
                Global Network
              </h4>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] group-hover:text-white transition-colors duration-300">
                Access to 200+ partner universities worldwide, ensuring we find the perfect 
                match for your academic and career aspirations.
              </p>
            </div>
          </AnimatedText>
        </div>
        
        <div className={layout.sectionInfo}>
          <AnimatedText delay={1200}>
            <h2 className={styles.heading2}>
              Why Students <br className="sm:block hidden" />
              Choose Us.
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={1400}>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our commitment to excellence, personalized approach, and proven track record 
              make us the trusted choice for students and parents seeking quality education guidance.
            </p>
          </AnimatedText>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <FeaturePoint delay={1600}>Expert Counselors</FeaturePoint>
            <FeaturePoint delay={1700}>Personalized Approach</FeaturePoint>
            <FeaturePoint delay={1800}>End-to-End Support</FeaturePoint>
            <FeaturePoint delay={1900}>Global Partnerships</FeaturePoint>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;