"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (

    <section id="projects" className="flex w-full flex-col items-center gap-10 px-6 py-16 md:py-24 text-center sm:px-16 bg-primary-100">
      <h1 className="text-[26px] font-semibold leading-tight tracking-tight text-primary-950 dark:text-zinc-50 sm:text-4xl">
        Proyectos de diseño y desarrollo web realizados
      </h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        <motion.div
          className="min-h-64 md:min-h-72 flex flex-col gap-5 rounded-lg bg-primary-50 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <video
              className="absolute inset-0 h-full w-full scale-125 object-cover"
              src="/catalogoWeb.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="flex items-center justify-between gap-2 px-6">
            <h2 className="text-xl text-primary-900 ">
              Catalogo Web
            </h2>
            <FiExternalLink className="text-primary-500 text-2xl cursor-pointer" />
          </div>
        </motion.div>
        <motion.div
          className="min-h-64 md:min-h-72 flex flex-col gap-5 rounded-lg bg-primary-50 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/landing-page.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="flex items-center justify-between gap-2 px-6">
            <h2 className="text-xl text-primary-900 ">
              Sistema de visitas
            </h2>
            <FiExternalLink className="text-primary-500 text-2xl cursor-pointer" />
          </div>
        </motion.div>
        <motion.div
          className="min-h-64 md:min-h-72 flex flex-col gap-5 rounded-lg bg-primary-50 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/landing-page.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="flex items-center justify-between gap-2 px-6">
            <h2 className="text-xl text-primary-900 ">
              Landing Page
            </h2>
            <FiExternalLink className="text-primary-500 text-2xl cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
