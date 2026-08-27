import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-primary-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 gap-8 sm:px-16">
        <Link href="/" className="text-xl font-heading text-primary-950">
          Valentino Badaracco
        </Link>

        <nav className="hidden items-center gap-8 text-lg font-body text-primary-900 sm:flex">
          <Link href="#services" className="hover:text-primary-500 transition-colors">
            Servicios
          </Link>
          <Link href="#projects" className="hover:text-primary-500 transition-colors">
            Proyectos
          </Link>
          <Link href="#about" className="hover:text-primary-500 transition-colors">
            Acerca de mí
          </Link>
          <Link href="#contact" className="rounded-full bg-primary-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 outline-none">
            Contacto
          </Link>
        </nav>


      </div>
    </header>
  );
}
