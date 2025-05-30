"use client";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/ui/hero-section";
import Loading from "@/components/ui/loading";
import AboutSection from "@/components/ui/about-section";
import ProjectsSection from "@/components/ui/projects-section";
import TechnologiesSection from "@/components/ui/technologies-section";
import ContactSection from "@/components/ui/contact-section";
import FooterSection from "@/components/ui/footer-section";
import Navbar from "@/components/ui/navbar";
import SertifikatSection from "@/components/ui/sertifikat-section";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 8000); // 5000 milliseconds = 5 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Aos.init({
            offset: 100,
            once: true,
        });
    });

    return (
        <main className="">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="" id="home">
                    <Navbar />

                    <HeroSection />

                    <AboutSection />

                    <SertifikatSection />

                    <ProjectsSection />

                    <TechnologiesSection />

                    <ContactSection />

                    <FooterSection />
                </div>
            )}
        </main>
    );
}
