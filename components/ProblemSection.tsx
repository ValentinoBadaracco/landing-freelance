"use client";

import { motion } from "framer-motion";
import { FiClock, FiGlobe, FiInbox, FiSearch } from "react-icons/fi";

const beneficios = [
  {
    icon: FiSearch,
    title: "Te encuentran en Google",
    description:
      "Te encuentran antes de que te contacten",
  },
  {
    icon: FiInbox,
    title: "Pedidos organizados",
    description:
      "Recibís los pedidos ordenados, sin perderte entre los mensajes del chat",
  },
  {
    icon: FiClock,
    title: "Disponible las 24 horas",
    description:
      "Disponible las 24 horas, sin que estés atendiendo",
  },
  {
    icon: FiGlobe,
    title: "Presencia online",
    description:
      "Aparecés en las búsquedas de Google cuando alguien busca tu negocio",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative isolate flex w-full flex-col items-center gap-10 overflow-hidden px-6 py-16 text-center sm:flex-row sm:px-16 sm:py-4 bg-cream">
      <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-primary-500 -z-10 hidden md:block" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border-4 border-primary-900 -z-10 hidden md:block" />
      <div className="absolute top-20 right-40 h-16 w-16 rotate-12 rounded-lg bg-primary-500 -z-10 hidden md:block" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[26px] font-semibold leading-tight text-start tracking-tight text-primary-900 sm:text-4xl">
          Estar online ya no es una opción,
          <br className="hidden sm:block" /> es necesario
        </h1>
        <div className="mt-6 text-lg leading-8 text-primary-800 flex flex-col text-start">
          <p className="mt-6 text-lg leading-8 text-primary-800">
            Para muchos clientes, tu página web es la primera impresión de tu negocio —
            antes de hablar con vos o de conocerte en persona. Sin ella, estás perdiendo
            pedidos y clientes que ni siquiera llegan a contactarte.
          </p>
        </div>


      </motion.div>

      <div className="relative z-10 flex w-full flex-col items-center gap-10 py-5 md:py-24 text-center sm:px-16">

        <div className="flex w-full gap-6 items-start justify-center flex-wrap">
          {beneficios.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="flex w-full max-w-xl sm:w-xl items-center justify-start gap-4 text-start rounded-lg bg-primary-50 px-6 py-8 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-200">
                <Icon className="shrink-0 text-3xl text-primary-500" />
              </div>
              <p className="text-primary-800">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
