"use client";

import { motion } from "framer-motion";

const items = [
    { number: "01", title: "Diseño y código en un mismo lugar", description: "No necesitás coordinar entre dos proveedores distintos." },
    { number: "02", title: "Comunicación directa", description: "Hablás conmigo, no con un intermediario." },
    { number: "03", title: "Se ve bien en cualquier pantalla", description: "Tus clientes te van a ver igual de bien desde un celular, computadora o tablet." },
    { number: "04", title: "Acompañamiento después de la entrega", description: "Seguís teniendo soporte para ajustes y dudas." },
]

export default function WhyMe() {
    return (
        <section id="why-me" className="flex w-full flex-col items-center justify-center gap-10 px-6 py-16 md:py-24 sm:px-16 bg-white">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-[26px] font-semibold text-primary-950 sm:text-4xl">
                    ¿Por qué elegirme?
                </h2>
            </div>

            <div className="justify-center grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
                {items.map((item, index) => (
                    <motion.div
                        key={item.number}
                        className="flex flex-col items-center gap-3 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="text-3xl font-semibold leading-none text-primary-500">
                            {item.number}
                        </span>
                        <div>
                            <p className="text-md font-medium text-primary-900">{item.title}</p>
                            <p className="text-sm leading-relaxed text-primary-700">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}