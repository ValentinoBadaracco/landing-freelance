"use client";

import { getWhatsappLink } from "@/lib/whatsapp";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center gap-6 px-6 py-16 md:py-24 text-center sm:px-16 bg-primary-900"
    >
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
        Contame qué necesitás y armamos juntos la página que tu negocio merece.
        Estoy disponible para responder tus consultas.
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
          Contactame
        </MotionLink>
      </motion.div>
    </section>
  );
}
