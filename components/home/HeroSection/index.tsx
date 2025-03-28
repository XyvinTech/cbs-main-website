"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        {/* Polygon Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/3 -translate-y-1/4">
          <div className="absolute w-full h-full bg-gradient-to-br from-primary/10 to-blue-500/10 clip-polygon-1" />
          <div className="absolute w-full h-full bg-gradient-to-tl from-blue-500/10 to-indigo-500/10 clip-polygon-2 animate-float-slow" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] transform -translate-x-1/3 translate-y-1/4">
          <div className="absolute w-full h-full bg-gradient-to-tr from-indigo-500/10 to-primary/10 clip-polygon-3" />
          <div className="absolute w-full h-full bg-gradient-to-bl from-primary/10 to-blue-500/10 clip-polygon-4 animate-float" />
        </div>
      </div>

      {/* Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="flex flex-col items-start justify-center min-h-[600px] pt-20 pb-20 lg:py-32">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-indigo-500/20 blur-xl clip-polygon-5" />
              <h1 className="relative text-4xl md:text-5xl lg:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-indigo-600">
                  Empowering
                </span>
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
              Helping organizations achieve continuous improvement through innovative solutions and expert guidance.
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 clip-polygon-button opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-medium inline-flex items-center text-lg">
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                href="/services"
                className="group relative px-8 py-4 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
              >
                <div className="absolute inset-0 bg-gray-50 clip-polygon-button" />
                <span className="relative text-gray-700 group-hover:text-primary font-medium inline-flex items-center text-lg">
                  Explore Services
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-indigo-500/5" />
              <div className="absolute inset-0 backdrop-blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 clip-polygon-hero opacity-20 animate-float" />
                <div className="absolute inset-0 bg-gradient-to-l from-primary via-blue-600 to-indigo-600 clip-polygon-hero opacity-20 animate-float-slow" />
                <div className="absolute inset-0 bg-white/50 clip-polygon-hero blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .clip-polygon-1 {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 70%);
        }
        .clip-polygon-2 {
          clip-path: polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%);
        }
        .clip-polygon-3 {
          clip-path: polygon(0% 20%, 60% 20%, 100% 0%, 100% 100%, 0% 100%);
        }
        .clip-polygon-4 {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        .clip-polygon-5 {
          clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%);
        }
        .clip-polygon-button {
          clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
        }
        .clip-polygon-hero {
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
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
