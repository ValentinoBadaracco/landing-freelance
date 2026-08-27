"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiNodedotjs, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

const tecnologias = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
];

export default function AboutMe() {
    return (
        <section id="about" className="flex w-full flex-col gap-6 px-6 py-24 text-start sm:justify-around sm:flex-row  sm:px-16 bg-primary-200">
            <motion.div
                className="flex max-w-xl flex-col items-start gap-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-3xl font-semibold justify-center items-center leading-tight tracking-tight text-primary-900 dark:text-zinc-50 sm:text-4xl">
                    Sobre mí
                </h1>
                <h2 className="text-2xl text-primary-600 ">Valentino, estudiante de Ingeniería en Sistemas.</h2>
                <p className="max-w-2xl text-lg leading-8 text-primary-800">
                    Soy diseñador y desarrollador web, y me dedico a ayudar a negocios a
                    tener presencia online de forma simple y profesional. 
                    Combino diseño y código para armar páginas que no solo funcionan bien,
                    sino que también se ven bien — todo en un mismo lugar.


                </p>
                <p className="max-w-2xl text-lg leading-8 text-primary-800">
                    Trabajo de principio a fin en cada proyecto: desde la idea inicial
                    hasta la puesta en producción, sin intermediarios y con comunicación
                    directa en todo el proceso.
                </p>
            </motion.div>
            <motion.div
                className="flex min-h-64 w-full max-w-lg items-center justify-center self-center rounded-lg bg-primary-50 p-6 shadow-lg"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="grid grid-cols-3 gap-4">
                    {tecnologias.map(({ icon: Icon, name, color }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-2 rounded-lg bg-primary-100 px-6 py-6"
                        >
                            <Icon className="text-4xl" style={{ color }} />
                            <span className="text-sm font-medium text-primary-900">{name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
