import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Case Studies | CBS",
  description:
    "Explore our success stories and implementation cases across various industries.",
};

const CASE_STUDIES = [
  {
    title: "School Management System",
    industry: "Education & E-Learning",
    description:
      "Digitizing Oman's educational ecosystem with integrated technology solutions.",
    href: "/insights/case-studies/school-management-system",
    challenge:
      "Standardizing and streamlining educational processes across multiple institutions.",
  },
  {
    title: "Logistics Consultancy",
    industry: "Travel & Logistics",
    description:
      "Facilitating fleet expansion through an optimized loan application process.",
    href: "/insights/case-studies/logistics-consultancy",
    challenge: "Navigating complex financial and regulatory requirements for fleet growth.",
  },
  {
    title: "Retail Loyalty Platform",
    industry: "Retail & Fuel",
    description:
      "Boosting customer engagement across 240+ fuel stations with an innovative rewards program.",
    href: "/insights/case-studies/retail-loyalty-platform",
    challenge: "Driving app adoption and customer loyalty in a competitive market.",
  },
  {
    title: "Marine Loyalty Program",
    industry: "Retail & Fuel",
    description:
      "Developing a specialized rewards program for Oman's fishing community.",
    href: "/insights/case-studies/marine-loyalty-program",
    challenge: "Designing tailored benefits to meet the unique needs of fishermen.",
  },
  {
    title: "Jewelry Management System",
    industry: "Gem & Jewelry",
    description:
      "Automating gold-scheme business operations for improved efficiency and compliance.",
    href: "/insights/case-studies/jewelry-management-system",
    challenge: "Managing gold-scheme transactions and customer records efficiently.",
  },
  {
    title: "AML/CFT Training",
    industry: "Compliance & Risk Management",
    description: "Delivering compliance training for a leading precious metals trading firm.",
    href: "/insights/case-studies/aml-cft-training",
    challenge: "Ensuring adherence to Anti-Money Laundering (AML) and Counter Financing of Terrorism (CFT) regulations.",
  },
];


export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Case Studies" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Case Studies
            </h1>
            <p className="text-xl text-white/80">
              Discover how we've helped organizations across different
              industries overcome challenges and achieve their goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-medium text-primary mb-2">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted mb-4">{study.description}</p>
                <div className="mb-4 pt-4 border-t border-gray-100">
                  {/* <div className="text-sm font-medium text-heading mb-1">
                    Challenge:
                  </div>
                  <p className="text-sm text-muted">{study.challenge}</p> */}
                </div>
                <span className="inline-flex items-center text-primary font-medium">
                  Read Full Case Study
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss how we can help your organization achieve its goals.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Contact Us
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
