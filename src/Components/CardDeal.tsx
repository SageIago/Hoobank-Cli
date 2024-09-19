import styles, { layout } from "@/styles"
import { card } from "@/assets"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Find a better <br className="sm:block hidden" /> card deal in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
        <Button styles="mt-10 rounded-[10px]" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-full h-full" />
      </div>
    </section>
  )
}

export default CardDeal