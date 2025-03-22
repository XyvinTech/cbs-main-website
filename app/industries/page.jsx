"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faShoppingCart,
  faIndustry,
  faHandHoldingMedical,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

const INDUSTRIES = [
  {
    icon: faBuilding,
    title: "Financial Services",
    description:
      "Comprehensive solutions for banking, insurance, investment services, and fintech companies to enhance operational efficiency and customer experience.",
    href: "/industries/financial-services",
    subIndustries: [
      {
        name: "Banking",
        description:
          "Digital transformation solutions for traditional and digital banks.",
      },
      {
        name: "Insurance",
        description:
          "Claims processing automation and customer engagement tools.",
      },
      {
        name: "Investment Services",
        description: "Portfolio management and analytics platforms.",
      },
      {
        name: "Fintech Solutions",
        description: "Innovative financial technology applications.",
      },
    ],
  },
  {
    icon: faShoppingCart,
    title: "Retail & Consumer",
    description:
      "Retail solutions that help businesses streamline operations, enhance customer experience, and drive growth in the competitive consumer market.",
    href: "/industries/retail-consumer",
    subIndustries: [
      {
        name: "Retail FMCG",
        description:
          "Supply chain optimization and inventory management systems.",
      },
      {
        name: "E-commerce",
        description:
          "Online marketplace development and digital marketing solutions.",
      },
      {
        name: "Consumer Goods",
        description: "Distribution and logistics management platforms.",
      },
      {
        name: "Luxury & Fashion",
        description:
          "Brand experience enhancement and customer loyalty programs.",
      },
    ],
  },
  {
    icon: faIndustry,
    title: "Industrial & Manufacturing",
    description:
      "Industrial solutions that optimize production processes, improve quality control, and enhance overall manufacturing efficiency.",
    href: "/industries/industrial-manufacturing",
    subIndustries: [
      {
        name: "Manufacturing",
        description: "Production optimization and quality management systems.",
      },
      {
        name: "Automotive",
        description: "Supply chain management and dealer network solutions.",
      },
      {
        name: "Oil & Gas",
        description: "Operational safety and compliance management tools.",
      },
      {
        name: "Gem & Jewelry",
        description: "Inventory tracking and authentication systems.",
      },
    ],
  },
  {
    icon: faHandHoldingMedical,
    title: "Services & Others",
    description:
      "Specialized solutions for education, healthcare, telecom, and logistics sectors that address unique industry challenges and requirements.",
    href: "/industries/services",
    subIndustries: [
      {
        name: "Education",
        description:
          "Learning management systems and student engagement platforms.",
      },
      {
        name: "Healthcare",
        description: "Patient management and clinical workflow solutions.",
      },
      {
        name: "Telecom",
        description: "Network management and customer service platforms.",
      },
      {
        name: "Travel & Logistics",
        description: "Route optimization and delivery management systems.",
      },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industry Solutions
            </h1>
            <p className="text-xl text-white/80">
              Specialized solutions tailored to meet the unique challenges and
              requirements of various industries, delivering value through
              innovation and expertise.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Overview */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">
                Tailored Solutions for Every Industry
              </h2>
              <p className="text-muted mb-6">
                At CBS, we understand that different industries face unique
                challenges and requirements. Our team of experts develops
                specialized solutions that address these specific needs, helping
                businesses across various sectors thrive in an increasingly
                competitive landscape.
              </p>
              <p className="text-muted">
                From financial services to healthcare, retail to manufacturing,
                our industry-specific expertise allows us to deliver solutions
                that drive efficiency, enhance customer experience, and
                accelerate growth.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4">
                Our Industry Expertise
              </h3>
              <ul className="space-y-3">
                {INDUSTRIES.map((industry) => (
                  <li key={industry.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{industry.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={industry.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-2xl font-bold text-heading mb-4">
                  {industry.title}
                </h3>
                <p className="text-muted mb-6">{industry.description}</p>

                <h4 className="text-lg font-semibold text-heading mb-4">
                  Specialized Solutions:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {industry.subIndustries.map((subIndustry) => (
                    <div
                      key={subIndustry.name}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <h5 className="font-medium text-heading mb-2">
                        {subIndustry.name}
                      </h5>
                      <p className="text-sm text-muted">
                        {subIndustry.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Need a Customized Solution for Your Industry?
            </h2>
            <p className="text-white/80 mb-8">
              Contact our industry experts to discuss how our tailored solutions
              can address your specific business challenges and drive growth.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
