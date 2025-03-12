"use client";

import { motion, useAnimation } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

const PARTNERS = [
  { name: "Partner 1", logo: "/images/partners/bahwan-cybertek.jpg-2.webp" },
  { name: "Partner 2", logo: "/images/partners/images-33.png" },
  { name: "Partner 3", logo: "/images/partners/logoblack.png" },
  { name: "Partner 4", logo: "/images/partners/TCI logo-Final-01.jpg" },
  { name: "Partner 5", logo: "/images/partners/xyvin.svg" },
];

export default function PartnersSection() {
  return (
    <section className="section-padding bg-gray-50 py-16">
      <Container className="max-w-screen-lg"> {/* Adjusted container width */}
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-sm tracking-wide"
          >
            {/* MEET OUR CLIENTS */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
          >
            Our Partners
          </motion.h2>
        </div>

        {/* Clients Grid */}
        <div className="w-full grid gap-5 justify-items-center">
          {/* Top Row - 3 Partners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {PARTNERS.slice(0, 3).map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center w-full max-w-[250px] h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={75}
                  className="object-contain p-4"
                  priority={true}
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Partners (50/50 space) */}
          <div className="grid grid-cols-2 gap-5 w-full">
            {PARTNERS.slice(3, 5).map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center w-full max-w-[250px] h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={75}
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}