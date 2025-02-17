import styles, { layout } from "@/styles";
import Button from "@/Components/Button";
import { features } from "@/constants";
import FeatureCard from "./FeatureCard";


const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles="mt-10 rounded-[10px]"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index)=> (
          <FeatureCard key={features.id}  {...features} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
