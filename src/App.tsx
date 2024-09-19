import styles from "./styles"

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients,CTA, Footer } from "@/Components"


function App() {
    return (
     <div className="bg-primary w-full overflow-hidden">
      {/*   NAVBAR */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
      </div>


      {/* HERO SECTION */}
      <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div>

      {/* DIFFERENT COMPONENTS */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

     </div>
    ) 
}

export default App
