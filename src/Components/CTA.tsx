import styles from "@/styles"
import Button from "@/Components/Button"

const CTA = () => {
  return (
    <section id="CTA" className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
           <div className="flex flex-1 flex-col">
              <h2 className={`${styles.heading2}`}>Let's Try Our Services</h2>
              <p className={`${styles.paragraph} max-w-[450px] mt-5`}>Everything you need to accept payments  and grow your business anywhere in the planet.</p>
           </div>

           <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10}`}>
            <Button styles="rounded-[10px] mt-4" />
           </div>
    </section>
  )
}

export default CTA