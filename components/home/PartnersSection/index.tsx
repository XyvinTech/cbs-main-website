"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

const PARTNERS = [
  { name: "Partner 1", logo: "/images/partner-1.webp" },
  { name: "Partner 2", logo: "/images/partner-2.webp" },
  { name: "Partner 3", logo: "/images/partner-3.webp" },
  { name: "Partner 4", logo: "/images/partner-4.webp" },
  { name: "Partner 5", logo: "/images/partner-1.webp" },
  { name: "Partner 6", logo: "/images/partner-2.webp" },
];

export default function PartnersSection() {
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
            OUR PARTNERS
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all hover-up p-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="mx-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 