import HIW from "@/components/HIW";
import WCU from "@/components/WCU";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import Trust from "@/components/Trust";
import Details from "@/components/Details";
import Comparisions from "@/components/Comparisions";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <HIW />
      <WCU />
      <Comparisions />
      <Testimonials />
      <Trust />
      <FAQs />
    </main>
  );
}
