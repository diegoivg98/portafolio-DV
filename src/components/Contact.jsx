import React from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvdelzl");
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#b4d6c1] flex justify-center items-center py-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-slate-900">
            Contacto
          </p>
          <p className="py-4"></p>
        </div>
        <input
          className="bg-[#f5f5f5] p-2"
          id="name"
          type="text"
          name="name"
          required
        />
       
        <input
          className="my-4 p-2 bg-[#f5f5f5]"
          id="email"
          type="email"
          name="email"
          required
        />

        <textarea
          className="bg-[#f5f5f5] p-2"
          id="message"
          name="message"
          rows="10"
          required
        ></textarea>
        <button
          type="submit"
          className="text-slate-900 border-2 hover:bg-slate-400 hover:border-slate-400 rounded-lg px-4 py-3 my-8 mx-auto flex items-center"
        >
          Colaboremos juntos
        </button>
      </form>
    </div>
  );
};

export default Contact;
