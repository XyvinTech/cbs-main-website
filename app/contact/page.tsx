import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import dynamic from "next/dynamic";

// Dynamically import Map component to prevent SSR issues with Google Maps
const Map = dynamic(() => import("@/components/contact/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 flex items-center justify-center text-muted">
      Loading map...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Contact Us | CBS",
  description:
    "Get in touch with CBS for business transformation solutions and services in Oman.",
};

const CONTACT_INFO = [
  {
    icon: faMapMarkerAlt,
    title: "Visit Us",
    details: [
      "Office No. 534, 5th Floor,",
      "Maktabi Building , Wattayah",
      "Sultanate of Oman",
    ],
  },
  {
    icon: faPhone,
    title: "Call Us",
    details: ["+968-78788268"],
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    details: ["info@continuityoman.com"],
  },
  {
    icon: faClock,
    title: "Business Hours",
    details: [
      "Sunday - Thursday",
      "8:00 AM - 5:00 PM",
      "Closed on Fridays,",
      "Saturdays & Public Holidays",
    ],
  },
];

const INQUIRY_TYPES = [
  "General Inquiry",
  "Business Solutions",
  "Technology Services",
  "Training Programs",
  "Partnership Opportunities",
  "Career Opportunities",
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80">
              Have a question or need assistance? We're here to help. Reach out
              to us through any of our contact channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={info.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-lg font-bold text-heading mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-heading text-center mb-12">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#63c6f4] focus:border-[#0d7aad]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#63c6f4] focus:border-[#0d7aad]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Type of Inquiry
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#63c6f4] focus:border-[#0d7aad]">
                  <option value="">Select an option</option>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#63c6f4] focus:border-[#0d7aad]"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#0d7aad] text-white px-8 py-3 rounded-lg hover:bg-[#85c1dd] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section>
        <Map />
      </section>
    </main>
  );
}
