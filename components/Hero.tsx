"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full flex-col items-start justify-center gap-6 px-6 py-24 text-left sm:px-16 sm:py-32">
      <div
        style={{
          backgroundImage: "url('/hero-left-image.png')",
          backgroundPosition: "left -100px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 -z-20"
      />
      <div
        style={{
          backgroundImage: "url('/hero-right-image.png')",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maskImage: "linear-gradient(to right, transparent, black 25%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 25%)",
        }}
        className="absolute inset-y-0 right-0 -z-10 w-1/2"
      />
      <motion.div
        className="pointer-events-none absolute -right-10 bottom-0 -z-0 hidden w-[75%] max-w-5xl sm:block"
        initial={{ opacity: 0, y: 120, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1], rotate: [0, -1.5, 0, 1.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hero-laptop.png"
            alt="Página web mostrada en una notebook"
            width={1920}
            height={1080}
            priority
            className="w-full"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-start gap-6">
        <motion.h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-primary-950 dark:text-zinc-50 sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        >
          Diseño y desarrollo web para tu negocio
        </motion.h1>
        <motion.p
          className="max-w-md text-lg leading-8 text-primary-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Me encargo de todo el proceso: diseño, desarrollo y puesta en marcha
          de tu sitio web, sin necesidad de coordinar con terceros.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <MotionLink
          href="#problem"
          whileHover={{ scale: 1.02 }}
          className="flex h-12 text-primary-950 items-center justify-center rounded-full border border-solid border-primary-300  bg-primary-100/60 hover:bg-primary-100 px-8 text-base"
        >
          ¿Por qué necesito una página?
        </MotionLink>
        <MotionLink
          href="#services"
          whileHover={{ scale: 1.02 }}
          className="flex h-12 items-center justify-center rounded-full bg-primary-500 px-6 text-base font-medium text-background transition-colors hover:bg-primary-600"
        >
          Quiero mi pagina
        </MotionLink>
      </motion.div>
    </section>
  );
}
