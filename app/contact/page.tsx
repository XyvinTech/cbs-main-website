import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";

export const metadata: Metadata = {
  title: "Contact Us | Continuity Business Solutions",
  description: "Get in touch with us for business transformation solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="section-spacing">
        <ContactInfo />
      </div>
      <div className="section-spacing bg-gray-50">
        <ContactForm />
      </div>
      <div className="section-spacing">
        <Map />
      </div>
    </main>
  );
} 