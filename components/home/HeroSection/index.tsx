"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import InfinityAnimation from "@/components/ui/animations/InfinityAnimation";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.2,
    },
  }),
};

export default function HeroSection() {
  return (
    <header className="bg-primary text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Arabic Text Overlay */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-[-2rem] top-[30%] -translate-y-1/2 text-[120px] md:text-[180px] font-arabic arabic-overlay pointer-events-none"
        style={{
          writingMode: "vertical-rl",
          height: "fit-content",
          transform: "translateY(-50%)",
          lineHeight: "1",
        }}
      >
        إستمرار
      </motion.div>

      {/* Main content */}
      <div className="relative z-[2]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center hero-grid">
            <div className="space-y-4 md:space-y-6 hero-content">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="text-sm font-semibold tracking-wider inline-block"
              >
                BUSINESS TRANSFORMATION
              </motion.span>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="text-3xl md:text-5xl lg:text-6xl font-bold hero-title"
              >
                Adopt. Adapt.
                <br />
                Grow.
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="text-base md:text-lg text-white/80 max-w-lg mx-auto lg:mx-0 hero-description"
              >
                End-to-end business transformation solutions that help
                organizations achieve continuous improvements through technology
                and innovation.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-4 hero-buttons"
              >
                <button className="btn btn-primary group">
                  Find Solution
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <button className="btn btn-outline group">
                  Contact Us
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </motion.div>
            </div>

            <div className="relative">
              <InfinityAnimation />
            </div>
          </div>
        </Container>
      </div>

      {/* Ensure no invisible overlays block the navbar */}
      <div className="absolute inset-x-0 -top-20 h-20 z-[-1]" />
    </header>
  );
}
