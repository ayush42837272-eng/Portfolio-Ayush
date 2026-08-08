"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryModal({
  images,
  isOpen,
  onClose,
  currentIndex,
  setCurrentIndex,
}) {
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project image gallery"
      className="
        fixed inset-0 bg-black/70 backdrop-blur-sm
        flex items-center justify-center z-50
      "
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-[95%] h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          key={images[currentIndex].url}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          drag="x"
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) nextImage();
            if (info.offset.x > 100) prevImage();
          }}
        >
          <Image
            src={images[currentIndex].url}
            width={1000}
            height={700}
            alt={`Project screenshot ${currentIndex + 1} of ${images.length}`}
            className="rounded-lg shadow-xl w-full object-contain"
          />
        </motion.div>

        <button
          onClick={prevImage}
          aria-label="Previous image"
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            bg-white dark:bg-black text-black dark:text-white
            px-3 py-2 rounded-full shadow hover:scale-110 transition
          "
        >
          ‹
        </button>

        <button
          onClick={nextImage}
          aria-label="Next image"
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            bg-white dark:bg-black text-black dark:text-white
            px-3 py-2 rounded-full shadow hover:scale-110 transition
          "
        >
          ›
        </button>

        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="
            absolute top-3 right-3 bg-red-500 text-white
            px-3 py-1 rounded-md shadow-md text-sm hover:bg-red-600
          "
        >
          ✕
        </button>
      </div>
    </div>
  );
}
