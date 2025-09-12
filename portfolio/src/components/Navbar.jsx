import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";
import { logo} from "../assets";

// import logo from "../assets/logo_2.jpg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} select-none w-full flex items-center py-5 fixed z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            TimaSv
          </p>
        </Link>
      </div>
      <ul className="list-none hidden w-full sm:flex flex-row justify-end gap-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => setActive(link.title)}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
     <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt={toggle ? "close menu" : "open menu"}
          className="cursor-pointer w-[28px] h-[28px] object-contain ml-40 "
          onClick={() => {setToggle(!toggle)}}
        />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-100 absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none flex flex-col justify-end gap-4">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => {setActive(link.title)
             setToggle(!toggle)}}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } font-poppins font-medium cursor-pointer text-[16px]`}
          >
            <a className="hover:text-white" href={`${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
