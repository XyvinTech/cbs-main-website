"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/Front Panel-2.svg",
    "/images/Front Panel-3.svg",
    "/images/Front Panel-4.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] bg-[#ffffff] overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Enhanced Overlay System */}
      {/* <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-transparent" />
      </div>

      <Container className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center min-h-[600px] pt-20 pb-20 lg:py-32">
            <motion.h1
              className="text-xl md:text-2xl lg:text-5xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="leading-[1.3]">
                <span className="relative inline-block">
                  <span className="relative z-10">Empowering Businesses</span>
                  <span className="absolute inset-0 -skew-y-3 bg-primary/90 transform rotate-5" 
                    style={{
                      clipPath: 'polygon(0 10%, 100% 0, 95% 90%, 5% 100%)',
                      backgroundColor: '#45648c'
                    }}
                  />
                </span>
              </div>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-black max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Helping organizations achieve continuous improvement.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-transparent hover:text-primary border-2 border-black transition-colors inline-flex items-center"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-black text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center"
              >
                Products & Services
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Skyline Carousel */}
          <div className="relative h-[500px] w-full lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <img
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mb-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary w-8 shadow-lg"
                      : "bg-primary/30 hover:bg-primary/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}