"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group h-full"
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300" />

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white text-xl">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        {/* Link/Button */}
        {href && (
          <div className="mt-auto">
            <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
              Learn More
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
