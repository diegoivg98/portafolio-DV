import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";
import Cv from "../assets/CV_Diego_Vistoso.pdf"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#071013] text-stone-50">
      {/* LOGO */}
      <div>
        <img src={Logo} alt="logo" style={{ width: "120px", heigt: "120px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
      </ul>

      {/* Menu Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu mobile */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#071013] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre mi
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Tecnologias
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="works" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
      </ul>

      {/* Iconos RRSS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://www.linkedin.com/in/diego-vistoso/"
            >
              LinkedIn
              <FaLinkedin size={36} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://github.com/diegoivg98"
            >
              Github
              <FaGithub size={36} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="mailto:diegoivg98@gmail.com"
            >
              Correo
              <HiOutlineMail size={36} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-30 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href={Cv}
              download
            >
              Curriculum <BsDownload size={36} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
