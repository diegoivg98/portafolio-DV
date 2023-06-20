import React from "react";
import CoinBase from "../assets/proyectos/coinbase.jpg";
import SistemaTicket from "../assets/proyectos/sistema-ticket.jpg";
import TextToSpeech from "../assets/proyectos/text-to-speech.jpg";
import Calculadora from "../assets/proyectos/calculadora.jpg";
import Portfolio from "../assets/proyectos/portafolio.jpg";
import PortfolioV2 from "../assets/proyectos/portafolioV2.jpg"
import CasoFonasa from "../assets/proyectos/fonasa.png"
import Weather from "../assets/proyectos/weather.jpg"

const Works = () => {
  const proyectos = [
    {
      id: 1,
      src: PortfolioV2,
      demo: "https://diegovistoso.netlify.app/",
      code: "https://github.com/diegoivg98/portafolio-DV",
    },
    {
      id: 2,
      src: Portfolio,
      demo: "https://diegoivg98.github.io/Portfolio/",
      code: "https://github.com/diegoivg98/Portfolio",
    },
    {
      id: 3,
      src: Weather,
      demo: "https://app-clima-dv.netlify.app/",
      code: "https://github.com/diegoivg98/app_clima",
    },
    {
      id: 4,
      src: Calculadora,
      demo: "https://diegoivg98.github.io/Calculadora/",
      code: "https://github.com/diegoivg98/Calculadora",
    },
    {
      id: 5,
      src: TextToSpeech,
      demo: "https://diegoivg98.github.io/Text-to-Speech/",
      code: "https://github.com/diegoivg98/Text-to-Speech",
    },
    {
      id: 6,
      src: CoinBase,
      demo: "https://github.com/diegoivg98/Coinbase",
      code: "https://diegoivg98.github.io/Coinbase/",
    },
    {
      id: 7,
      src: CasoFonasa,
      code: "https://github.com/diegoivg98/Prueba-Fonasa",
    },
    {
      id: 8,
      src: SistemaTicket,
      code: "https://github.com/diegoivg98/Sistema-Ticket",
    }
  ];

  return (
    <div name="works" className="w-full text-slate-900 bg-[#dfe0e2]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-slate-900">
            Proyectos
          </p>
          <p className="py-6">Revisa algunos de mis proyectos</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {proyectos.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demo && (
                  <a href={demo}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                )}
                <a href={code}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
