"use client";

import Carousel from "./components/Carousel";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState("Antigua");

  const destinations = {
    Antigua: {
      title: "Conoce La Antigua Guatemala",
      description:
        "Antigua Guatemala es un destino lleno de historia, cultura y belleza. Explora sus calles empedradas, disfruta de su arquitectura colonial y vive una experiencia inolvidable con nuestros servicios de transporte ejecutivo y turístico.",
      image: "/assets/Antigua-conoce.jpg",
      link: "/destinations/antigua",
    },
    Peten: {
      title: "Conoce Petén",
      description:
        "Petén es un lugar con mucha cultura Maya. Guarda secretos que hasta la fecha siguen ocultos, vive la experiencia de conocer sobre la historia de nuestros antepasados.",
      image: "/assets/Tikal-conoce.jpg",
      link: "/destinations/peten",
    },
    Panajachel: {
      title: "Conoce Panajachel",
      description:
        "Panajachel, el corazón del Lago de Atitlán, te ofrece paisajes impresionantes y una conexión única con la naturaleza y las tradiciones mayas. ¡Es un destino que no te puedes perder!",
      image: "/assets/Pana-conoce.jpg",
      link: "/destinations/panajachel",
    },
    Chichicastenango: {
      title: "Conoce Chichicastenango",
      description:
        "Chichicastenango, un lugar que se caracteriza por sus colores vivos y sus festivales que transmiten cultura y tradición",
      image: "/assets/chichi-conoce.jpg",
      link: "/destinations/panajachel",
    },
    Rio: {
      title: "Conoce el Castillo de San Felipe",
      description:
        "Chichicastenango, un lugar que se caracteriza por sus colores vivos y sus festivales que transmiten cultura y tradición",
      image: "/assets/CastilloSF-conoce.jpg",
      link: "/destinations/rio_dulce",
    },
  };

  const handleDestinationChange = (direction: string) => {
    const keys = Object.keys(destinations);
    const currentIndex = keys.indexOf(selectedDestination);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % keys.length
        : (currentIndex - 1 + keys.length) % keys.length;

    setSelectedDestination(keys[nextIndex]);
  };

  return (
    <main className="bg-dark-purple min-h-screen">
      {/* Header con el Carousel */}
      <header className="relative">
        <Carousel />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-4xl font-bold">
            ¡Are you ready to know Guatemala?!
          </h1>
        </div>
      </header>

      {/* Sección Conoce */}
      <section className="py-16 px-8 bg-purple text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen */}
          <div className="relative h-[600px] w-full">
            <Image
              src={destinations[selectedDestination].image}
              alt={destinations[selectedDestination].title}
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
          {/* Contenido */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
              {destinations[selectedDestination].title}
            </h2>
            <p className="text-lg leading-7 mb-6">
              {destinations[selectedDestination].description}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => handleDestinationChange("prev")}
              >
                Anterior
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                onClick={() => handleDestinationChange("next")}
              >
                Siguiente
              </button>
              <Link
                href={destinations[selectedDestination].link}
                className="bg-yellow text-dark-purple px-6 py-2 font-bold rounded-lg hover:bg-dark-purple hover:text-white transition"
              >
                Saber más
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-white">
            Esta es una prueba
          </h1>
        </div>
      </section>
    </main>
  );
}
