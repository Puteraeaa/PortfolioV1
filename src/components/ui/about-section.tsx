import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef,useState } from "react";

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
      <h1
        className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400"
        data-aos="fade"
      >
        About
      </h1>

      <div
        className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center"
        data-aos="fade-up"
      >
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
              {`My journey in the world of technology began with a deep curiosity about how things work, from software to the technology behind it. This curiosity drove me to explore various programming languages ​​and technologies, which further strengthened my seriousness in the world of IT. After growing a great interest in this field, I decided to continue the steps by choosing a vocational school as a place for me to study. I chose the Software and Game Development (PPLG) major as the first step to deepen my knowledge of technology. This major gave me the opportunity to learn the basics of software development, design applications, and create technology-based solutions. I can explore more things, hone my skills, and prepare myself for a career journey in the ever-growing world of technology.`.split(" ")
                .map((word, index) => (
                  <span key={index} className="word inline-block opacity-30">
                    {word}&nbsp;
                  </span>
                ))}
            </p>

            <button 
              onClick={() => setIsOpen(true)}
            className="group relative bg-slate-900 top-10 h-16 w-64 border-2 border-teal-600 text-white text-base font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110">
              <span className="group-hover:text-emerald-300">Curriculum Vitae</span>
            </button>
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

      {isOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
    onClick={() => setIsOpen(false)} // Close modal on overlay click
  >
    {/* Modal Content */}
    <div
      className="bg-[#020817] rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl p-4 md:p-6 relative mx-2 sm:mx-4"
      onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
    >
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 focus:outline-none"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      {/* Modal Header */}
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-white text-center">
        Curriculum Vitae
      </h2>

      {/* iframe Content */}
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <iframe
          src="https://drive.google.com/file/d/1lryqzu1KsrAamFgtOu3fEe8MabGEHzDM/preview"
          title="Google Drive Content"
          className="w-full h-full rounded-lg scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default AboutSection;
