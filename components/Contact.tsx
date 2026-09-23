"use client";

import { getWhatsappLink } from "@/lib/whatsapp";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate flex w-full flex-col items-center gap-6 overflow-hidden px-6 py-16 md:py-24 text-center sm:px-16 bg-primary-900"
    >
      <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-primary-500 opacity-20 -z-10 hidden md:block" />
      <div className="absolute bottom-16 -right-8 h-36 w-36 rounded-full border-4 border-primary-400 opacity-25 -z-10 hidden md:block" />
      <div className="absolute top-10 right-24 h-16 w-16 rotate-12 rounded-lg bg-primary-500 opacity-20 -z-10 hidden md:block" />

      <motion.h1
        className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-primary-50 sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tu negocio merece estar online
      </motion.h1>
      <motion.p
        className="max-w-xl text-lg leading-8 text-primary-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Contanos qué necesitás y armamos juntos la página de tu negocio.
        Respuesta rápida por WhatsApp.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <MotionLink
          href={getWhatsappLink("consulta")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 items-center justify-center rounded-full bg-primary-500 px-6 text-base font-medium text-white transition-colors hover:bg-primary-600"
        >
          Contactanos
        </MotionLink>
      </motion.div>
    </section>
  );
}
