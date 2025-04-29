import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function FooterSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto text-center lg:text-left overflow-y-hidden" id="footer">
            <div className="mb-10 text-gray-500 flex flex-col lg:flex-row justify-between text-sm md:text-base" data-aos="fade-up" data-aos-offset="0">
                <div>
                    <p className="hidden lg:block">
                        Coded in Visual Studio Code by{" "}
                        <Link href="https://github.com/Puteraeaa" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Putera (uta).
                        </Link>
                    </p>
                    <p className="hidden lg:block">
                        Built with{" "}
                        <Link href="https://nextjs.org/" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Next.js
                        </Link>
                        ,{" "}
                        <Link href="https://tailwindcss.com" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            TailwindCSS
                        </Link>
                        ,{" "}
                        <Link href="https://ui.aceternity.com" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Aceternity UI
                        </Link>
                        , and{" "}
                        <Link href="https://ui.shadcn.com" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Shadcn UI
                        </Link>
                        .
                    </p>

                    <p className="mt-4">
                        Inspired by{" "}
                        <Link href="https://fazzaamiarso-com-v3-svelte.vercel.app" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Fazza
                        </Link>
                        ,{" "}
                        <Link href="https://brittanychiang.com" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Britanny
                        </Link>
                        ,{" "}
                        <Link href="https://aafrzl.my.id" target="_blank" className="text-white/70 font-medium hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            Afrizal
                        </Link>
                        .
                    </p>
                </div>
                <div className="">
                    <p>© 2025 Muhamad Putera Alfadri -- Bogor, Indonesia</p>

                    <div className="mt-4 flex items-center gap-6 text-xl lg:text-2xl justify-center lg:justify-start">
                        <Link href="https://www.instagram.com/puteraeaa_/" className="hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            <FaInstagram />
                        </Link>
                        <Link href="https://github.com/Puteraeaa" className="hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            <FaGithub />
                        </Link>
                        <Link href="mailto:utasuta1234@gmail" className="hover:text-cyan-400 transition-all duration-150 ease-in-out">
                            <IoMdMail />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
