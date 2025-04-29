import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current?.querySelectorAll<HTMLSpanElement>(".word");

    if (words) {
      gsap.fromTo(
        words,
        { opacity: 0.3, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
      <h1 className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400">
        About
      </h1>

      <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div ref={textRef}>
            <p className="md:text-lg font-medium text">
              {`Hello there! My name is Putera and I'm a front-end developer based in Bogor, specializing in crafting visually appealing and user-friendly websites. Currently pursuing my undergraduate degree in informatics, I focus on frontend web development, translating design concepts into seamless, responsive interfaces that enhance user experiences.`
                .split(" ")
                .map((word, index) => (
                  <span key={index} className="word inline-block opacity-30">
                    {word}&nbsp;
                  </span>
                ))}
            </p>
            <p className="mt-4 md:text-lg font-medium text">
              {`My journey in the world of technology began with a deep curiosity about how things work, from software to the technology behind it. This curiosity drove me to explore various programming languages ​​and technologies, which further strengthened my seriousness in the world of IT.`.split(" ")
                .map((word, index) => (
                  <span key={index} className="word inline-block opacity-30">
                    {word}&nbsp;
                  </span>
                ))}
            </p>

            {/* Button to Open Modal */}
            <a
              className="mt-9 group relative bg-slate-900 h-16 w-64 flex items-center  border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
              href="https://drive.google.com/uc?export=download&id=1lryqzu1KsrAamFgtOu3fEe8MabGEHzDM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover:text-emerald-300">Curriculum Vitae</span>
            </a>
          

          </div>
        </div>

        <div className="lg:w-1/3 flex justify-center items-center order-1 lg:order-2 mx-auto">
          <div className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-4/5">
            <Image
              src="/images/profile.jpg"
              height={1000}
              width={1000}
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
              alt="Rivaldo Tandoko"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
