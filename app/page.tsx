import AikiboxNav from "@/components/aikibox/Nav";
import AikiboxHomeHero from "@/components/aikibox/HomeHero";
import AikiboxProducts from "@/components/aikibox/Products";
import AikiboxFooter from "@/components/aikibox/Footer";

export default function Home() {
  return (
    <main className="bg-aiki-paper font-aiki-body text-aiki-ink">
      <AikiboxNav />
      <AikiboxHomeHero />
      <AikiboxProducts />
      <AikiboxFooter />
    </main>
  );
}
