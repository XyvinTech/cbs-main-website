"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-white overflow-hidden">
      {/* Background polygons */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/3 -translate-y-1/4">
          <div className="absolute w-full h-full bg-primary/5 clip-polygon-1" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] transform -translate-x-1/3 translate-y-1/4">
          <div className="absolute w-full h-full bg-primary/5 clip-polygon-3" />
        </div>
      </div>

      <Container className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center min-h-[600px] pt-20 pb-20 lg:py-32">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                <span className="text-primary">Empowering</span>
                <br />
                <span className="text-gray-900">Businesses</span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Helping organizations achieve continuous improvement through
              innovative solutions and expert guidance.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-medium inline-flex items-center text-lg">
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/services"
                className="group relative px-8 py-4 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
              >
                <div className="absolute inset-0 bg-gray-50" />
                <span className="relative text-gray-700 group-hover:text-primary font-medium inline-flex items-center text-lg">
                  Explore Services
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image inside animated polygon */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Image masked by polygon */}
              <img
                src="/images/arab.png" 
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover clip-polygon-hero"
              />

              {/* Animated polygon overlays */}
              <div className="absolute inset-0 bg-primary clip-polygon-hero opacity-10 animate-float" />
              <div className="absolute inset-0 bg-primary clip-polygon-hero opacity-10 animate-float-slow" />

              {/* Optional blur glow */}
              <div className="absolute inset-0 bg-white/50 clip-polygon-hero blur-2xl" />
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .clip-polygon-1 {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 70%);
        }
        .clip-polygon-3 {
          clip-path: polygon(0% 20%, 60% 20%, 100% 0%, 100% 100%, 0% 100%);
        }
        .clip-polygon-hero {
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
