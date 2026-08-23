import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Circles from "@/components/Circles";
import Stories from "@/components/Stories";
import { Cta, Footer } from "@/components/CtaFooter";

export const metadata = {
  title: "Vita — Small talk was never the point",
  description:
    "Vita gets you into real rooms with people who actually want to be there.",
};

export default function VitaPage() {
  return (
    <main className="bg-ink font-body text-paper">
      <Nav />
      <Hero />
      <HowItWorks />
      <Circles />
      <Stories />
      <Cta />
      <Footer />
    </main>
  );
}
