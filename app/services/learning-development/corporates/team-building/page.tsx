import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faComments,
  faHandshake,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Team Building Programs | CBS",
  description:
    "Build high-performing teams through interactive workshops and activities that enhance collaboration, communication, and trust.",
};

const KEY_FEATURES = [
  {
    icon: faUsers,
    title: "Team Dynamics",
    description: "Understand and optimize team interactions and relationships.",
  },
  {
    icon: faComments,
    title: "Communication Skills",
    description: "Develop effective communication strategies within teams.",
  },
  {
    icon: faHandshake,
    title: "Trust Building",
    description: "Foster trust and mutual respect among team members.",
  },
  {
    icon: faLightbulb,
    title: "Problem Solving",
    description: "Enhance collective problem-solving capabilities.",
  },
];

const PROGRAM_MODULES = [
  {
    title: "Team Assessment",
    topics: [
      "Individual strengths profiling",
      "Team dynamics evaluation",
      "Communication style analysis",
      "Collaboration patterns",
    ],
  },
  {
    title: "Interactive Workshops",
    topics: [
      "Team building exercises",
      "Communication workshops",
      "Problem-solving activities",
      "Trust-building sessions",
    ],
  },
  {
    title: "Action Planning",
    topics: [
      "Goal setting",
      "Role clarification",
      "Team agreements",
      "Progress monitoring",
    ],
  },
];

export default function TeamBuildingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              {
                label: "Learning & Development",
                href: "/services/learning-development",
              },
              {
                label: "For Corporates",
                href: "/services/learning-development/corporates",
              },
              { label: "Team Building" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Team Building Programs
            </h1>
            <p className="text-xl text-white/80">
              Build high-performing teams through interactive workshops and
              activities that enhance collaboration, communication, and trust
              within your organization.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Program Modules */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Program Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAM_MODULES.map((module, index) => (
              <div
                key={module.title}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="text-2xl font-bold text-primary mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-heading text-center mb-12">
              Program Benefits
            </h2>
            <div className="space-y-6">
              {[
                "Enhanced team collaboration and cohesion",
                "Improved communication across all levels",
                "Stronger problem-solving capabilities",
                "Increased employee engagement",
                "Better conflict resolution skills",
                "Higher team productivity and performance",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Build Stronger Teams Today
            </h2>
            <p className="text-white/80 mb-8">
              Ready to enhance your team's performance and collaboration?
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Request Training Details
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
