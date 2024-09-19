import { useState } from "react";

import { close, logo, menu } from "@/assets";

import { navLinks } from "@/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 items-center justify-between navbar">
      <img src={logo} alt="Hoobank-logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((links, index)=> (
          <li key={links.id + index} className={`font-poppins font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-[16px]`}>
            <a href={`#${links.id}`}>{links.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu"  className="w-[28px] h-[28px] object-contain" onClick={()=> setToggle((prev)=> !prev)}/>

        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl-sidebar rounded-md`}>

        <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((links, index)=> (
          <li key={links.id + index} className={`font-poppins font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-[16px]`}>
            <a href={`#${links.id}`}>{links.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
