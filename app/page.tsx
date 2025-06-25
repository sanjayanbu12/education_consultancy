"use client"
import styles from "@/styles/style";
import { Navbar, Hero,CTA, Footer, About, Services, Partners, Gallery, Howwework, Contactus } from "@/components"
import Awards from "@components/Awards";
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
            <Services />
            <Partners />
            <Awards />
            <Gallery />
            <Howwework />
            {/* <CTA /> */}
            <Contactus />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home