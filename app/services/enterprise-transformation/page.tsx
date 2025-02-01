import { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Enterprise Transformation | CBS",
  description: "Enterprise transformation solutions for your business",
};

export default function EnterpriseTransformationPage() {
  return (
    <main>
      <section className="py-20 bg-primary text-white">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">
            Enterprise Transformation
          </h1>
          <p className="mt-4 text-lg text-white/80">
            End-to-end business transformation solutions
          </p>
        </Container>
      </section>

      {/* Content sections */}
      <section className="py-16">
        <Container>{/* Add your content here */}</Container>
      </section>
    </main>
  );
}
