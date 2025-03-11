"use client";

import { motion, useAnimation } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

const PARTNERS = [
  { name: "Partner 1", logo: "/images/partners/bahwan-cybertek.jpg-2.webp" },
  { name: "Partner 2", logo: "/images/partners/images-33.png" },
  { name: "Partner 3", logo: "/images/partner-3.webp" },
  { name: "Partner 4", logo: "/images/partner-4.webp" },
  { name: "Partner 5", logo: "/images/partner-1.webp" },
  { name: "Partner 6", logo: "/images/partner-2.webp" },
  { name: "Partner 7", logo: "/images/partners/logoblack.png" },
  { name: "Partner 8", logo: "/images/partners/TCI logo-Final-01.jpg" },
  { name: "Partner 9", logo: "/images/partners/xyvin.svg" },
];

export default function PartnersSection() {
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  // Calculate the necessary width for a single set of partners
  useEffect(() => {
    const calculateWidth = () => {
      // We'll use this to reset the animation when it reaches the end
      setWidth(100 / PARTNERS.length);
    };
    
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  useEffect(() => {
    const animateCarousel = async () => {
      // Create an infinite loop animation
      while (true) {
        await controls.start({
          x: `-${100}%`, // Move exactly one set of partners
          transition: {
            duration: 20, // Adjusted for better viewing experience
            ease: "linear",
          },
        });
        
        // Reset position without animation to create seamless loop
        await controls.set({ x: "0%" });
      }
    };
    
    animateCarousel();
    return () => controls.stop();
  }, [controls]);

  return (
    <section className="section-padding">
      <Container>
        <div className="text-center section-margin">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold"
          >
            {/* OUR PARTNERS */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <motion.div
            animate={controls}
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
          >
            {/* First set of partners */}
            {PARTNERS.map((partner, index) => (
              <div
                key={`first-${partner.name}-${index}`}
                className="grayscale hover:grayscale-0 transition-all hover-up px-1 flex-shrink-0"
                style={{ width: `${width}%` }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="object-contain mx-auto"
                  priority={index < 6}
                />
              </div>
            ))}
            
            {/* Duplicate set to create seamless loop */}
            {PARTNERS.map((partner, index) => (
              <div
                key={`second-${partner.name}-${index}`}
                className="grayscale hover:grayscale-0 transition-all hover-up px-1 flex-shrink-0"
                style={{ width: `${width}%` }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="object-contain mx-auto"
                  priority={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}