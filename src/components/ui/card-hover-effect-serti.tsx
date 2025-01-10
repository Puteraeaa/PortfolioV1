import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        url: string;
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className={cn("w-full overflow-hidden ", className)}
        >
            {items.map((item, idx) => (
                <SwiperSlide key={item?.link || idx}>
                <Link
                    href={item?.link || "#"}
                    className={`relative group block p-2 h-full w-full ${
                        !item?.link ? "pointer-events-none cursor-not-allowed " : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <Image
                            src={item?.url || "/default-image.jpg"}
                            alt={item?.title || "Default Title"}
                            width={1920}
                            height={1080}
                            className="w-full h-auto rounded-md"
                        />
                        <CardTitle>{item?.title || "Untitled"}</CardTitle>
                        <CardDescription>{item?.description || "No description available."}</CardDescription>
                    </Card>
                </Link>
            </SwiperSlide>            
            ))}
                 <div className="custom-pagination "></div>
        </Swiper>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-slate-900 border border-transparent dark:border-white/[0.2] shadow-lg transform transition-transform duration-300 hover:scale-90 relative z-20",
          "md:p-4 lg:p-3" // Padding yang berbeda untuk ukuran layar yang lebih besar
        )}
      >
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };
  

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h4 className={cn("mt-4 text-zinc-100 font-bold tracking-wide md:text-lg", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <p className={cn("mt-1 text-zinc-400 tracking-wide leading-snug md:leading-relaxed md:text-base", className)}>{children}</p>;
};

export const CardTechStack = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <Badge className={cn("text-zinc-400 tracking-wide leading-relaxed text-xs", className)}>{children}</Badge>;
};
