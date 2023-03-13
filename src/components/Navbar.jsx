import React, { useState } from "react";
import Logo from "../assets/Logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNavbar(!navbar)
    
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1472ac] text-neutral-900">
      {/* LOGO */}
      <div>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "90px", heigt: "90px", borderRadius: "100px" }}
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Inicio</li>
        <li>Sobre mi</li>
        <li>Tecnologias</li>
        <li>Proyectos</li>
      </ul>

      {/* Menu Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        { !navbar ? <FaBars/>:<FaTimes/> }
      </div>

      {/* Menu mobile */}
      <ul className={!navbar ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#1472ac] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Inicio</li>
        <li className="py-6 text-4xl">Sobre mi</li>
        <li className="py-6 text-4xl">Tecnologias</li>
        <li className="py-6 text-4xl">Proyectos</li>
      </ul>
    </div>
  );
};

export default Navbar;
