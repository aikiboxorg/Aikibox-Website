import AikiboxNav from "@/components/aikibox/Nav";
import AikiboxHero from "@/components/aikibox/Hero";
import AikiboxServices from "@/components/aikibox/Services";
import AikiboxFooter from "@/components/aikibox/Footer";

export const metadata = {
  title: "AikiCore — AIKIBOX",
  description:
    "AikiCore plans, installs, and supports the network and IT infrastructure behind clinics, offices, and job sites.",
};

export default function FieldServicesPage() {
  return (
    <main className="bg-aiki-paper font-aiki-body text-aiki-ink">
      <AikiboxNav product="AikiCore" />
      <AikiboxHero />
      <AikiboxServices />
      <AikiboxFooter
        headline="Need it wired right the first time?"
        sub="Tell us the site, the scope, and the timeline. We'll take it from there."
      />
    </main>
  );
}
