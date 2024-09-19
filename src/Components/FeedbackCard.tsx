import { quotes } from "@/assets"
interface Props {
  name: string,
  title: string,
  img: string,
  content: string
}

const FeedbackCard = ({name, title, img, content}: Props) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="Quotes Stickers" className="w-[42px] h-[27px] object-contain"/>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[32px] my-10">{content}</p>


      <div className="flex flex-row">

        <img src={img} alt="People's Images" className="rounded-full w-[48px] h-[48px]" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">{name}</h4>
          <p className={`font-poppins font-normal text-dimWhite text-[14px] leading-[20px] mt-2`}>
          {title}
        </p>
        </div>

      </div>

    </div>
  )
}

export default FeedbackCard