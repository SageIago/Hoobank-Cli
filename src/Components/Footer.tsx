import { logo } from "@/assets";
import { footerLinks, socialMedia } from "@/constants";
import styles from "@/styles";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col flex-1 justify-start mr-10">
          <img
            src={logo}
            alt="Hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments faster, reliable and secure.
          </p>
        </div>

        <div
          className={`flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10`}
        >
          {footerLinks.map((footerLink, index) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              key={index}
            >
              <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((links, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                  >
                    {links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3R45]">
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">2024. Copyright Hoobank Limited. All Rights Reserved</p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((socialmedia, index) => (
            <img
              src={socialmedia.icon}
              alt={socialmedia.link}
              key={index + socialmedia.id}
              className={`w-[21px] h-[21px] cursor-pointer object-contain ${index !== socialMedia.length ? "mr-6" : "mr-0"}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
