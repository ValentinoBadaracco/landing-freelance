"use client";

import { getWhatsappLink } from "@/lib/whatsapp";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiHelpCircle, FiLayout, FiShoppingCart } from "react-icons/fi";

export default function ServicesSection() {
    return (
        <section id="services" className="relative isolate flex w-full flex-col items-center gap-6 overflow-hidden px-6 py-16 md:py-24 text-center sm:px-16 bg-primary-200">
            <div className="absolute top-10 -right-6 h-24 w-24 rotate-12 rounded-lg bg-primary-500 -z-10 hidden md:block" />
            <div className="absolute -bottom-10 left-16 h-20 w-20 rounded-full bg-primary-900 -z-10 hidden md:block" />
            <div className="absolute top-1/3 -left-8 h-16 w-16 rounded-full border-4 border-primary-900 -z-10 hidden md:block" />
            <div className="absolute bottom-20 right-20 h-12 w-12 rounded-full bg-primary-900 opacity-15 -z-10 hidden md:block" />

            <motion.h1
                className="text-[26px] font-semibold leading-tight tracking-tight text-primary-950 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Servicios de diseño y desarrollo web
            </motion.h1>
            <div className="flex flex-col gap-6 sm:flex-row">
                <motion.div
                    className="min-h-64 max-w-sm flex flex-col justify-center items-center gap-6 flex-1 px-10 py-8 rounded-lg bg-primary-50 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex h-12 w-12 p-4 items-center justify-center rounded-lg bg-primary-200">
                            <FiLayout className="shrink-0 text-3xl text-primary-500" />
                        </div>
                        <h2 className="text-2xl font-semibold text-primary-900">
                            Landing Page
                        </h2>

                    </div>

                    <p className="text-primary-800">Una página simple donde tu negocio se presenta: quién sos, qué ofrecés, y cómo contactarte.</p>

                    <Link
                        href={getWhatsappLink("landing")}
                        className="mt-auto flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                    >
                        Consultar información
                    </Link>
                </motion.div>
                <motion.div
                    className="min-h-64 max-w-sm flex flex-col justify-center items-center gap-6 flex-1 px-10 py-8 rounded-lg bg-primary-50 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="flex flex-col items-center justify-center gap-4">

                        <div className="flex h-12 w-12 p-4 items-center justify-center rounded-lg bg-primary-200">
                            <FiShoppingCart className="shrink-0 text-3xl text-primary-500" />
                        </div>
                        <h2 className="text-2xl font-semibold text-primary-900">
                            Catalogo web
                        </h2>
                    </div>
                    <p className="text-primary-800">Mostrá tus productos, gestioná el stock y recibí pedidos por WhatsApp — todo desde un panel propio.</p>

                    <Link
                        href={getWhatsappLink("catalogo")}
                        className="mt-auto flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                    >
                        Consultar información
                    </Link>
                </motion.div>
                <motion.div
                    className="min-h-64 max-w-sm flex flex-col justify-center items-center gap-6 flex-1 px-10 py-8 rounded-lg bg-primary-50 shadow-[0_10px_40px_-15px_rgba(64,122,183,0.35)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex h-12 w-12 p-4 items-center justify-center rounded-lg bg-primary-200">
                            <FiHelpCircle className="shrink-0 text-4xl text-primary-500" />
                        </div>

                        <h2 className="text-2xl font-semibold text-primary-900">
                            ¿Necesitás otra cosa?
                        </h2>
                    </div>
                    <p className="text-primary-800">Comentame cual es tu necesidad y te ayudaré a encontrar la mejor solución para tu negocio</p>

                    <Link
                        href={getWhatsappLink("otro")}
                        className="mt-auto flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                    >
                        Consultar información
                    </Link>
                </motion.div>


            </div>
        </section>
    );
}
