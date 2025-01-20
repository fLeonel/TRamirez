"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; // Importa estilos de slick
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "/assets/panajachel.avif",
    "/assets/tecpan.avif",
    "/assets/antigua.avif",
    "/assets/panajachel-1.avif",
    "/assets/peten.avif",
    "/assets/volcan1.avif",
  ];

  return (
    <div className="w-screen">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="h-[750px]">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
