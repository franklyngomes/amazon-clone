"use client";
import React, { useState } from "react";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  React.useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
  }, [])

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100 z-10 pointer-events-none" />
      <div>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full  object-cover transition-all duration-500 ease-in-out "
        />
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70 z-11"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70 z-11"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
