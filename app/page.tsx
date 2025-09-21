import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Details from "@/components/Details";
import HIW from "@/components/HIW";
import WCU from "@/components/WCU";
import Comparisions from "@/components/Comparisions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Details />
      <HIW />
      <WCU />
      <Comparisions />
    </main>
  );
}
