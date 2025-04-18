"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import { useState, useEffect } from "react";

const BENEFITS = [
  "100+ Years of Cumulative Industry Experience",
  "Certified Professional Team",
  "Customized Solutions",
  "24/7 Support & Maintenance",
  "Proven Track Record",
  "EMEA Market Understanding",
];

export default function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const sectionElement = document.getElementById("why-us-section");
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.disconnect();
    };
  }, []);

  return (
    <section id="why-us-section" className="bg-white py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold"
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
              className="text-gray-600 mb-8"
            >
              With decades of experience and a deep understanding of the local
              market, we bring international best practices tailored to regional
              needs.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="relative text-primary text-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-heading group-hover:text-primary transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.9,
              }}
              transition={{ duration: 0.7 }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="relative w-[90%] h-[90%] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                {/* Layered design */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#de87a2] to-[#de87a2] opacity-90"></div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] opacity-5"></div>

                {/* Image with modern treatment */}
                <div className="absolute inset-0 p-3">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/images/why-us.webp"
                      alt="Why Choose Us"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Accent elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/4 translate-y-1/4"></div>

                {/* Frame accent */}
                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
