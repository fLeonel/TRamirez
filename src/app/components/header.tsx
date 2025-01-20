"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-dark-purple shadow-md z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Selector de Idioma */}
        <div className="flex items-center space-x-4">
          {/* Botón de Selección de Idioma */}
          <button
            className="text-yellow border border-yellow rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow"
          >
            🌐 EN
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/assets/logo.png"
              alt="Tramirez Logo"
              className="h-10"
            />
            <span className="text-lg font-bold text-yellow">TRAMIREZ</span>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-yellow hover:text-teal">
            Sobre Nosotros
          </Link>
          <Link href="/tourism" className="text-yellow hover:text-teal">
            Turismo
          </Link>
          <Link href="/executives" className="text-yellow hover:text-teal">
            Ejecutivos
          </Link>
          <Link href="/contact" className="text-yellow hover:text-teal">
            Contáctanos
          </Link>
        </nav>

        {/* Menú Hamburguesa (Móvil) */}
        <div className="md:hidden">
          <button
            className="text-yellow focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="md:hidden bg-dark-purple shadow-md border-t border-purple">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link
              href="/about"
              className="text-yellow hover:text-teal"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/tourism"
              className="text-yellow hover:text-teal"
              onClick={() => setMenuOpen(false)}
            >
              Turismo
            </Link>
            <Link
              href="/executives"
              className="text-yellow hover:text-teal"
              onClick={() => setMenuOpen(false)}
            >
              Ejecutivos
            </Link>
            <Link
              href="/contact"
              className="text-yellow hover:text-teal"
              onClick={() => setMenuOpen(false)}
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
