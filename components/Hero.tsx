import styles from "@/styles/style";
import { discount, books } from "@/public/assets";
// import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
     <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={books}
        alt="billings"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Build Your
         <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> Career With Smarter</span>{" "}
        </h1>
        
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        Choices.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Finishing school is only the start. With expert support, career mapping, and global education guidance, we bridge the gap between classroom learning and real-world success.
      </p>
    </div>
   
    {/* <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div> */}
  </section>
);

export default Hero;
