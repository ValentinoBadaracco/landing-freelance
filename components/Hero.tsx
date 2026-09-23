"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Hero() {
  const laptopRef = useRef(null);
  const isLaptopInView = useInView(laptopRef, { margin: "-100px" });

  return (
    <section
      style={{ backgroundImage: "url('/hero.png')" }}
      className="relative flex min-h-[90vh] w-full flex-col items-start justify-center gap-6 overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-16 text-left sm:px-16 sm:py-10">
      <motion.div
        className="pointer-events-none absolute -right-10 top-1/2 z-0 hidden w-[75%] max-w-5xl -translate-y-1/2 sm:block"
        initial={{ opacity: 0, y: 120, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          ref={laptopRef}
          animate={
            isLaptopInView
              ? { scale: [1, 1.04, 1], rotate: [0, -1.5, 0, 1.5, 0] }
              : { scale: 1, rotate: 0 }
          }
          transition={
            isLaptopInView
              ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
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
        <motion.h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Diseño y desarrollo web para tu negocio
        </motion.h1>
        <motion.p
          className="max-w-md text-lg leading-8 text-primary-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Nos encargamos de todo el proceso: diseño, desarrollo y puesta en marcha
          de tu sitio web, sin necesidad de coordinar con terceros.
        </motion.p>
      </div>
      <motion.div
        className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <MotionLink
          href="#problem"
          whileHover={{ scale: 1.02 }}
          className="flex h-12 w-full text-primary-950 items-center justify-center rounded-full border border-solid border-primary-300  bg-primary-50/60 backdrop-blur-md hover:bg-primary-100 px-8 text-base sm:w-auto"
        >
          ¿Por qué necesito una página?
        </MotionLink>
        <MotionLink
          href="#services"
          whileHover={{ scale: 1.02 }}
          className="flex h-12 w-full items-center justify-center rounded-full bg-primary-500 px-6 text-base font-medium text-white transition-colors hover:bg-primary-600 sm:w-auto"
        >
          Quiero mi pagina
        </MotionLink>
      </motion.div>
    </section>
  );
}
