"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/25722059_oman_line.svg",
    "/images/25722059_oman_line.svg",
    "/images/25722059_oman_line.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] bg-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="pt-20 pb-20 lg:py-32">
            <motion.h1
              className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Empowering Businesses <div>
                
                Helping organizations achieve continuous improvement
                </div>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              End-to-end business transformation solutions helping organizations
              achieve continuous improvements through technology and innovation.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-[#0052cc] text-white px-8 py-3 rounded-lg hover:bg-[#397ee6] transition-colors inline-flex items-center"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#0052cc] text-[#0052cc] px-8 py-3 rounded-lg hover:bg-[#d2e0f5] transition-colors inline-flex items-center"
              >
                Products & Services
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Skyline Carousel */}
          <div className="relative h-full hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1, y: 20 }}
                animate={{ opacity: 0.9, scale: 1.2, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <div
                  className="absolute inset-0 bg-no-repeat bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${slides[currentSlide]})`,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary w-6"
                      : "bg-gray-300 hover:bg-gray-400"
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
