import { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Our Specialization | Continuity Business Solutions",
  description: "Explore our specialized business transformation solutions.",
};

export default function SpecializationPage() {
  return (
    <main>
      <section className="py-20 bg-primary text-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Our Specialization
          </h1>
        </Container>
      </section>
      {/* Add more content here */}
    </main>
  );
}
