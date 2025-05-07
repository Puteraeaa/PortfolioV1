import { RiArrowDownSLine } from "react-icons/ri";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import Spline from "@splinetool/react-spline";


export default function HeroSection() {
  const lenis = useLenis();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020617] ">
      <StarsBackground />
      <ShootingStars />

      {/* Hero Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto h-full px-6 md:px-12 gap-12 lg:gap-20">
        
        {/* Left: Text */}
        <div className="flex-1 pt-20 lg:pt-0 lg:text-left">
  <h1 className="text-4xl sm:text-5xl md:text-3xl font-bold leading-tight tracking-tight">
    <span className="inline-block animate-fade-in-up delay-200">Hi, I&apos;m</span><br />
    <span className="bg-cyan-400 text-transparent bg-clip-text animate-gradient-text text-[2.5rem] sm:text-[3.4rem] md:text-[3rem]">
      Muhamad Putera Alfadri
    </span><br />
    <span className="text-white">
      A <span className="text-cyan-400">Fullstack Web Developer</span><br />
      who crafts high-quality web applications.
    </span>
  </h1>

  <p className="mt-6 text-lg font-medium text-white">
    Bridging design and logic to build seamless digital experiences.
  </p>
</div>


        {/* Right: 3D Spline */}
        <div className="hidden sm:flex flex-1 w-full max-w-xl h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Spline scene="https://prod.spline.design/EA6z5qtSuY5avEaE/scene.splinecode" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-0 left-0 w-full flex justify-center pb-10 cursor-pointer z-20"
        onClick={() =>
          lenis?.scrollTo("#about", {
            offset: -100,
            easing: cubicBezier(0.65, 0, 0.35, 1),
            duration: 1,
          })
        }
      >
        <div className="flex flex-col items-center animate-fade-in-up delay-1000">
          <span className="animate-bounce text-3xl text-white">
            <RiArrowDownSLine />
          </span>
          <span className="font-medium text-white">Scroll down</span>
        </div>
      </div>
    </section>
  );
}
