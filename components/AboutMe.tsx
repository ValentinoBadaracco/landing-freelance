"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="about" className="relative isolate flex w-full flex-col gap-6 overflow-hidden px-6 py-16 md:py-24 text-start sm:justify-around sm:flex-row  sm:px-16 bg-cream">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rotate-12 rounded-lg bg-primary-500 -z-10 hidden md:block" />
            <div className="absolute -top-8 -left-8 h-32 w-32 rotate-12 rounded-full bg-primary-500 -z-10 hidden md:block" />

            <motion.div
                className="flex max-w-xl flex-col items-start gap-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-semibold justify-center items-center leading-tight tracking-tight text-primary-900 sm:text-4xl">
                    Sobre mí
                </h1>
                <h2 className="text-2xl text-primary-600 ">Valentino, la persona detrás de Bada Studio.</h2>
                <p className="max-w-2xl text-lg leading-8 text-primary-800">
                    Desde siempre me gustó tanto programar como diseñar, y encontré en el
                    desarrollo web el lugar donde esas dos cosas se combinan. Me dedico a
                    crear soluciones digitales pensadas para las personas que las van a
                    usar: interfaces amigables y sistemas que de verdad le faciliten el día
                    a día a un negocio, no solo que se vean bien.
                </p>
                <p className="max-w-2xl text-lg leading-8 text-primary-800">
                    Trabajo cada proyecto de punta a punta — del diseño al desarrollo,
                    sin intermediarios y con comunicación directa en todo el proceso.
                </p>
                <p className="max-w-2xl text-lg leading-8 text-primary-800">
                    Estoy terminando Ingeniería en Sistemas, y este es el trabajo donde
                    aplico lo que voy aprendiendo.
                </p>
            </motion.div>
            <motion.div
                className="flex w-full max-w-lg items-center justify-center self-center"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src="/Logo.png"
                    alt="Bada Studio"
                    width={400}
                    height={400}
                    className="h-auto w-full"
                />
            </motion.div>
        </section>
    );
}
