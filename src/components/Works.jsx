import React from "react";
import CoinBase from "../assets/proyectos/coinbase.jpeg";
import SistemaTicket from "../assets/proyectos/sistema-ticket.png";
import TextToSpeech from "../assets/proyectos/text-to-speech.png";
import Calculadora from "../assets/proyectos/calculadora.png";
import IronFly from "../assets/proyectos/iron-fly.png";
import Portfolio from "../assets/proyectos/portfolio.png";

const Works = () => {
  /* An array of objects. */
  const proyectos = [
    {
      id: 1,
      src: CoinBase,
    },
    {
      id: 2,
      src: SistemaTicket,
    },
    {
      id: 3,
      src: TextToSpeech,
    },
    {
      id: 4,
      src: Calculadora,
    },
    {
      id: 5,
      src: IronFly,
    },
    {
      id: 6,
      src: Portfolio,
    },
  ];

  return (
    <div
      name="works"
      className="w-full text-slate-900 bg-[#dfe0e2]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-slate-900">
            Proyectos
          </p>
          <p className="py-6">Proyectos</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {proyectos.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                  Demo
                </button>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
