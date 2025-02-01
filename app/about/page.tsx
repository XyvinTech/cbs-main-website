import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import Values from "@/components/about/Values";
import History from "@/components/about/History";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us | Continuity Business Solutions",
  description: "Learn about our journey, vision, and the team behind Continuity Business Solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <div className="section-spacing">
        <VisionMission />
      </div>
      <div className="section-spacing bg-gray-50">
        <Values />
      </div>
      <div className="section-spacing">
        <History />
      </div>
      <div className="section-spacing bg-gray-50">
        <Team />
      </div>
    </main>
  );
} 