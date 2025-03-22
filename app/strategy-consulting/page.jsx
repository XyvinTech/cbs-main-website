"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGears,
  faRocket,
  faChartPie,
  faBriefcase,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

const CONSULTING_SERVICES = [
  {
    icon: faChartLine,
    title: "Strategy Formulation & Implementation",
    description:
      "Create and execute clear, actionable strategies aligned with your vision and business goals.",
    href: "/services/strategy-consulting/strategy-formulation",
    features: [
      "Strategic Vision Development",
      "Market Opportunity Analysis",
      "Competitive Positioning",
      "Implementation Roadmaps",
    ],
  },
  {
    icon: faGears,
    title: "Process Re-Engineering & Automation",
    description:
      "Optimize workflows and automate processes to enhance operational efficiency and reduce costs.",
    href: "/services/strategy-consulting/process-reengineering",
    features: [
      "Business Process Analysis",
      "Workflow Optimization",
      "Automation Implementation",
      "Continuous Improvement",
    ],
  },
  {
    icon: faRocket,
    title: "Business Performance & Growth",
    description:
      "Drive measurable improvements and accelerate business growth through strategic initiatives.",
    href: "/services/strategy-consulting/performance-growth",
    features: [
      "Performance Assessment",
      "Growth Strategy Development",
      "Business Model Innovation",
      "Expansion Planning",
    ],
  },
  {
    icon: faChartPie,
    title: "Data Analytics",
    description:
      "Transform data into actionable insights for better decision-making and strategic planning.",
    href: "/services/strategy-consulting/data-analytics",
    features: [
      "Data Strategy Development",
      "Analytics Implementation",
      "Insight Generation",
      "Dashboard Creation",
    ],
  },
  {
    icon: faBriefcase,
    title: "Business Advisory",
    description:
      "Expert guidance for navigating complex business challenges and capitalizing on opportunities.",
    href: "/services/strategy-consulting/business-advisory",
    features: [
      "Business Assessment",
      "Risk Management",
      "Strategic Decision Support",
      "Transformation Guidance",
    ],
  },
];

export default function StrategyConsultingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Strategy & Consulting" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Strategy & Consulting
            </h1>
            <p className="text-xl text-white/80">
              Strategic consulting services to drive business growth, optimize
              operations, and navigate complex challenges in today's competitive
              landscape.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">
                Transform Your Business with Strategic Guidance
              </h2>
              <p className="text-muted mb-6">
                At CBS, we help businesses navigate complex challenges and seize
                new opportunities through comprehensive consulting services. Our
                experienced consultants work closely with your team to develop
                tailored strategies that drive sustainable growth and
                operational excellence.
              </p>
              <p className="text-muted">
                From strategy formulation to process optimization, data
                analytics to business performance, our consulting approach
                combines industry expertise with innovative methodologies to
                deliver measurable results for your organization.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4">
                Our Consulting Approach
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <span className="font-medium text-heading">Discover</span>
                    <p className="text-sm text-muted">
                      We analyze your current situation to understand challenges
                      and opportunities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <span className="font-medium text-heading">Strategize</span>
                    <p className="text-sm text-muted">
                      We develop custom strategies tailored to your business
                      needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <span className="font-medium text-heading">Implement</span>
                    <p className="text-sm text-muted">
                      We execute strategies with clear roadmaps and actionable
                      plans
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <div>
                    <span className="font-medium text-heading">
                      Measure & Optimize
                    </span>
                    <p className="text-sm text-muted">
                      We track performance and continuously refine for optimal
                      results
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold text-heading mb-8 text-center">
            Our Consulting Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn More
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
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-8">
              Contact our strategy experts to discuss how our consulting
              services can help you achieve your business objectives and drive
              sustainable growth.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
