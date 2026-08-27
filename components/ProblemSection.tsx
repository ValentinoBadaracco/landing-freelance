"use client";

import { motion } from "framer-motion";
import { FiClock, FiSearch, FiTrendingUp, FiUsers } from "react-icons/fi";

const beneficios = [
  {
    icon: FiSearch,
    title: "Te encuentran en Google",
    description:
      "Te encuentran antes de que te contacten",
  },
  {
    icon: FiUsers,
    title: "Más confianza",
    description:
      "Brinda a tu negocio una imagen profesional y genera credibilidad frente a tus clientes.",
  },
  {
    icon: FiClock,
    title: "Disponible las 24 horas",
    description:
      "Disponible las 24 horas, sin que estés atendiendo",
  },
  {
    icon: FiTrendingUp,
    title: "Crece con tu negocio",
    description:
      "Sumá productos, servicios o secciones nuevas a medida que tu negocio va creciendo.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="flex w-full items-between items-center gap-10 px-6 text-center sm:px-16 bg-primary-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold leading-tight text-start tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
          Estar online ya no es una opción,
        </h1>
        <h1 className="text-2xl font-semibold leading-tight text-start tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
          es necesario
        </h1>
        <div className="mt-6 text-lg leading-8 text-primary-800 flex flex-col text-start">
          <p className="mt-6 text-lg leading-8 text-primary-800">
            Para muchos clientes, tu página web es la primera impresión que reciben de tu negocio —
            antes de hablar con vos, antes de verlo en persona.
            Una página bien hecha transmite que tenes un negocio serio y profesional, incluso antes del primer contacto.
          </p>
          <p className="mt-6 text-lg leading-8 text-primary-800">
            En la era digital, tu página web es tu carta de presentación.
            Una página web bien diseñada y funcional no solo atrae a más clientes,
            sino que también genera confianza y credibilidad en tu negocio.

          </p>

        </div>


      </motion.div>

      <div className="flex w-full flex-col items-center gap-10 px-6 py-24 text-center sm:px-16">

        <div className="flex w-full min-w-xl gap-6 items-start justify-center flex-wrap">
          {beneficios.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="flex w-xl items-center justify-start gap-4 text-start rounded-lg bg-primary-50 px-6 py-8 shadow-lg"
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
