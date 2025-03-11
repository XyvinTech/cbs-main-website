"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

const CLIENTS = [
  { name: "client-1", logo: "/images/clients/1551874971_logo.jpg" },
  { name: "client-2", logo: "/images/clients/1639559063909.jpg" },
  { name: "client-3", logo: "/images/clients/almaha_new_1.png" },
  { name: "client-4", logo: "/images/clients/bahwan-cybertek.jpg-2.webp" },
  { name: "client-5", logo: "/images/clients/bms-auditing.jpg" },
  { name: "client-6", logo: "/images/clients/Cochin Gold Logo.png" },
  
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase text-sm"
          >
            {/* MEET OUR CLIENTS */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            Our Awesome Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-4 text-gray-600"
          >
            There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form.
          </motion.p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={80}
                className="object-contain h-16"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}