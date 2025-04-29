"use client";
import React, { useState, useEffect } from "react";

export default function   Loading() {
  const [text1, setText1] = useState(""); // Untuk teks pertama
  const [text2, setText2] = useState(""); // Untuk teks kedua
  const fullText1 = "Muhamad Putera Alfadri";
  const fullText2 = "Portfolio";

  useEffect(() => {
    // Mulai animasi teks pertama dan kedua secara bersamaan
    scrambleText(fullText1, setText1, 150); 
    scrambleText(fullText2, setText2, 150);
  }, []);

  const scrambleText = (
    fullText: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    speed: number
  ) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let scrambled = fullText
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");

    setText(scrambled);

    let i = 0;
    const interval = setInterval(() => {
      scrambled = scrambled
        .split("")
        .map((_, index) => {
          if (index < i) return fullText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setText(scrambled);

      if (i >= fullText.length) {
        clearInterval(interval);
        setText(fullText);
      }
      i++;
    }, speed);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 sm:gap-4">
        <div className="flex gap-2 sm:gap-4">
          <h1 className="text-xl md:text-3xl font-semibold text-cyan-400">
            {text1}
          </h1>
          <h1 className="text-xl md:text-3xl font-semibold">{text2}</h1>
        </div>
      </div>
    </div>
  );
}
