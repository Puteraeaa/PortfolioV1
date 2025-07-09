"use client";
import React, { useState, useEffect } from "react";
import RotatingText from "./RotatingText";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 7000); // Durasi loading (3 detik)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#020617] text-white z-50 transition-all duration-1000 ease-in-out ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-4 sm:gap-6 items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <h1 className="text-3xl sm:text-4xl font-bold animate-pulse">
            Muhamad Putera Alfadri
          </h1>
          <RotatingText
            texts={[
              "Full Stack Web Developer",
              "React & Laravel Specialist",
              "Tech Explorer",
            ]}
            mainClassName="px-3 text-cyan-400 text-3xl sm:text-4xl font-bold overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </div>
  );
}
