import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#23b5d3]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-stone-900 font-mono">Hola, mi nombre es:</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Diego Vistoso</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          Desarrollador Full Stack.
        </h2>
        <p className="py-4 max-w[700px] font-sans">
          Tengo habilidades en la creación y desarrollo de sitios web dinámicos
          utilizando diversas tecnologías y herramientas de programación. En
          constante aprendizaje y actualmente estoy adquiriendo conocimientos en
          Laravel y ReactJS en <strong>Open Bootcamp</strong>
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-900 hover:border-gray-900">
            Ver Proyectos
            {/* icono arrow realice una rotación */}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
