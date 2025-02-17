import { features } from "@/constants";
import styles from "@/styles";

interface FeatureCardProps {
  icon: string;
  id: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, id, title, content, index }: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt={id + title} className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p> 
      </div>
    </div>
  );
};

export default FeatureCard;
