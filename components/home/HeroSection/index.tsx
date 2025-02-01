"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import InfinityAnimation from "@/components/ui/animations/InfinityAnimation";
import Link from "next/link";

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
    <section className="relative min-h-[600px] bg-primary text-white overflow-hidden">
      {/* Wave Animation Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <motion.path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.1"
            initial={{ y: 0 }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.1"
            initial={{ y: 0 }}
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

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
      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center hero-grid">
          <div className="space-y-4 md:space-y-6 hero-content">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-sm font-semibold tracking-wider inline-block text-white/80"
            >
              BUSINESS TRANSFORMATION
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold hero-title text-white/100"
            >
              Solving today's challenges, readying for tomorrow.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-base md:text-lg text-white/80 max-w-lg mx-auto lg:mx-0 hero-description"
            >
              Reshaping business models with an ecosystem approach to deliver
              lasting impact for our clients and communities.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 hero-buttons"
            >
              <Link href="/services" className="btn btn-primary group">
                Products & Services
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link href="/contact" className="btn btn-outline group">
                Contact Us
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          <div className="relative">
            <InfinityAnimation />
          </div>
        </div>
      </Container>

      {/* Ensure no invisible overlays block the navbar */}
      <div className="absolute inset-x-0 -top-20 h-20 z-[-1]" />
    </section>
  );
}
