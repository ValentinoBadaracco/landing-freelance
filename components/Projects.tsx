"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import LazyVideo from "@/components/LazyVideo";

export default function Projects() {
  return (

    <section id="projects" className="relative isolate flex w-full flex-col items-center gap-10 overflow-hidden px-6 py-16 md:py-24 text-center sm:px-16 bg-primary-200">
      <div className="absolute -top-12 right-20 h-36 w-36 rounded-full bg-primary-500 -z-10 hidden md:block" />
      <div className="absolute bottom-8 -left-8 h-24 w-24 rounded-full border-4 border-primary-900 -z-10 hidden md:block" />
      <div className="absolute top-24 left-10 h-14 w-14 rotate-12 rounded-lg bg-primary-500 -z-10 hidden md:block" />

      <h1 className="text-[26px] font-semibold leading-tight tracking-tight text-primary-950 sm:text-4xl">
        Proyectos de diseño y desarrollo web realizados
      </h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        <motion.div
          className="min-h-64 md:min-h-72 flex flex-col gap-5 rounded-lg bg-primary-50 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <LazyVideo
              className="absolute inset-0 h-full w-full scale-125 object-cover"
              src="/catalogoWeb.mp4"
            />
          </div>
          <div className="flex flex-col  items-start gap-3 px-6 pb-6">
            <div className="flex items-center justify-between gap-2 w-full">

              <h2 className="text-xl text-primary-900 ">
                Catálogo Web
              </h2>
              <Link
                href="https://catalogo-web-rose-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-500 border border-primary-300 rounded-full px-3 py-1"
              >
                <FiExternalLink className="text-primary-500 text-2xl cursor-pointer" />
              </Link>
            </div>
            <p className="text-primary-800 text-[14px] leading-relaxed font-body text-start">
              Catálogo de productos con carrito, pedidos por WhatsApp y panel de administración propio con posibilidad
              de importar archivos excel para cargar productos y actualizar precios.
            </p>

          </div>
        </motion.div>
        <motion.div
          className="min-h-64 md:min-h-72 flex flex-col gap-5 rounded-lg bg-primary-50 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <LazyVideo
              className="absolute inset-0 h-full w-full scale-135 object-cover"
              src="/visitas.mp4"
            />
          </div>
          <div className="flex flex-col items-start gap-3 px-6 pb-6">
            <div className="flex items-center justify-between gap-2 w-full">
              <h2 className="text-xl text-primary-900 ">
                Sistema de visitas
              </h2>
              <span className="text-xs text-primary-500 border border-primary-300 rounded-full px-1.5 md:px-3 py-1">
                Uso privado
              </span>
            </div>
            <p className="text-primary-800 text-[14px] leading-relaxed font-body text-start">
              Gestión de visitas comerciales con agenda, carga de clientes y ruteo optimizado en mapa.
              También cuenta con un panel de administración para la gestión de usuarios, estadísticas y avisos.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="min-h-64 md:min-h-72 flex flex-col gap-5 rounded-lg bg-primary-50 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <LazyVideo
              className="absolute inset-0 h-full w-full object-cover"
              src="/landing.mp4"
            />
          </div>
          <div className="flex flex-col items-start gap-3 px-6 pb-6">
            <div className="flex items-center justify-between gap-2 w-full">
              <h2 className="text-xl text-primary-900 ">
                Landing Page
              </h2>
              <span className="text-xs text-primary-500 border border-primary-300 rounded-full px-1.5 md:px-3 py-1">
                La estás viendo ahora
              </span>
            </div>
            <p className="text-primary-800 text-[14px] leading-relaxed font-body text-start">
              Página simple donde tu negocio se presenta: quién sos, qué ofrecés, y cómo contactarte,
              con un diseño rápido y enfocado en convertir visitas en clientes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
