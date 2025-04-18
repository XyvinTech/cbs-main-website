"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import { useState } from "react";

const BENEFITS = [
  "100+ Years of Cumulative Industry Experience",
  "Certified Professional Team",
  "Customized Solutions",
  "24/7 Support & Maintenance",
  "Proven Track Record",
  "EMEA Market Understanding",
];

export default function WhyUsSection() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-white to-slate-50 py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider"
            >
              WHY CHOOSE US
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6"
            >
              <span className="text-primary">Your Trusted Partner</span>
              <br />
              <span className="text-heading">in Business Excellence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-10 text-lg"
            >
              With decades of experience and a deep understanding of the local
              market, we bring international best practices tailored to regional
              needs.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute -inset-3 bg-primary/10 rounded-full transition-all duration-300 ${
                        hoverIndex === index
                          ? "opacity-100 scale-110"
                          : "opacity-0 scale-100"
                      }`}
                    />
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={`relative text-primary text-xl transition-all duration-300 ${
                        hoverIndex === index ? "scale-125" : "scale-100"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      hoverIndex === index ? "text-primary" : "text-heading"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/5 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-lg z-0"></div>

              {/* Card with image */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#083c54]/10 to-[#083c54]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                {/* Border effect */}
                <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl"></div>

                {/* Content */}
                <div className="p-6">
                  <img
                    src="/images/why-us.webp"
                    alt="Why Choose Us"
                    className="rounded-lg shadow-lg w-full transform hover:scale-[1.02] transition-transform duration-500 clip-polygon-hero"
                  />

                  <div className="mt-6 p-4 bg-gradient-to-r from-slate-50 to-white rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Excellence in Action
                    </h3>
                    <p className="text-gray-600">
                      Our commitment to your success extends beyond mere service
                      delivery. We become your strategic partner in your growth
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
