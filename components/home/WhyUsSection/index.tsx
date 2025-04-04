"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

const BENEFITS = [
  "100+ Years of Cumulative Industry Experience",
  "Certified Professional Team",
  "Customized Solutions",
  "24/7 Support & Maintenance",
  "Proven Track Record",
  "EMEA Market Understanding",
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-20">
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

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/why-us.webp"
                  alt="Why Choose Us"
                  className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
