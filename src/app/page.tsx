import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { Vision } from "@/components/Vision";
import { Story } from "@/components/Story";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Services />
        <Expertise />
        <Vision />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
