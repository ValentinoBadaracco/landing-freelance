"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiBriefcase, FiFolder, FiMenu, FiPhone, FiUser, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-primary-100 bg-cream/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 gap-8 sm:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/BSLogo.png"
            alt="Bada Studio"
            width={2000}
            height={2000}
            className="h-14 w-auto rounded-full"
          />
          <span className="text-xl font-heading text-primary-950">
            Bada Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-lg font-body text-primary-900 sm:flex">
          <Link href="#services" className="hover:text-primary-500 transition-colors">
            Servicios
          </Link>
          <Link href="#projects" className="hover:text-primary-500 transition-colors">
            Proyectos
          </Link>
          <Link href="#about" className="hover:text-primary-500 transition-colors">
            Sobre mí
          </Link>
          <Link href="#contact" className="rounded-full bg-primary-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center text-primary-900 sm:hidden"
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-3 border-t border-primary-100 px-6 py-6 text-lg font-body text-primary-900 sm:hidden"
          >
            <Link href="#services" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:text-primary-500 transition-colors">
              <FiBriefcase className="text-xl text-primary-500" />
              Servicios
            </Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:text-primary-500 transition-colors">
              <FiFolder className="text-xl text-primary-500" />
              Proyectos
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:text-primary-500 transition-colors">
              <FiUser className="text-xl text-primary-500" />
              Sobre mí
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-primary-600 outline-none"
            >
              <FiPhone className="text-lg" />
              Contacto
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
