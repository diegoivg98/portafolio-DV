import React from "react";
import HTML from "../assets/html5.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/javascript.svg";
import BOOTSTRAP from "../assets/bootstrap.svg";
import TAILWINDCSS from "../assets/tailwindcss.svg";
import GIT from "../assets/git.svg";
import POSTGRESQL from "../assets/postgresql.svg";
import MYSQL from "../assets/mysql.svg";

const Skills = () => {
  return (
      <div name="skills" className="w-full bg-[#a2aebb]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-slate-900">
              Tecnologías
            </p>
            <p className="py-4">
              Estas son algunas tecnologías con las que he desarrollado:
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4 font-bold">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
              <p className="my-4 font-bold">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="SASS icon" />
              <p className="my-4 font-bold">SASS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={JS} alt="JAVASCRIPT icon" />
              <p className="my-4 font-bold">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={BOOTSTRAP} alt="BOOTSTRAP Icon" />
              <p className="my-4 font-bold">BOOTSTRAP</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'} alt='PHP Icon'/>
              <p className="my-4 font-bold">PHP</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'} alt='CODEIGNITER Icon'/>
              <p className="my-4 font-bold">CODEIGNITER</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={POSTGRESQL} alt='POSTGRESQL Icon'/>
              <p className="my-4 font-bold">POSTGRESQL</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={MYSQL} alt='MYSQL Icon'/>
              <p className="my-4 font-bold">MYSQL</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={GIT} alt='GIT Icon'/>
              <p className="my-4 font-bold">GIT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} alt='GITHUB Icon'/>
              <p className="my-4 font-bold">GITHUB</p>
            </div>
          </div>

          <div>
            <p className="text-4xl font-bold inline border-b-4 border-slate-900">
              Aprendiendo
            </p>
            <p className="py-4">
              Adquiriendo conocimiento en las siguientes tecnologías:
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="REACT icon" />
              <p className="my-4 font-bold">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-32 mx-auto" src={TAILWINDCSS} alt="TAILDWINDCSS icon" />
              <p className="my-4 font-bold">TAILWIND CSS</p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Skills;
